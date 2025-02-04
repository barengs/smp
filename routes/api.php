<?php

use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\HostelController;
use App\Http\Controllers\Api\PermissionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\ClassLevelController;
use App\Http\Controllers\Api\VillageController;
use App\Http\Controllers\Api\DistrictController;
use App\Http\Controllers\Api\ProvinceController;
use App\Http\Controllers\Api\AttendantController;
use App\Http\Controllers\Api\EducationTypeController;
use App\Http\Controllers\Api\ParentProfileController;
use App\Http\Controllers\Api\FormalEducationController;
use App\Http\Controllers\Api\NonFormalEducationController;
use App\Http\Controllers\Api\StudentRegistrationController;
use App\Http\Controllers\StudentFormalClassLevelController;

// Route::resource(AuthController::class);
// Route::get('/', [HomeController::class, 'index'])->name('home');

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::controller(AuthController::class)->group(function () {
        Route::post('login', 'login');
        Route::post('logout', 'logout');
        Route::post('refresh', 'refresh');
        Route::get('me', 'me');
    });
});

Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::apiResource('karyawan', AttendantController::class);
Route::apiResource('orang-tua', ParentProfileController::class);
Route::apiResource('student-registration', StudentRegistrationController::class);
Route::apiResource('formal-education', FormalEducationController::class);
Route::apiResource('class-level', ClassLevelController::class);
Route::apiResource('student-formal-class-level', StudentFormalClassLevelController::class);
Route::apiResource('education-type', EducationTypeController::class);
Route::apiResource('nonformal-education', NonFormalEducationController::class);

Route::apiResource('propinsi', ProvinceController::class);
Route::apiResource('kota', CityController::class);
Route::apiResource('kecamatan', DistrictController::class);
Route::apiResource('desa', VillageController::class);

Route::apiResource('attendant', AttendantController::class);
Route::apiResource('role', RoleController::class);
Route::apiResource('permission', PermissionController::class);

Route::apiResource('hostel', HostelController::class);

Route::apiResource('formal-education', FormalEducationController::class);
Route::apiResource('nonformal-education', NonFormalEducationController::class);