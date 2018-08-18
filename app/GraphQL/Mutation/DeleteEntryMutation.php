<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Entry;

class DeleteEntryMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'DeleteEntryMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("DeleteEntryInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("DeleteEntryPayload");
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
        $entry = Entry::findByNodeId($args['input']['id']);
        $entry->delete();
        return $entry;
    }
}
