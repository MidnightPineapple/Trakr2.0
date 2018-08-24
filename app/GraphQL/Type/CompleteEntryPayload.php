<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class CompleteEntryPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'CompleteEntryPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "entry" => [ "type" => GraphQL::type("Entry") ]
        ];
    }

    protected function resolveEntryField($root) 
    {
        return $root;
    }
}
