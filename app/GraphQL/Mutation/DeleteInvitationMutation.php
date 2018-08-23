<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Invitation;

class DeleteInvitationMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'DeleteInvitationMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("DeleteInvitationInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("DeleteInvitationPayload");
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $i = Invitation::findByNodeId($args['input']['id']);
        $i->delete();
        return $i;
    }
}
