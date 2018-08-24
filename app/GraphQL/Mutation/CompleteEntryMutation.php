<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Entry;

class CompleteEntryMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'CompleteEntryMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("CompleteEntryInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("CompleteEntryPayload");
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $e = Entry::findNodeById($args['input']['id']);
        if($e->user->id !== $context->id) return;
        $e->complete();
        return $e;
    }
}
