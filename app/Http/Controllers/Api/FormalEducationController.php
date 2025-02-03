<?php

namespace App\Http\Controllers\Api;

use App\Models\FormalEducation;
use Illuminate\Http\Request;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\EducationRequest;

class FormalEducationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = FormalEducation::all();
        return new ApiResource(true, 'List data Pendidikan Formal', $data);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(EducationRequest $request)
    {
        $data = $request->validated();

        $formalEducation = FormalEducation::create($data);

        return new ApiResource(true, 'Berhasil menambahkan Pendidikan Formal', $formalEducation);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = FormalEducation::findorfail($id);

        return new ApiResource(true, 'Data Pendidikan Formal', $data);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(EducationRequest $request, string $id)
    {
        $data = $request->validated();

        $find = FormalEducation::findorfail($id);

        if ($find) {
            $new = $find->update($data);
            return new ApiResource(true, 'Berhasil mengupdate Pendidikan Formal', $find);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $find = FormalEducation::findorfail($id);
        $find->delete();
        return new ApiResource(true, 'Berhasil mendelete Pendidikan Formal', $find);
    }
}
