<?php

use Inertia\Inertia;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('usuarios/usuarios', \App\Http\Controllers\UsuarioController::class)->only(['index', 'store', 'destroy']);
    // Route::get('usuarios/usuarios/nuevo', [UsuarioController::class, "create"])->name('usuarios.create');
    // Route::delete('usuarios/usuarios/{usuario}/delete', [UsuarioController::class, "destroy"])->name('usuarios.destroy');

    Route::resource('usuarios/perfiles', \App\Http\Controllers\PerfilController::class)->only(['index']);


    Route::get('/test', function () {
        return Inertia::render('Dashboard');
    })->name('test');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
