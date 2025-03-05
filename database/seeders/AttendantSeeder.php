<?php

namespace Database\Seeders;

use App\Models\Attendant;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttendantSeeder extends Seeder
{
    protected $data = [
        ["code" => "AS012025", "first_name" => "RAHMAN", "last_name" => "FARUQ", "user_id" => 2],
        ["code" => "AS022025", "first_name" => "RUMHUL", "last_name" => "AMIN", "user_id" => 3],
        ["code" => "AS032025", "first_name" => "FATHUR", "last_name" => "ROZI", "user_id" => 4],
        ["code" => "AS042025", "first_name" => "GHUFRON", "last_name" => "DPU", "user_id" => 5],
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
