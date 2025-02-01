<?php

namespace Database\Seeders;

use App\Models\EducationType;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class EducationTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EducationType::create([
            "code" => "T01",
            "name" => "Umum",
        ]);

        EducationType::create([
            "code" => "T02",
            "name" => "Tahfidz",
        ]);
    }
}
