<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class CreateDivisionInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'CreateDivisionInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "name" => [ "type" => Type::string() ],
            "description" => [ "type" => Type::string() ],
            "client_id" => [ "type" => Type::nonNull(Type::id()) ],
        ];
    }
}
