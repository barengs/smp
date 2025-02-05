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
        $administrator = Role::create([
            "name" => "administrator",
            "guard_name" => "web",
        ]);

        $admin = Role::create([
            "name" => "admin",
            "guard_name" => "web",
        ]);

        $keuangan = Role::create([
            "name" => "keuangan",
            "guard_name" => "web",
        ]);

        $this->permissions = [
            ['name' => 'tambah asatidz', 'guard_name' => 'web'],
            ['name' => 'ubah asatidz', 'guard_name' => 'web'],
            ['name' => 'hapus asatidz', 'guard_name' => 'web'],
            ['name' => 'tambah asrama', 'guard_name' => 'web'],
            ['name' => 'ubah asrama', 'guard_name' => 'web'],
            ['name' => 'hapus asrama', 'guard_name' => 'web'],
            ['name' => 'tambah santri', 'guard_name' => 'web'],
            ['name' => 'ubah santri', 'guard_name' => 'web'],
            ['name' => 'hapus santri', 'guard_name' => 'web'],
            ['name' => 'tambah pendidikan', 'guard_name' => 'web'],
            ['name' => 'ubah pendidikan', 'guard_name' => 'web'],
            ['name' => 'hapus pendidikan', 'guard_name' => 'web'],
        ];

        foreach ($this->permissions as $permission) {
            $izin = Permission::create($permission);
            $administrator->givePermissionTo($izin);
        }

    }
}
