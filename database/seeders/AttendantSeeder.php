<?php

namespace Database\Seeders;

use App\Models\Attendant;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttendantSeeder extends Seeder
{
    protected $data = [
        ["code" => "AS01", "first_name" => "RAHMAN", "last_name" => "FARUQ", "user_id" => 2],
        ["code" => "AS02", "first_name" => "RUMHUL", "last_name" => "AMIN", "user_id" => 3],
        ["code" => "AS03", "first_name" => "FATHUR", "last_name" => "ROZI", "user_id" => 4],
        ["code" => "AS04", "first_name" => "GHUFRON", "last_name" => "DPU", "user_id" => 5],
    ];
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->data as $row) {
            Attendant::create($row);
        }
    }
}
