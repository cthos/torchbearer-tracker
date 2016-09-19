<?php

namespace App;

use App\Gear;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $guarded = ['id'];

    protected $casts = [
        'extras' => 'array',
    ];

    public function gear()
    {
        return $this->hasMany(Gear::class);
    }
}
