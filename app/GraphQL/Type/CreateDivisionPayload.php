<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class CreateDivisionPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'CreateDivisionPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "division" => [ "type" => GraphQL::type("Division") ],
        ];
    }

    protected function resolveDivisionField($root, $args) {
        return $root;
    }
}
