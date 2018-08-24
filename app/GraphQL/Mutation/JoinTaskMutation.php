<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Task;
use App\User;

class JoinTaskMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'JoinTaskMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("JoinTaskInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("JoinTaskPayload");
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];
        $user = User::findByNodeId($input['user_id']);
        $task = Task::findByNodeId($input['task_id']);
        $task->addUser($user);
        return $task;
    }
}
