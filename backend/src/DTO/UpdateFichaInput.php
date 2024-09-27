<?php

namespace App\DTO;

class UpdateFichaInput extends InputInterface
{
    public string $name;
    public string $type;
    public string $genre;
    public string $history;
    public int $age;
    public float $height;
    public int $strength;
    public int $intelligence;
    public int $resistence;
    public int $charisma;
    public int $reflexes;
    public int $dexterity;
    public int $hit_point;
    public int $fury;
    public int $magic;
    public int $faith;
    public int $stamina;
    public bool $bleeding;
    public bool $poisoning;
    public ?array $inventory;
}
