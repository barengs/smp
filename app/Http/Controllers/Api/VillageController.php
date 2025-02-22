<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ApiResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Laravolt\Indonesia\Models\Village;

class VillageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $data = Village::with('district')->latest()->get();
        try {
            $data = Village::with('district')->latest()->get();
            return new ApiResource(true, 'Data desa', $data);
        } catch (\Throwable $th) {
            Log::error('Error fetching villages: ' . $th->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data desa',
                'error' => $th->getMessage(),
                'trace' => $th->getTrace(),
            ], 500);
        }
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
        $data = Village::where($id)->orWhere('name', 'like', '%' . $id . '%')->first();
        return new ApiResource(true, 'data desa', $data);
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
