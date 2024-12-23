<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StudentRegistrationPost extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nik' => 'required|min:16|string|unique:student_registrations,nik',
            'first_name' => 'required|string',
            'last_name' => 'string',
            'gender' => '',
            'last_formal_edu_id' => '',
            'last_nonformal_edu_id' => '',
            'photo' => 'file|mimes:png,jpg,jpeg',
            'address' => 'string',
            'village_id' => 'required',
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
