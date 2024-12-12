<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Models\Role;
use App\Models\User;
use Exception;
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
                'roles' => Role::get(['id', 'name'])
            ]
        );
    }

    public function store(CreateUserRequest $request)
    {
        try {

            $usuario = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
            ]);

            if(!$usuario){
                throw new Exception("Error al registrar al usuario, intentalo nuevamente");
            }

            $usuario->assignRole($request->role);

            return back()->with('success', true);
        } catch (Exception $e) {
            return back()->withErrors($e->getMessage());
        }
    }

    public function destroy(User $usuario)
    {
        try {
            if ($usuario->id == auth()->user()->id) {
                throw new Exception("No se puede eliminar a si mismo");
            }

            if (!auth()->user()->hasRole(['root', 'Administrador'])) {
                throw new Exception("El usuario no tiene los permisos para esta acción");
            }

            $usuario->delete();

            return back()->with('success', true);
        } catch (Exception $e) {
            return back()->withErrors($e->getMessage());
        }
    }
}
