<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PerfilController extends Controller
{
    public function index() : Response
    {
        return Inertia::render('Usuarios/Perfiles/Index');
    }
}
