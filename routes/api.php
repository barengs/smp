<?php

use App\Http\Controllers\Api\AttendantController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\EducationTypeController;
use App\Http\Controllers\Api\FormalEducationController;
use App\Http\Controllers\Api\NonFormalEducationController;
use App\Http\Controllers\Api\ParentProfileController;
use App\Http\Controllers\Api\StudentRegistrationController;
use App\Http\Controllers\ClassLevelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::apiResource('karyawan', AttendantController::class);
Route::apiResource('orang-tua', ParentProfileController::class);
Route::apiResource('student-registration', StudentRegistrationController::class);
Route::apiResource('formal-education', FormalEducationController::class);
Route::apiResource('class-level', ClassLevelController::class);
Route::apiResource('education-type', EducationTypeController::class);
Route::apiResource('nonformal-education', NonFormalEducationController::class);
