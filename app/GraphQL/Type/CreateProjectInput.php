<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class CreateProjectInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'CreateProjectInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "division_id" => [ "type" => Type::nonNull(Type::id())],
            "name" => [ "type" => Type::nonNull(Type::string())],
            "description" => [ "type" => Type::string() ],
        ];
    }
}
