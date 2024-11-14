<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Exceptions\Renderer\Renderer;
use Inertia\Inertia;
use Inertia\Response;

class UsuarioController extends Controller
{
    public function index(): Response
    {
        $usuarios = User::get();

        return Inertia::render(
            "Usuarios/Usuarios/Index",
            [
                'usuarios' => $usuarios->map(fn($u) => [
                    'id' => $u->id,
                    'name' => $u->name,
                    'email' => $u->email,
                    'role' => $u->roles?->first()?->name
                ]),
            ]
        );
    }
}
