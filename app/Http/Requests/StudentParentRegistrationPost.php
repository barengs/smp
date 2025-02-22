<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StudentParentRegistrationPost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'no_kk' => 'required',
            'nik_parent' => '',
            'nama_depan_ortu' => 'string',
            'nama_belakang_ortu' => 'string',
            'email' => 'string',
            'status_ortu' => '',
            'gender_ortu' => '',
            'alamat_ktp_ortu' => '',
            'alamat_domisili_ortu' => '',
            'nik_siswa' => 'required|min:16|string|unique:student_registrations,nik',
            'nama_depan_siswa' => 'required',
            'nama_belakang_siswa' => '',
            'alamat_siswa' => '',
            'gender_siswa' => 'required',
            'id_desa' => 'required',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }
}
