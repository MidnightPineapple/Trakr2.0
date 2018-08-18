<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class DeleteUserInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'DeleteUserInput',
        'description' => 'A relay mutation input type for finding the user to delete'
    ];

    protected function fields()
    {
        return [
            "confirmation" => [ "type" => Type::nonNull(Type::boolean()) ] 
        ];
    }
}
