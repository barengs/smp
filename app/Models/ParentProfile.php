<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ParentProfile extends Model
{
    protected $fillable = ['kk', 'nik', 'main_id', 'user_id', 'first_name', 'last_name', 'gender', 'card_address', 'domicile_address', 'village_id', 'phone_id'];
}
