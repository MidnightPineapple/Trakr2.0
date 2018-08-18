<?php

namespace App;

class Team extends BaseModel
{

    protected $fillable = [
        "name", "description"
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function roles()
    {
        return $this->hasMany(Role::class);
    }

    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }

    public function templates()
    {
        return $this->hasMany(Template::class);
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    public function divisions() 
    {
        return $this->hasManyThrough(Division::class, Client::class);
    }
}
