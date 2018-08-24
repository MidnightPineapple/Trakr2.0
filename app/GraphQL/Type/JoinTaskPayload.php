<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class JoinTaskPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'JoinTaskPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "task" => [ "type" => GraphQL::type("Task") ]
        ];
    }

    protected function resolveTaskField($root) {
        return $root;
    }
}
