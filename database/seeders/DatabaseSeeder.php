<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'root'],
            ['name' => 'Administrador'],
            ['name' => 'Supervisor'],
            ['name' => 'Vendedor'],
            ['name' => 'Almacen'],
            ['name' => 'Facturista'],
        ];

        $permisos = [];


        $root = User::factory()->create([
            'name' => 'Root',
            'email' => 'manager@managerapp.com',
            'password' => 'password'
        ]);


        $admin = User::factory()->create([
            'name' => 'Administrador',
            'email' => 'admin@managerapp.com',
            'password' => 'password'
        ]);


        // Assign roles to the root user
        foreach ($roles as $rol) {
            $role = Role::create($rol);
            if ($role->name == 'Administrador') {
                // $admin->roles()->attach($role->id);
                $admin->assignRole('Administrador');
            } elseif ($role->name == 'root') {
                // $root->roles()->attach($role->id);
                $root->assignRole('root');
            }
        }

        \App\Models\User::factory(20)->create()->map(fn($user) => $user->assignRole('Vendedor'));
    }
}
