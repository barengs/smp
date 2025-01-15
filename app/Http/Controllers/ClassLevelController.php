<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClassLevelRequest;
use App\Http\Resources\ApiResource;
use App\Models\ClassLevel;
use Illuminate\Http\Request;

class ClassLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ClassLevel::latest()->paginate();
        return new ApiResource(true, 'list level kelas', $data);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(ClassLevelRequest $request)
    {
        $data =  $request->validated();

        $new =  ClassLevel::create($data);

        return new ApiResource(true, 'Berhasil membuat level kelas', $new);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = ClassLevel::findorfail($id);

        return new ApiResource(true, 'list level kelas', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ClassLevelRequest $request, string $id)
    {
        $data =  $request->validated();
        $find = ClassLevel::findorfail($id);

        $new = $find->update($data);

        return new ApiResource(true, 'Berhasil mengupdate level kelas', $find);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $find = ClassLevel::findorfail($id);
        $find->delete();

        return new ApiResource(true, 'Berhasil menghapus level kelas', $find);
    }
}
