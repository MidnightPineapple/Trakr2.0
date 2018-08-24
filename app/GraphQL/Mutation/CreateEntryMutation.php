<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\Task;
use App\Entry;

class CreateEntryMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'CreateEntryMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("CreateEntryInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("CreateEntryPayload");
    }

    protected function rules()
    {
        return [
            "input.task_id" => [ "required" ], 
            "input.description" => [ "string" ]
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];

        $entry = Entry::make($input);
        $entry->user()->associate($context->id);

        $taskId = static::decodeNodeId($input['task_id'])['id'];
        $entry->task()->associate($taskId);
        $entry->save();
        return $entry;
    }
}
