<?php

use App\Http\Controllers\Api\AttendantController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FormalEducationController;
use App\Http\Controllers\Api\NonFormalEducationController;
use App\Http\Controllers\Api\ParentProfileController;
use App\Http\Controllers\Api\StudentRegistrationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::resource(AuthController::class);
Route::apiResource('karyawan', AttendantController::class);
Route::apiResource('orang-tua', ParentProfileController::class);
Route::apiResource('student-registration', StudentRegistrationController::class);
Route::apiResource('formal-education', FormalEducationController::class);
Route::apiResource('nonformal-education', NonFormalEducationController::class);
