<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\Team;

class DeleteTeamMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'DeleteTeamMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("DeleteTeamInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("DeleteTeamPayload");
    }

    protected function rules()
    {
        return [
            "input.id" => [ "required" ],
            "input.confirmation" => [ "required", "boolean", "accepted" ]
        ];
    }
    
    
    public function resolve($root, $args, $context)
    {
        $input = $args['input'];
        $team = Team::findByNodeId($input['id']);
        $team->delete();
        return $team;
    }
}
