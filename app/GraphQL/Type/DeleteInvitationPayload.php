<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\PayloadType as BasePayloadType;
use GraphQL;

class DeleteInvitationPayload extends BasePayloadType
{
    protected $attributes = [
        'name' => 'DeleteInvitationPayload',
        'description' => 'A relay mutation payload type'
    ];

    protected function fields()
    {
        return [
            "invitation" => [ "type" => GraphQL::type("Invitation") ]
        ];
    }

    protected function resolveInvitationField($root) 
    {
        return $root;
    }
}
