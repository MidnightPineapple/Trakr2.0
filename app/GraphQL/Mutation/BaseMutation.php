<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation;
use GraphQL;

use App\Traits\DecodesNodeId;

abstract class BaseMutation extends Mutation
{
    use DecodesNodeId;   
}
