<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

use App\Traits\HasNodeId;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens, HasNodeId;

    protected $fillable = [
        'first_name', 'email', 'last_name', 'username'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    /* Relationships */

    public function feedback()
    {
        return $this->hasMany(Feedback::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function teams()
    {
        return $this->belongsToMany(Team::class);
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }

    public function tasks()
    {
        return $this->belongsToMany(Task::class);
    }

    public function entries()
    {
        return $this->hasMany(Entry::class);
    }
}
