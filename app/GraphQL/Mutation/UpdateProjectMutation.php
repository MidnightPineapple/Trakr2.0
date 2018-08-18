<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Project;

class UpdateProjectMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'UpdateProjectMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("UpdateProjectInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("UpdateProjectPayload");
    }

    protected function rules() 
    {
        return [
            "input.id" => [ "required" ] 
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];
        $project = Project::findByNodeId($input['id']);
        $project->fill($input);
        $project->save();
    }
}
