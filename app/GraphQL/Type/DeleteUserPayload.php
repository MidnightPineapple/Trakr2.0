<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class DeleteUserPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'DeleteUserPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "user" => [ "type" => GraphQL::type("User") ]
        ];
    }

    protected function resolveUserField($root, $args)
    {
        return $root;
    }
}
