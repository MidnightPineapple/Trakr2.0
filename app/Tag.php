<?php

namespace App;

class Tag extends BaseModel
{
    public function entries()
    {
        return $this->belongsToMany(Entry::class);
    }

    public function tasks()
    {
        return $this->belongsToMany(Task::class);
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }

    public function divisions()
    {
        return $this->belongsToMany(Division::class);
    }

    public function clients()
    {
        return $this->belongsToMany(Client::class);
    }
}
