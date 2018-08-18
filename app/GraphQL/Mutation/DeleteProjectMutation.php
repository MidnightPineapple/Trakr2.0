<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Project;

class DeleteProjectMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'DeleteProjectMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("DeleteProjectInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("DeleteProjectPayload");
    }

    protected function rules() 
    {
        return [
            "input.id" => [ "required" ],
            "input.confirmation" => [ "required", "boolean", "accepted" ]
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];
        $project = Project::findByNodeId($input['id']);
        $project->delete();
        return $project;
    }
}
