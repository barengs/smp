<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Attendant;
use App\Models\Student;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function index()
    {
        $santri = Student::where("status", 'Aktif')->get()->count();
        $asatidz = Attendant::count();
        $tugasan = Student::where("status", 'Tugas')->get()->count();

        return response()->json(['santri' => $santri, 'asatidz' => $asatidz, 'tugasan' => $tugasan], 200);
    }
}
