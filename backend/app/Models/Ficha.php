<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ficha extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'image',
        'name',
        'age',
        'breed',
        'height',
        'genre',
        'weight',
        'strength',
        'intelligence',
        'resistance',
        'charisma',
        'reflexes',
        'dexterity',
        'history',
        'hit_point',
        'fury',
        'magic',
        'faith',
        'stamina',
        'bleeding',
        'poisoning',
        'item_1',
        'effect_1',
        'item_2',
        'effect_2',
        'item_3',
        'effect_3',
    ];
}
