<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Team;
use App\Project;

class JoinProjectMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'JoinProjectMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("JoinProjectInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("JoinProjectPayload");
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];
        $user = User::findByNodeId($input['user_id']);
        $project = Project::findByNodeId($input['project_id']);
        $project->addUser($user);
        return $project;

    }
}
