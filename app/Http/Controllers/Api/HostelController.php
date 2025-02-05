<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\HostelRequest;
use App\Http\Resources\ApiResource;
use App\Models\Hostel;
use Illuminate\Http\Request;

class HostelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Hostel::orderBy('name', 'asc')->get();
        return new ApiResource(true, 'Semua data asrama', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(HostelRequest $request)
    {
        $data = $request->validated();

        $addNew = Hostel::create($data);

        return new ApiResource(true, 'berhasil menyimpan asrama', $addNew);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Hostel::where('id', $id)->orWhere('name', $id)->first();
        return new ApiResource(true, 'detil asrama', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->validated();
        $addNew = Hostel::find($id);

        $addNew->name = $data['name'] ?? $addNew->name;
        $addNew->parent_id = $data['perent_id'] ?? $addNew->parent_id;

        return new ApiResource(true, 'berhasil ubah asrama', $addNew);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
