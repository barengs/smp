<?php

namespace Database\Seeders;

use App\Models\FormalEducation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormalEducationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $formalEdu = [
            ['name' => 'Sekolah Dasar(SD)'],
            ['name' => 'Madrasah Ibtidaiyah(MI)'],
            ['name' => 'Madrasah Tsanawiyah(MTS)'],
            ['name' => 'Sekolah Menengah Pertama(SMP)'],
            ['name' => 'Madrasah Aliyah(MA)'],
            ['name' => 'Sekolah Menengah Atas(SMA)'],
            ['name' => 'Sekolah Menengah Kejuruan(SMK)'],
        ];

        FormalEducation::insert($formalEdu);
    }
}
