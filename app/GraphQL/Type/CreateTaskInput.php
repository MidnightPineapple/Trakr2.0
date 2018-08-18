<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class CreateTaskInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'CreateTaskInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "name" => [ "type" => Type::string() ],
            "description" => [ "type" => Type::string() ],
            "project_id" => [ "type" => Type::nonNull(Type::id()) ], // IDEA: should be non-null?
        ];
    }
}
