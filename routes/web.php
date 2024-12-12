<?php

use App\Http\Controllers\PerfilController;
use App\Http\Controllers\ProfileController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

    Route::get('usuarios/perfiles', [PerfilController::class, "index"])->name('perfiles.index');


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
