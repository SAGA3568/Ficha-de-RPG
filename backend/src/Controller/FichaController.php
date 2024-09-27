<?php

namespace App\Controller;

use App\DTO\UpdateFichaInput;
use App\Entity\Ficha;
use App\Helper\ObjectHydrate;
use App\Repository\FichaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\jsonencoder;
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
            normalizers: [new ObjectNormalizer],
            encoders: [new JsonEncoder]
        );
    }

    public function __invoke(Request $request): object
    {
        return ObjectHydrate::hydrate(
            json_decode($request->getContent(), true),
            new UpdateFichaInput()
        );
    }

    #[Route("/new", name: "ficha_new", methods: ["POST"])]
    public function new(Request $request): Response
    {
        $ficha = ObjectHydrate::hydrate(
            json_decode($request->getContent(), true),
            new Ficha()
        );

        $this->fichaRepository->save($ficha);

        return new Response(
            "Ficha created successfully",
            Response::HTTP_CREATED
        );
    }

    #[Route("/find/{id}", name: "ficha_find", methods: ["GET"])]
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

    #[Route("/update/{id}", name: "ficha_update", methods: ["PUT"])]
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

        $ficha = ObjectHydrate::hydrate(
            json_decode($request->getContent(), true),
            $ficha
        );

        $this->fichaRepository->save($ficha);

        return new Response("Ficha updated successfully", Response::HTTP_OK);
    }

    #[Route("/delete/{id}", name: "ficha_delete", methods: ["DELETE"])]
    public function delete(int $id): Response
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

    #[Route("/all", name: "ficha_all", methods: ["GET"])]
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
