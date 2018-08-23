<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class CreateInvitationInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'CreateInvitationInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "team_id" => [ "type" => Type::nonNull(Type::id()) ], 
        ];
    }
}
