<?php

namespace App;

use Carbon\Carbon;

class Entry extends BaseModel
{
 
    protected $fillable = [ "description" ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function archive() 
    {
        $this->archived = true;
        return $this->save();
    }

    public function approve() 
    {
        $this->approved = true;
        return $this->save();
    }

    public function submit($props)
    {
        $this->fill($props);
        $this->completed_at = Carbon::now();
        return $this->save();
    }

    public function complete()
    {
        if(!$this->completed_at) $this->completed_at = Carbon::now();
        return $this->save();
    }

}
