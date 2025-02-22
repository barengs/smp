<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StudentParentRegistrationPost;
use App\Http\Requests\StudentRegistrationPost;
use App\Http\Requests\StudentWithoutParentRegistrationPost;
use App\Http\Resources\ApiResource;
use App\Models\ParentProfile;
use App\Models\Phone;
use App\Models\StudentRegistration;
use App\Models\User;
use Illuminate\Http\Request;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Drivers\Gd\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;

class StudentRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = StudentRegistration::latest()->paginate();

        return new ApiResource(true, 'list data siswa', $data);
    }

    public function searchKK(string $keyword)
    {
        $data = ParentProfile::where('kk', $keyword)->first();
        return new ApiResource(true, 'data orang tua', $data);
    }


    public function storeWithParent(StudentParentRegistrationPost $request)
    {
        $data = $request->validated();

        $newUser = User::create([
            'name' => $data['nama_depan_ortu'],
            'email' => $data['email'],
            'password' => $data['no_kk'],
        ]);

        $phone = Phone::create([
            'country_code' => '62',
            'number' => '05141421' . rand(),
        ]);

        $parent = ParentProfile::create([
            'user_id' => $newUser->id,
            'parent_as' => $data['status_ortu'],
            'nik' => $data['nik_parent'],
            'kk' => $data['no_kk'],
            'first_name' => $data['nama_depan_ortu'],
            'last_name' => $data['nama_belakang_ortu'],
            'gender' => $data['gender_ortu'],
            'card_address' => $data['alamat_ktp_ortu'],
            'domicile_address' => $data['alamat_domisili_ortu'],
            'village_id' => 1,
            'phone_id' => $phone->id,
        ]);

        $student = StudentRegistration::create([
            'reg_no' => rand(),
            'nik' => $data['nik_siswa'],
            'first_name' => $data['nama_depan_siswa'],
            'last_name' => $data['nama_belakang_siswa'],
            'gender' => $data['gender_siswa'],
            'parent_id' => $parent->id,
            'address' => $data['alamat_siswa'],
            'village_id' => 1,
        ]);

        return new ApiResource(true, 'Pendaftaran Siswa berhasil!', $student);
    }

    public function storeWithoutParent(StudentWithoutParentRegistrationPost $request)
    {
        $data = $request->validated();

        $student = StudentRegistration::create([
            'reg_no' => rand(),
            'nik' => $data['nik_siswa'],
            'first_name' => $data['nama_depan_siswa'],
            'last_name' => $data['nama_belakang_siswa'],
            'gender' => $data['gender_siswa'],
            'parent_id' => $data['parent_id'],
            'address' => $data['alamat_siswa'],
            'village_id' => 1,
        ]);

        return new ApiResource(true, 'Pendaftaran Siswa berhasil!', $student);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRegistrationPost $request)
    {
        $data = $request->validated();
        if ($request->hasFile('photo')) {
            $imageManager = new ImageManager(new Driver());
            $photo = $imageManager->read($request->photo);
            $photo->scale(width: 300);
            $encodedPhoto = $photo->encode(new WebpEncoder(quality: 65));
            $photoFilename = 'photos/' . uniqid() . '.webp';
            Storage::disk('public')->put($photoFilename, $encodedPhoto);
        }

        $student = StudentRegistration::create([
            'reg_no' => rand(),
            'nik' => $data['nik'],
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'gender' => $data['gender'],
            'last_formal_edu_id' => $data['last_formal_edu_id'] ?? null,
            'last_nonformal_edu_id' => $data['last_nonformal_edu_id'] ?? null,
            'photo' => $photoFilename ?? null,
            // TODO: NYALAKAN INI NANTI
            // 'parent_id' => auth()->user->id,
            'parent_id' => 1,
            'address' => $data['address'],
            'village_id' => 1,
        ]);

        return new ApiResource(true, 'Pendaftaran Siswa berhasil!', $student);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // QUESTION: Untuk Shownya Mau Di Filter Seperti Apa Pak?
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // QUESTION: Apakah ada fungsi untuk update?
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // return new ApiResource(true, 'Berhasil mendelete Pendidikan Formal', $find);
    }
}
