<?php

namespace App\Http\Controllers;

use App\Models\Ficha;
use Illuminate\Http\Request;

class FichaController extends Controller
{
    // Display all Fichas
    public function index()
    {
        $fichas = Ficha::all();
        return response()->json($fichas);
    }

    // Store a new Ficha
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'type' => 'required|string',
            'image' => 'required|string',
            'name' => 'required|string',
            'age' => 'required|integer',
            'breed' => 'required|string',
            'height' => 'required|numeric',
            'genre' => 'required|string',
            'weight' => 'required|integer',
            'strength' => 'required|integer',
            'intelligence' => 'required|integer',
            'resistance' => 'required|integer',
            'charisma' => 'required|integer',
            'reflexes' => 'required|integer',
            'dexterity' => 'required|integer',
            'history' => 'required|string',
            'hit_point' => 'required|integer',
            'fury' => 'nullable|integer',
            'magic' => 'nullable|integer',
            'faith' => 'nullable|integer',
            'stamina' => 'nullable|integer',
            'bleeding' => 'required|boolean',
            'poisoning' => 'required|boolean',
            'item_1' => 'nullable|string',
            'effect_1' => 'nullable|string',
            'item_2' => 'nullable|string',
            'effect_2' => 'nullable|string',
            'item_3' => 'nullable|string',
            'effect_3' => 'nullable|string',
        ]);

        $ficha = Ficha::create($validatedData);
        return response()->json($ficha, 201);
    }

    // Display a single Ficha
    public function show($id)
    {
        $ficha = Ficha::findOrFail($id);
        return response()->json($ficha);
    }

    // Update an existing Ficha
    public function update(Request $request, $id)
    {
        $ficha = Ficha::findOrFail($id);

        $validatedData = $request->validate([
            // Similar validation rules as store()
            'type' => 'required|string',
            // Add validation rules for all fields...
        ]);

        $ficha->update($validatedData);
        return response()->json($ficha);
    }

    // Delete a Ficha
    public function destroy($id)
    {
        $ficha = Ficha::findOrFail($id);
        $ficha->delete();
        return response()->json(null, 204);
    }
}
