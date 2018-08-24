<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class JoinProjectInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'JoinProjectInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            'user_id' => [ "type" => Type::nonNull(Type::id()) ],
            "project_id" => [ "type" => Type::nonNull(Type::id()) ],
        ];
    }
}
