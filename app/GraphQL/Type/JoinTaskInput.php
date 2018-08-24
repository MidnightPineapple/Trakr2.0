<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class JoinTaskInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'JoinTaskInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            'user_id' => [ "type" => Type::nonNull(Type::id()) ],
            'task_id' => [ "type" => Type::nonNull(Type::id()) ],
        ];
    }
}
