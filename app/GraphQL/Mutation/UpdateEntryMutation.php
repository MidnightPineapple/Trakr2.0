<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Entry;
use Carbon\Carbon;

class UpdateEntryMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'UpdateEntryMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("UpdateEntryInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("UpdateEntryPayload");
    }

    protected function rules()
    {
        return [
            "input.id" => [ "required" ], 
            "input.completed_at" => [ "date", "nullable" ],
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];
        $entry = Entry::findByNodeId($input['id']);
        array_key_exists("description", $input) && $entry->description = $input['description'];
        array_key_exists("completed_at", $input) && $entry->completed_at = new Carbon($input['completed_at']);
        $entry->save();
        return $entry;
    }
}
