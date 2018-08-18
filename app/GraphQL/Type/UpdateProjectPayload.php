<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class UpdateProjectPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'UpdateProjectPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "project" => [ "type" => GraphQL::type("Project") ],
        ];
    }

    protected function resolveProjectField($root, $args) 
    {
        return $root;
    }
}
