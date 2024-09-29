<?php

namespace Database\Factories;

use App\Models\Ficha;
use Illuminate\Database\Eloquent\Factories\Factory;

class FichaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Ficha::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'type' => $this->faker->randomElement(['Barbaro', 'Mago', 'Guerreiro']),
            'image' => $this->faker->imageUrl(),
            'name' => $this->faker->name(),
            'age' => $this->faker->numberBetween(18, 120),
            'breed' => $this->faker->randomElement(['Humano', 'Elfo', 'Anão']),
            'height' => $this->faker->randomFloat(2, 1.2, 2.0), // Between 1.2m and 2.0m
            'genre' => $this->faker->randomElement(['M', 'F']),
            'weight' => $this->faker->numberBetween(50, 150), // Random weight between 50 and 150 kg
            'strength' => $this->faker->numberBetween(1, 20),
            'intelligence' => $this->faker->numberBetween(1, 20),
            'resistance' => $this->faker->numberBetween(1, 20),
            'charisma' => $this->faker->numberBetween(1, 20),
            'reflexes' => $this->faker->numberBetween(1, 20),
            'dexterity' => $this->faker->numberBetween(1, 20),
            'history' => $this->faker->paragraph(), // Generates a random paragraph of text
            'hit_point' => $this->faker->numberBetween(1, 100),
            'fury' => $this->faker->optional()->numberBetween(1, 20), // Fury is optional and may be null
            'magic' => $this->faker->optional()->numberBetween(1, 20), // Magic is optional
            'faith' => $this->faker->optional()->numberBetween(1, 20), // Faith is optional
            'stamina' => $this->faker->optional()->numberBetween(1, 20), // Stamina is optional
            'bleeding' => $this->faker->boolean(),
            'poisoning' => $this->faker->boolean(),
            'item_1' => $this->faker->optional()->word(), // Item 1 is optional
            'effect_1' => $this->faker->optional()->word(), // Effect 1 is optional
            'item_2' => $this->faker->optional()->word(), // Item 2 is optional
            'effect_2' => $this->faker->optional()->word(), // Effect 2 is optional
            'item_3' => $this->faker->optional()->word(), // Item 3 is optional
            'effect_3' => $this->faker->optional()->word(), // Effect 3 is optional
        ];
    }
}

