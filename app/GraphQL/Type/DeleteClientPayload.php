<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class DeleteClientPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'DeleteClientPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "client" => [ "type" => GraphQL::type("Client") ],
        ];
    }

    protected function resolveClientField($root, $args) {
        return $root;
    }
}
