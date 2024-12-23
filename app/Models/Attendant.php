<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Attendant extends Model
{
    protected $fillable = ['user_id', 'code', 'first_name', 'last_name', 'address', 'phone', 'gender'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
