<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class UpdateUserInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'UpdateUserInput',
        'description' => 'A relay mutation input type for updating user details.'
    ];

    protected function fields()
    {
        return [
            "first_name" => [ "type" => Type::string() ],
            "last_name" => [ "type" => Type::string() ],
            "email" => [ "type" => Type::string() ], 
            "password" => [ "type" => Type::string() ],
            "password_confirmation" => [ "type" => Type::string() ],
            // TODO: I should probably have a field for old password and make a validation rule that checks it first... 
        ];
    }
}
