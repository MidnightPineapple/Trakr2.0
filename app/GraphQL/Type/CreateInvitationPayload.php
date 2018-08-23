<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class CreateInvitationPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'CreateInvitationPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "invitation" => [ "type" => GraphQL::type("Invitation") ],
        ];
    }

    protected function resolveInvitationField($root, $args) {
        return $root;
    }
}
