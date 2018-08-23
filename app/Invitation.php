<?php

namespace App;

class Invitation extends BaseModel
{

    protected $primaryKey = "token";
    public $incrementing = false;

    protected $fillable = [ "token" ];

    /* Relationships */

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    /* Helpers */

    public static function make() {
        $invite = new static();
        $invite->token = bin2hex(random_bytes(25));
        return $invite;
    }

    public function redeem(User $user)
    {
        $user->teams()->attach($this->team->id);
    }
}
