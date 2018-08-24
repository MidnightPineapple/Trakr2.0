<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class CreateEntryInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'CreateEntryInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            'description' => [ 'type' => Type::string() ],
            "task_id" => [ "type" => Type::nonNull(Type::id()) ]
        ];
    }
}
