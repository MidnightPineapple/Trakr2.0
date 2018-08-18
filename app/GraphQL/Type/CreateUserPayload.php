<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

use App\GraphQL\Field\DateField;

class CreateUserPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'CreateNewUserPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "user" => [ 
                "type" => GraphQL::type("User"),
                "description" => "The newly created user."
            ]
        ];
    }

    protected function resolveUserField($root, $args) 
    {
        return $root;
    } 
}
