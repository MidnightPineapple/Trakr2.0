<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class UpdateClientPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'UpdateClientPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "client" => [ "type" => GraphQL::type("Client") ]
        ];
    }

    protected function resolveClientField($root, $args) {
        return $root;
    } 
}
