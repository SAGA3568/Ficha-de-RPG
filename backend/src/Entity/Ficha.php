<?php

namespace App\Entity;

use App\Repository\FichaRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FichaRepository::class)]
class Ficha
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private int $id;

    #[ORM\Column(type: "string", length: 255)]
    private string $name;

    #[ORM\Column(type: "string", length: 255)]
    private string $type;

    #[ORM\Column(type: "string", length: 20)]
    private string $genre;

    #[ORM\Column(type: "string", length: 255)]
    private string $history;

    #[ORM\Column(type: "integer")]
    private int $age;

    #[ORM\Column(type: "float")]
    private float $height;

    #[ORM\Column(type: "integer")]
    private int $strength;

    #[ORM\Column(type: "integer")]
    private int $intelligence;

    #[ORM\Column(type: "integer")]
    private int $resistence;

    #[ORM\Column(type: "integer")]
    private int $charisma;

    #[ORM\Column(type: "integer")]
    private int $reflexes;

    #[ORM\Column(type: "integer")]
    private int $dexterity;

    #[ORM\Column(type: "integer")]
    private int $hitPoint;

    #[ORM\Column(type: "integer")]
    private int $fury;

    #[ORM\Column(type: "integer")]
    private int $magic;

    #[ORM\Column(type: "integer")]
    private int $faith;

    #[ORM\Column(type: "integer")]
    private int $stamina;

    #[ORM\Column(type: "boolean")]
    private bool $bleeding;

    #[ORM\Column(type: "boolean")]
    private bool $poisoning;

    #[ORM\Column(type: "json", nullable: true)]
    private array $inventory;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(string $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function getHistory(): ?string
    {
        return $this->history;
    }

    public function setHistory(string $history): self
    {
        $this->history = $history;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(int $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getHeight(): ?float
    {
        return $this->height;
    }

    public function setHeight(float $height): self
    {
        $this->height = $height;

        return $this;
    }

    public function getStrength(): ?int
    {
        return $this->strength;
    }

    public function setStrength(int $strength): self
    {
        $this->strength = $strength;

        return $this;
    }

    public function getIntelligence(): ?int
    {
        return $this->intelligence;
    }

    public function setIntelligence(int $intelligence): self
    {
        $this->intelligence = $intelligence;

        return $this;
    }

    public function getResistence(): ?int
    {
        return $this->resistence;
    }

    public function setResistence(int $resistence): self
    {
        $this->resistence = $resistence;

        return $this;
    }

    public function getCharisma(): ?int
    {
        return $this->charisma;
    }

    public function setCharisma(int $charisma): self
    {
        $this->charisma = $charisma;

        return $this;
    }

    public function getReflexes(): ?int
    {
        return $this->reflexes;
    }

    public function setReflexes(int $reflexes): self
    {
        $this->reflexes = $reflexes;

        return $this;
    }

    public function getDexterity(): ?int
    {
        return $this->dexterity;
    }

    public function setDexterity(int $dexterity): self
    {
        $this->dexterity = $dexterity;

        return $this;
    }

    public function getHitPoint(): ?int
    {
        return $this->hitPoint;
    }

    public function setHitPoint(int $hitPoint): self
    {
        $this->hitPoint = $hitPoint;

        return $this;
    }

    public function getFury(): ?int
    {
        return $this->fury;
    }

    public function setFury(int $fury): self
    {
        $this->fury = $fury;

        return $this;
    }

    public function getMagic(): ?int
    {
        return $this->magic;
    }

    public function setMagic(int $magic): self
    {
        $this->magic = $magic;

        return $this;
    }

    public function getFaith(): ?int
    {
        return $this->faith;
    }

    public function setFaith(int $faith): self
    {
        $this->faith = $faith;

        return $this;
    }

    public function getStamina(): ?int
    {
        return $this->stamina;
    }

    public function setStamina(int $stamina): self
    {
        $this->stamina = $stamina;

        return $this;
    }

    public function getBleeding(): ?bool
    {
        return $this->bleeding;
    }

    public function setBleeding(bool $bleeding): self
    {
        $this->bleeding = $bleeding;

        return $this;
    }

    public function getPoisoning(): ?bool
    {
        return $this->poisoning;
    }

    public function setPoisoning(bool $poisoning): self
    {
        $this->poisoning = $poisoning;

        return $this;
    }

    public function getInventory(): ?array
    {
        return $this->inventory;
    }

    /**
     * @param array $inventory
     * @return $this
     */
    public function setInventory(array $inventory): self
    {
        $this->inventory = $inventory;

        return $this;
    }

    public function __toString(): string
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->inventory = [];
    }

    public function addInventory(string $item): self
    {
        $this->inventory[] = $item;

        return $this;
    }

    /**
     * @return array
     */
    public function toArray(): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "type" => $this->type,
            "genre" => $this->genre,
            "history" => $this->history,
            "age" => $this->age,
            "height" => $this->height,
            "strength" => $this->strength,
            "intelligence" => $this->intelligence,
            "resistence" => $this->resistence,
            "charisma" => $this->charisma,
            "reflexes" => $this->reflexes,
            "dexterity" => $this->dexterity,
            "hitPoint" => $this->hitPoint,
            "fury" => $this->fury,
            "magic" => $this->magic,
            "faith" => $this->faith,
            "stamina" => $this->stamina,
            "bleeding" => $this->bleeding,
            "poisoning" => $this->poisoning,
            "inventory" => $this->inventory,
        ];
    }
}
