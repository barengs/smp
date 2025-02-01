<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            "name" => "administrator",
            "guard_name" => "web",
        ]);

        Role::create([
            "name" => "admin",
            "guard_name" => "web",
        ]);

        Role::create([
            "name" => "keuangan",
            "guard_name" => "web",
        ]);
    }
}
