<?php

namespace App;

class Template extends BaseModel
{
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
