<?php
use App\Http\Controllers\FichaController;
use Illuminate\Support\Facades\Route;


Route::get('/fichas', [FichaController::class, 'index']);
Route::get('/fichas/{id}', [FichaController::class, 'show']);
Route::post('/fichas', [FichaController::class, 'store']);
Route::put('/fichas/{id}', [FichaController::class, 'update']);
Route::delete('/fichas/{id}', [FichaController::class, 'destroy']);
