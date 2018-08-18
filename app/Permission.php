<?php

namespace App;

class Permission extends BaseModel
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
