<?php

namespace App\Infra;

use App\DTO\InputInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Controller\ValueResolverInterface;
use Symfony\Component\HttpKernel\ControllerMetadata\ArgumentMetadata;
use Symfony\Component\Serializer\SerializerInterface;

final class ValueResolver implements ValueResolverInterface
{
    public function __construct(
        private readonly SerializerInterface $serializer
    ) {
    }

    public function resolve(Request $request, ArgumentMetadata $argument): array
    {
        $argumentType = $argument->getType();

        if (
            !$argumentType ||
            !is_subclass_of($argumentType, InputInterface::class)
        ) {
            return [];
        }

        return [
            $this->serializer->deserialize(
                $request->getContent(),
                $argument->getType(),
                "json",
                $request->getContext()
            ),
        ];
    }
}
