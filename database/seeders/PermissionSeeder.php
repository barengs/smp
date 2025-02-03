<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    protected $permissions;
    protected $roles;
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

        $this->permissions = [
            ['name' => 'tambah asatidz'],
            ['name' => 'ubah asatidz'],
            ['name' => 'hapus asatidz'],
            ['name' => 'tambah asrama'],
            ['name' => 'ubah asrama'],
            ['name' => 'hapus asrama'],
            ['name' => 'tambah santri'],
            ['name' => 'ubah santri'],
            ['name' => 'hapus santri'],
            ['name' => 'tambah pendidikan'],
            ['name' => 'ubah pendidikan'],
            ['name' => 'hapus pendidikan'],
        ];

        foreach ($this->permissions as $permission) {
            Permission::create($permission);
        }
    }
}
