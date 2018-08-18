<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class UpdateClientInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'UpdateClientInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "id" => [ "type" => Type::nonNull(Type::id()) ],
            "name" => [ "type" => Type::string() ],
            "description" => [ "type" => Type::string() ],
            "archived" => [ "type" => Type::boolean() ],
        ];
    }
}
