<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentFormalClassLevelRequest;
use App\Http\Requests\StudentFormalClassLevelRequestUpdate;
use App\Http\Resources\ApiResource;
use App\Models\StudentFormalClassLevel;
use Illuminate\Http\Request;

class StudentFormalClassLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // QUESTION : MAU DI QUERY BERDASARKAN APA ?
        $data = StudentFormalClassLevel::latest()->paginate();
        return new ApiResource(true, 'list data kelas level siswa', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentFormalClassLevelRequest $request)
    {
        $data = $request->validated();

        StudentFormalClassLevel::create($data);

        return new ApiResource(true, 'berhasil menambahkan kelas level siswa', $data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = StudentFormalClassLevel::findorfail($id);
        return new ApiResource(true, 'data kelas level siswa', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StudentFormalClassLevelRequestUpdate $request, string $id)
    {
        $data = $request->validated();
        $find = StudentFormalClassLevel::findorfail($id);
        $find->update([
            'student_id' => $data['student_id'] ??  $find->student_id,
            'formal_education_id' => $data['formal_education_id'] ?? $find->formal_education_id,
            'class_level_id' => $data['class_level_id'] ?? $find->class_level_id,
        ]);



        return new ApiResource(true, 'berhasil mengupdate kelas level siswa', $find);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $find = StudentFormalClassLevel::findorfail($id);
        $find->delete();

        return new ApiResource(true, 'berhasil menghapus kelas level siswa', $find);
    }
}
