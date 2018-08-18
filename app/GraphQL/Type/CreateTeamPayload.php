<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class CreateTeamPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'CreateTeamPayload',
        'description' => 'A relay mutation payload type for team creation'
    ];

    protected function fields()
    {
        return [
            "team" => [ "type" => GraphQL::type("Team") ],
        ];
    }

    protected function resolveTeamField($root, $args) 
    {
        return $root;
    }
}
