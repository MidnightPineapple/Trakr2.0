<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class RedeemInvitationPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'RedeemInvitationPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "viewer" => [ "type" => GraphQL::type("Viewer") ],
            "team" => [ "type" => GraphQL::type("Team") ],
        ];
    }

    protected function resolveViewerField($root, $args, $context)
    {
        return $context;
    }

    protected function resolveTeamField($root, $args)
    {
        return $root;
    }
}
