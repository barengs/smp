<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EducationRequest;
use App\Http\Resources\ApiResource;
use App\Models\NonFormalEducation;
use Illuminate\Http\Request;

class NonFormalEducationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = NonFormalEducation::get();
        return new ApiResource(true, 'List data Pendidikan Non Formal', $data);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(EducationRequest $request)
    {
        $data = $request->validated();

        $nonFormalEducation = NonFormalEducation::create($data);

        return new ApiResource(true, 'Berhasil menambahkan Pendidikan Non Formal', $nonFormalEducation);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = NonFormalEducation::findorfail($id);

        return new ApiResource(true, 'Data Pendidikan Non Formal', $data);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(EducationRequest $request, string $id)
    {
        $data = $request->validated();

        $find = NonFormalEducation::findorfail($id);

        if ($find) {
            $new = $find->update($data);
            return new ApiResource(true, 'Berhasil mengupdate  Pendidikan Non Formal', $find);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $find = NonFormalEducation::findorfail($id);
        $find->delete();
        return new ApiResource(true, 'Berhasil mendelete Pendidikan Non Formal', $find);
    }
}
