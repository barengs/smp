<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravolt\Indonesia\Models\Village;

class ParentProfile extends Model
{
    protected $guarded = ['id'];

    public function student()
    {
        return $this->belongsTo(Student::class, 'parent_id');
    }

    public function main()
    {
        return $this->hasMany(ParentProfile::class, 'main_id');
    }

    public function phone()
    {
        return $this->belongsTo(Phone::class);
    }

    public function village()
    {
        return $this->belongsTo(Village::class);
    }
}
