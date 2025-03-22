<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Laravolt\Indonesia\Seeds\CitiesSeeder;
use Laravolt\Indonesia\Seeds\VillagesSeeder;
use Laravolt\Indonesia\Seeds\DistrictsSeeder;
use Laravolt\Indonesia\Seeds\ProvincesSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            ProvincesSeeder::class,
            CitiesSeeder::class,
            DistrictsSeeder::class,
            VillagesSeeder::class,
            FormalEducationSeeder::class,
            PermissionSeeder::class,
            HostelSeeder::class,
            FormalEducationSeeder::class,
            NonFormalEducationSeeder::class,
            EducationTypeSeeder::class,
            AttendantSeeder::class,
            ParentProfileSeeder::class,
            StudentSeeder::class,
        ]);
    }
}
