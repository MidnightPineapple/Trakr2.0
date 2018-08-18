<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class UpdateTeamPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'UpdateTeamPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "team" => [ "type" => GraphQL::type("Team") ]
        ];
    }

    protected function resolveTeamField($root, $args)
    {
        return $root;
    }
}
