<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class UpdateDivisionInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'UpdateDivisionInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "name" => [ "type" => Type::string() ],
            "description" => [ "type" => Type::string() ],
            "id" => [ "type" => Type::nonNull(Type::id()) ],
        ];
    }
}
