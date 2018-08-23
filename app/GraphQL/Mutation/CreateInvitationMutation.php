<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Team;

class CreateInvitationMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'CreateInvitationMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("CreateInvitationInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("CreateInvitationPayload");
    }

    protected function rules() {
        return [
            "input.team_id" => [ "required", "string", "max:255" ]
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return Team::findByNodeId($args['input']['team_id'])->invite();
    }
}
