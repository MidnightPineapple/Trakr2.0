<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Task;

class UpdateTaskMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'UpdateTaskMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("UpdateTaskInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("UpdateTaskPayload");
    }

    protected function rules()
    {
        return [
            "input.id" => [ "required" ], 
        ];
    }
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $Input = $args['input'];
        $task = Task::findByNodeId($input['id'])->fill($input);
        $task->save();
        return $task;
    }
}
