<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFichasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('fichas', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('image');
            $table->string('name');
            $table->integer('age');
            $table->string('breed');
            $table->decimal('height', 4);
            $table->string('genre');
            $table->integer('weight');
            $table->integer('strength');
            $table->integer('intelligence');
            $table->integer('resistance');
            $table->integer('charisma');
            $table->integer('reflexes');
            $table->integer('dexterity');
            $table->text('history');
            $table->integer('hit_point');
            $table->integer('fury')->nullable();
            $table->integer('magic')->nullable();
            $table->integer('faith')->nullable();
            $table->integer('stamina')->nullable();
            $table->boolean('bleeding');
            $table->boolean('poisoning');
            $table->string('item_1')->nullable();
            $table->string('effect_1')->nullable();
            $table->string('item_2')->nullable();
            $table->string('effect_2')->nullable();
            $table->string('item_3')->nullable();
            $table->string('effect_3')->nullable();
            $table->timestamps(); // adds created_at and updated_at fields
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('fichas');
    }
}
