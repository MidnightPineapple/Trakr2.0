<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Task;
use App\Project;

class CreateTaskMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'CreateTaskMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("CreateTaskInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("CreateTaskPayload");
    }

    protected function rules()
    {
        return [
            "input.project_id" => [ "required" ], 
            "input.name" => [ "required", "string" ],
            // "input.description" => [ "string" ]
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];
        return Project::findByNodeId($input['project_id'])->tasks()->create($input);
    }
}
