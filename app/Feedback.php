<?php

namespace App;

class Feedback extends BaseModel
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
