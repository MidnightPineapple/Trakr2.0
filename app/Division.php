<?php

namespace App;

class Division extends BaseModel
{

    protected $fillable = [ "name", "description", "archived" ];

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
