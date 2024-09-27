<?php

namespace App\Controller;

use App\DTO\UpdateFichaInput;
use App\Entity\Ficha;
use App\Helper\ObjectHydrator;
use App\Repository\FichaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

#[AsController]
class FichaController extends AbstractController
{
    private FichaRepository $fichaRepository;
    private SerializerInterface $serializer;

    public function __construct(FichaRepository $fichaRepository)
    {
        $this->fichaRepository = $fichaRepository;
        $this->serializer = new Serializer(
            normalizers: [ObjectNormalizer],
            encoders: [JsonEncoder]
        );
    }

    public function __invoke(Request $request): Ficha
    {
        $input = ObjectHydrator::hydrate(
            json_decode($request->getContent(), true),
            new UpdateFichaInput()
        );
    }

    #[Route("/new", name: "index", methods: ["POST"])]
    public function new(Request $request): Response
    {
        $ficha = ObjectHydrator::hydrate(
            json_decode($request->getContent(), true),
            new Ficha()
        );

        return new Response(
            "Ficha created successfully",
            Response::HTTP_CREATED
        );
    }

    #[Route("/find/{id}", name: "index", methods: ["GET"])]
    public function findById(Request $request): Response
    {
        $id = $request->get("id");
        $ficha = $this->fichaRepository->find($id);
        if (!$ficha) {
            return new JsonResponse(
                ["error" => "Ficha not found"],
                Response::HTTP_NOT_FOUND
            );
        }
        return new JsonResponse($ficha->toArray());
    }

    #[Route("/update/{id}", name: "index", methods: ["PUT"])]
    public function update(Request $request): Response
    {
        $id = $request->get("id");
        $ficha = $this->fichaRepository->find($id);
        if (!$ficha) {
            return new JsonResponse(
                ["error" => "Ficha not found"],
                Response::HTTP_NOT_FOUND
            );
        }

        $ficha = ObjectHydrator::hydrate(
            json_decode($request->getContent(), true),
            $ficha
        );

        $this->fichaRepository->save($ficha);

        return new Response("Ficha updated successfully", Response::HTTP_OK);
    }

    public function delete(Request $request, int $id): Response
    {
        $ficha = $this->fichaRepository->find($id);
        if (!$ficha) {
            return new JsonResponse(
                ["error" => "Ficha not found"],
                Response::HTTP_NOT_FOUND
            );
        }
        $this->fichaRepository->delete($ficha);
        return new Response("Ficha deleted successfully", Response::HTTP_OK);
    }

    public function findAll(): Response
    {
        $fichas = $this->fichaRepository->findAll();
        $data = [];
        foreach ($fichas as $ficha) {
            $data[] = $ficha->toArray();
        }
        return new JsonResponse($data);
    }
}
