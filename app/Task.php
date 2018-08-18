<?php

namespace App;

class Task extends BaseModel
{
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
}
