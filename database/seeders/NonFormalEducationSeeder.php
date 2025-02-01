<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\NonFormalEducation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class NonFormalEducationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $formalEdu = [
            ['name' => 'Ula'],
            ['name' => 'Wustho'],
            ['name' => 'Ulya'],
        ];

        NonFormalEducation::insert($formalEdu);
    }
}
