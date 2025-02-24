<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

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
            "name" => "superadmin",
            "guard_name" => "api",
        ]);

        $this->permissions = [
            ['name' => 'tambah asatidz', 'guard_name' => 'api'],
            ['name' => 'ubah asatidz', 'guard_name' => 'api'],
            ['name' => 'hapus asatidz', 'guard_name' => 'api'],
            ['name' => 'tambah asrama', 'guard_name' => 'api'],
            ['name' => 'ubah asrama', 'guard_name' => 'api'],
            ['name' => 'hapus asrama', 'guard_name' => 'api'],
            ['name' => 'tambah santri', 'guard_name' => 'api'],
            ['name' => 'ubah santri', 'guard_name' => 'api'],
            ['name' => 'hapus santri', 'guard_name' => 'api'],
            ['name' => 'tambah pendidikan', 'guard_name' => 'api'],
            ['name' => 'ubah pendidikan', 'guard_name' => 'api'],
            ['name' => 'hapus pendidikan', 'guard_name' => 'api'],
        ];

        foreach ($this->permissions as $permission) {
            $izin = Permission::create($permission);
            $administrator->givePermissionTo($izin);
        }

        $this->roles = [
            ['name' => 'administrasi', 'guard_name' => 'api'],
            ['name' => 'kasir', 'guard_name' => 'api'],
            ['name' => 'wali kelas', 'guard_name' => 'api'],
            ['name' => 'kepala asrama', 'guard_name' => 'api'],
            ['name' => 'keamanan asrama', 'guard_name' => 'api'],
            ['name' => 'keamanan pesantren', 'guard_name' => 'api'],
        ];

        foreach ($this->roles as $value) {
            Role::create($value);
        }

        $sysadmin = User::where('username', 'erfaruq')->first();

        $sysadmin->assignRole('superadmin');

        $admin = User::where('username', 'rosi')->first();

        $admin->assignRole('administrasi');

    }
}
