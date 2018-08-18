<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\Team;

class CreateTeamMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'CreateTeamMutation',
        'description' => 'A relay mutation for team creation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("CreateTeamInput"));
    }
    
    protected function rules()
    {
        return [
            "input.name" => [ "required" ] 
        ];
    }

    protected function type()
    {
        return GraphQL::type("CreateTeamPayload");
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $team = new Team();
        $team->fill($args['input']);
        $context->teams()->save($team);
        return $team;
    }
}
