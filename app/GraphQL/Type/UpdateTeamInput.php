<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class UpdateTeamInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'UpdateTeamInput',
        'description' => 'A relay mutation input type for updating team info'
    ];

    protected function fields()
    {
        return [
            "id" => [ "type" => Type::nonNull(Type::id()) ],
            "name" => [ "type" => Type::string() ],
            "description" => [ "type" => Type::string() ],
        ];
    }
}
