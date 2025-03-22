<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravolt\Indonesia\Models\Village;
use function PHPUnit\Framework\returnArgument;

class Student extends Model
{
    protected $guarded = ['id'];

    public function parent()
    {
        return $this->belongsTo(ParentProfile::class);
    }

    public function hostel()
    {
        return $this->belongsTo(Hostel::class);
    }

    public function education_type()
    {
        return $this->belongsTo(EducationType::class);
    }

    public function village()
    {
        return $this->belongsTo(Village::class);
    }
}
