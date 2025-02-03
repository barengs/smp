<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EducationTypePost;
use App\Http\Requests\EducationTypeUpdate;
use App\Http\Resources\ApiResource;
use App\Models\EducationType;
use Illuminate\Http\Request;

class EducationTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = EducationType::latest()->get();
        return new ApiResource(true, 'List data tipe pendidikan', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EducationTypePost $request)
    {
        $data = $request->validated();

        $new = EducationType::create($data);

        return new ApiResource(true, 'Berhasil menambahkan data tipe pendidikan', $new);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $key)
    {
        $data = EducationType::where('id', $key)->orWhere('code', $key)->first();
        return new ApiResource(true, 'data tipe pendidikan', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EducationTypeUpdate $request, string $id)
    {
        $data = $request->validated();

        $find = EducationType::findorfail($id);

        $find->update([
            'code' => $data['code'] ?? $find->code,
            'name' => $data['name'] ?? $find->name,
        ]);

        return new ApiResource(true, 'Berhasil menambahkan data tipe pendidikan', $find);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = EducationType::findorfail($id);
        $data->delete();
        return new ApiResource(true, 'Berhasil menghapus data tipe pendidikan', $data);
    }
}
