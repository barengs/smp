<?php

use App\Http\Controllers\Api\AttendantController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ParentProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::resource(AuthController::class);
Route::apiResource('karyawan', AttendantController::class);
Route::apiResource('orang-tua', ParentProfileController::class);
