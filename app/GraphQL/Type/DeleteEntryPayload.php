<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class DeleteEntryPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'DeleteEntryPayload',
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
