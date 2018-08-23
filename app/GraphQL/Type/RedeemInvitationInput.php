<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class RedeemInvitationInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'RedeemInvitationInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "token" => Type::nonNull(Type::string())
        ];
    }
}
