<?php

namespace App\Repository;

use App\Entity\Ficha;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

class FichaRepository extends ServiceEntityRepository
{
    private EntityManagerInterface $entityManager;
    public function __construct(
        ManagerRegistry $registry,
        EntityManagerInterface $entityManager
    ) {
        $this->entityManager = $entityManager;
        parent::__construct($registry, Ficha::class);
    }

    /**
     * @param Ficha $ficha
     * @return void
     */
    public function save(Ficha $ficha): void
    {
        $this->entityManager->persist($ficha);
        $this->entityManager->flush();
    }

    /**
     * @param Ficha $ficha
     * @return void
     */
    public function delete(Ficha $ficha): void
    {
        $this->entityManager->remove($ficha);
        $this->entityManager->flush();
    }
}