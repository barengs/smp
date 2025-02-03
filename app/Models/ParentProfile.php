<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ParentProfile extends Model
{
    protected $guarded = ['id'];

    public function childs()
    {
        return $this->hasMany(Student::class, 'parent_id');
    }
}
