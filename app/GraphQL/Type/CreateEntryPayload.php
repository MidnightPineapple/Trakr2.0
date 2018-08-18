<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class CreateEntryPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'CreateEntryPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "entry" => [ "type" => GraphQL::type("Entry") ]
        ];
    }

    protected function resolveEntryField($root, $args) 
    {
        return $root;
    }
}
