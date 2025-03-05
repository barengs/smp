<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Attendant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class AttendantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Attendant::with('user')->latest()->get();

        // $att = DB::table('attendants as a')
        //     ->join('users as u', 'u.id', '=', 'a.user_id')
        //     ->join('user_roles as ur', 'ur.user_id', '=', 'u.id')
        //     ->get();

        $user = User::whereHas('attendant')->with('attendant')->with('roles')->get();

        return new ApiResource(true, 'List data karyawan', $user);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required|unique:users,email',
            'password' => 'required|min:6|confirmed',
            'first_name' => 'required',
            'gender' => 'required',
            'address' => 'required',
            'phone' => 'required|unique:attendants,phone',
        ]);

        if ($validation->fails()) {
            return response()->json($validation->errors(), 422);
        }

        $account = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        if ($account) {
            if ($request->role) {
                $account->assignRole($request->role);
            }
            $lastData = Attendant::orderBy('id', 'desc')->first();
            $att = Attendant::create([
                'user_id' => $account->id,
                'code' => $this->generateCode($lastData->id),
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'gender' => $request->gender,
                'address' => $request->address,
                'phone' => $request->phone,
            ]);

            if ($att) {
                return new ApiResource(true, 'Data karyawan tersimpan', $att);
            } else {
                return new ApiResource(false, 'gagal membuat profil pengguna', '');
            }
        } else {
            return new ApiResource(false, 'gagal membuat akun pengguna', '');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = Attendant::where('id', $id)->orWhere('first_name', $id)->with('user')->first();

        return new ApiResource(true, 'List data karyawan', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Attendant $attendant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Attendant $attendant)
    {
        //
    }

    public function generateCode($id)
    {
        $dt = Carbon::now();
        $th = $dt->year;
        $bl = $dt->month;
        if ($id < 10) {
            return 'AS0' . $id + 1 . $th . $bl;
        } else {
            return 'AS' . $id + 1 . $th . $bl;
        }
    }
}
