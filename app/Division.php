<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    public function client() 
    {
        return $this->belongsTo(Client::class);
    }

    public function projects() 
    {
        return $this->hasMany(Project::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function tasks() 
    {
        return $this->hasManyThrough(Task::class, Project::class);
    }
}
