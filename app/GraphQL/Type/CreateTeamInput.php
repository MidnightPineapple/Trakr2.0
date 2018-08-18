<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class CreateTeamInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'CreateTeamInput',
        'description' => 'A relay mutation input type for submitting parameters of team creation'
    ];

    protected function fields()
    {
        return [
            "name" => [ "type" => Type::nonNull(Type::string())],
            "description" => [ "type" => Type::string() ],
        ];
    }
}
