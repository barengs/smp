<?php

namespace Database\Seeders;

use App\Models\Attendant;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttendantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin'),
        ]);

        Attendant::create([
            'user_id' => $user->id,
            'code' => '0000',
            'first_name' => 'admin',
            'last_name' => 'admin',
            'gender' => 'l',
            'address' => 'sistem administrator',
            'phone' => '123456789111',
        ]);
    }
}
