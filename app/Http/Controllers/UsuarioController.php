<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Exceptions\Renderer\Renderer;
use Inertia\Inertia;
use Inertia\Response;

class UsuarioController extends Controller
{
    public function index() : Response

    {
        return Inertia::render("Usuarios/Usuarios/Index");
    }
}
