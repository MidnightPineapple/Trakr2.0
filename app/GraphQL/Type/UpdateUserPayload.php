<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

use App\GraphQL\Field\DateField;

class UpdateUserPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'UpdateUserPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "user" => [ 
                "type" => GraphQL::type("User"),
                "description" => "The updated user."
            ]
        ];
    }

    protected function resolveUserField($root, $args) 
    {
        return $root;
    }
}
