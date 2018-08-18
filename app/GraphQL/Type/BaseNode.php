<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Relay\Support\NodeType as BaseNodeType;
use App\Traits\BuildsConnectionFields;

abstract class BaseNode extends BaseNodeType
{
    use BuildsConnectionFields;
}
