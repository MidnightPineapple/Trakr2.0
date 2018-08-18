<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Task;

class DeleteTaskMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'DeleteTaskMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("DeleteTaskInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("DeleteTaskPayload");
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
        $task = Task::findByNodeId($input['id']);
        $task->delete();
        return $task;
    }
}
