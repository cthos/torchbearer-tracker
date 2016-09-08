<?php

namespace App;

use App\Gear;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    public function gear()
    {
        return $this->hasMany(Gear::class);
    }
}
