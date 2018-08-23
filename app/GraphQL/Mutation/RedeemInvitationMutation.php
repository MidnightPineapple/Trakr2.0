<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Invitation;

class RedeemInvitationMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'RedeemInvitationMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("RedeemInvitationInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("RedeemInvitationPayload");
    }

    protected function rules() 
    {
        return [
            "input.token" => [ "required", "exists:invitations,token" ]
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $i = Invitation::find($args['input']['token']);
        $i->redeem($context);
        return $i->team;
    }
}
