<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\Team;

class UpdateTeamMutation extends BaseMutation
{

    protected $attributes = [
        'name' => 'UpdateTeamMutation',
        'description' => 'A relay mutation that updates information about a team'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("UpdateTeamInput"));
    }

    protected function rules()
    {
        return [
            "input.id" => [ "required" ] 
        ];
    }
    
    protected function type()
    {
        return GraphQL::type("UpdateTeamPayload");
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $team = Team::findByNodeId($args['input']['id']);
        unset($args['input']['id']);
        $team->fill($args['input']);
        $team->save();

        return $team;
    }
}
