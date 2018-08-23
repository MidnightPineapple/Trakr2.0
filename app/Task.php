<?php

namespace App;

use Carbon\Carbon;

class Task extends BaseModel
{

    protected $fillable = [ "name", "description", "completed_at", "archived" ];

    /* Relationships */

    public function entries()
    {
        return $this->hasMany(Entry::class);
    }
    
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /* Helpers */

    public function complete() 
    {
        return $this->completed_at = Carbon::now();
    }

    public function archive() 
    {
        return $this->archived = true;
    }

    public function addUser(User $user) 
    {
        if(!in_array(
            $user->id, 
            $this->project->users->pluck("id")->toArray()
            )
        ) throw new \Error("User Not Found In Project");
        return $this->users()->attach($user->id);
    }

}
