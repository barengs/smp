<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ApiResource;
use App\Models\ParentProfile;
use Illuminate\Http\Request;

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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = ParentProfile::where('id', $id)->with('main')->with('phone')->with('village')->with('student')->first();

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
