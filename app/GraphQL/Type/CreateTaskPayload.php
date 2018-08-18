<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class CreateTaskPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'CreateTaskPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "task" => [ "type" => GraphQL::type("Task") ],
        ];
    }

    protected function resolveTaskField($root, $args) 
    {
        return $root;
    }
}
