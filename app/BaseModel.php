<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Traits\HasNodeId;

class BaseModel extends Model
{
    use HasNodeId;
}
