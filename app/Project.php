<?php

namespace App;

class Project extends BaseModel
{
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
}
