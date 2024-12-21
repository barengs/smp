<?php

namespace App\Http\Controllers\Api;

use App\Models\Attendant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ApiResource;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class AttendantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Attendant::with('user')->latest()->paginate();

        return new ApiResource(true, 'List data karyawan', $data);
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
            $att = Attendant::create([
                'user_id' => $account->id,
                'code' => 123,
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'gender' => $request->gender,
                'address' => $request->address,
                'phone' => $request->phone,
            ]);

            if ($att) {
                return new ApiResource(true, 'Data karyawan tersimpan', $att);
            }
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
}
