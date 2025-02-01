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
            ['name' => 'Diploma Satu (D I)'],
            ['name' => 'Diploma Dua (D II)'],
            ['name' => 'Siploma Tiga (D III)'],
            ['name' => 'Siploma Empat (D IV)'],
            ['name' => 'Setrata Satu (S1)'],
            ['name' => 'Setrata Dua (S2)'],
            ['name' => 'Setrata Tiga (S3)'],
        ];

        FormalEducation::insert($formalEdu);
    }
}
