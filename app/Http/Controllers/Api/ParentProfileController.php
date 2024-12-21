<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ApiResource;
use App\Models\ParentProfile;
use App\Models\Phone;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Drivers\Gd\Encoders\WebpEncoder;
use Intervention\Image\ImageManager;

class ParentProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ParentProfile::with('main')->with('phone')->with('village')->with('student')->latest()->paginate();

        return new ApiResource(true, 'list data orang tua', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validasi = Validator::make($request->all(), [
            'kk' => 'required|unique:parent_profiles,kk,except,kk',
            'parent_as' => 'required',
            'nik' => 'required|unique:parent_profiles,nik',
            'first_name' => 'required',
            'password' => 'required|min:6|confirmed',
            'gender' => 'required',
            'card_address' => 'required',
            'village_id' => 'required',
            'phone' => 'required',
        ]);

        if ($validasi->fails()) {
            return response()->json($validasi->errors(), 422);
        }

        $phone = Phone::create([
            'country_code' => '+62',
            'number' => $request->phone,
        ]);

        $user = User::create([
            'name' => $request->first_name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        if ($request->hasFile('photo'))
        {
            $imageManager = new ImageManager(new Driver());
            $photo = $imageManager->read($request->photo);
            $photo->scale(width: 300);
            $photo->encode(new WebpEncoder(quality: 65));
            Storage::disk('public')->put('photo', $photo);
        }

        $parent = ParentProfile::create([
            'kk' => $request->kk,
            'main_id' => $request->main_id,
            'user_id' => $user->id,
            'parent_as' => $request->parent_as,
            'nik' => $request->first_name,
            'nik' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
            'card_address' => $request->card_address,
            'domicile_address' => $request->card_address,
            'village_id' => $request->village_id,
            'phone_id' => $phone->id,
            'photo' => '', // no photo
        ]);

        if ($parent) {
            return new ApiResource(true, 'Pendaftaran Orang Tua berhasil!', $parent);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = ParentProfile::where('kk', $id)->orWhere('nik', $id)->with('main')->with('phone')->with('village')->with('student')->first();

        return new ApiResource(true, 'data orang tua', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
