<?php

namespace App;

class Role extends BaseModel
{
    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
