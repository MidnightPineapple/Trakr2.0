<?php

namespace App;

class Client extends BaseModel
{
    
    protected $fillable = [
        'name', 'description', 'archived'
    ];

    public function tags() 
    {
        return $this->belongsToMany(Tag::class);
    }

    public function team() 
    {
        return $this->belongsTo(Team::class);
    }

    public function divisions() 
    {
        return $this->hasMany(Division::class);
    }

    public function projects() 
    {
        return $this->hasManyThrough(Project::class, Division::class);
    }
}
