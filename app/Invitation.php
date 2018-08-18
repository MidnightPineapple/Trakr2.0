<?php

namespace App;

class Invitation extends BaseModel
{

    protected $primaryKey = "token";

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
