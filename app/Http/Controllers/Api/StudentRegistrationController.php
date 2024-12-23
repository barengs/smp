<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StudentRegistrationPost;
use App\Http\Resources\ApiResource;
use App\Models\StudentRegistration;
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
            $photo->encode(new WebpEncoder(quality: 65));
            $photoFilename = 'photos/' . uniqid() . '.webp';
            Storage::disk('public')->put('photo', $photo);
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
