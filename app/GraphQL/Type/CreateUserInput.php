<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class CreateUserInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'CreateNewUserInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "first_name" => [ 'type' => Type::string() ],
            "last_name" => [ 'type' => Type::string() ],
            "username" => [ 'type' => Type::string() ],
            "email" => [ 'type' => Type::string() ],
            "password" => [ 'type' => Type::string() ],
            "password_confirmation" => [ 'type' => Type::string() ],
        ];
    }

}
