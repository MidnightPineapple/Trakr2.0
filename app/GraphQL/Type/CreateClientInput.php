<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class CreateClientInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'CreateClientInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "name" => [ "type" => Type::string() ],
            "description" => [ "type" => Type::string() ],
            "team_id" => [ "type" => Type::nonNull(Type::id()) ],
        ];
    }
}
