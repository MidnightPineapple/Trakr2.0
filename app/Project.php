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
        if(!in_array(
            $user->id, 
            $this->division->client->team->users->pluck("id")->toArray()
            )
        ) throw new \Error("User Not Found In Team");
        return $this->users()->attach($user->id);
    }


}
