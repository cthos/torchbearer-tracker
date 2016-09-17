<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CharacterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'     => 'required|string',
            'stock'    => 'required|string',
            'class'    => 'required|string',
            'level'    => 'required|integer|min:1|max:10',
            'age'      => 'numeric',
            'home'     => 'string',
            'raiment'  => 'string',
            'parents'  => 'string',
            'mentor'   => 'string',
            'friend'   => 'string',
            'alignment' => 'in:unaligned,chaotic,lawful'
        ];
    }
}
