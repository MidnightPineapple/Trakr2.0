<?php

namespace App;

class Project extends BaseModel
{

    protected $fillable = [ "name", "description", "archived" ];

    /* Relationships */

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function division()
    {
        return $this->belongsTo(Division::class);
    }

    public function entries() 
    {
        return $this->hasManyThrough(Entry::class, Task::class);
    }

    /* Helpers */

    public function addUser(User $user) 
    {
        if( !$this->division->client->team->hasUser($user) ) throw new \Error("User Not Found In Team");
        return $this->users()->attach($user->id);
    }

    public function hasUser(User $user) 
    {
        return $this->users->pluck("id")->search($user->id) !== false;
    }

}
