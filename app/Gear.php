<?php

namespace App;

use App\Character;
use Illuminate\Database\Eloquent\Model;

class Gear extends Model
{
    protected $table = 'gear';


    public function characters()
    {
        return $this->belongsToMany(Character::class);
    }
}
