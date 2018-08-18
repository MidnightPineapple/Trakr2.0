<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
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
            "input.description" => [ "required", "string" ]
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];

        $entry = (new Entry)->fill($input);
        $entry->date();
        Task::findByNodeId($input['task_id'])->entries()->save($entry);
        return $entry;
    }
}
