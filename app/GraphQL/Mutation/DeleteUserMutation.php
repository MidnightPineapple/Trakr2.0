<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\User;

class DeleteUserMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'DeleteUserMutation',
        'description' => 'A relay mutation for deleting existing users.'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("DeleteUserInput"));
    }

    protected function rules()
    {
        return [
            "input.confirmation" => [ "required", "boolean", "accepted" ]
        ];
    }
    
    protected function type()
    {
        return GraphQL::type("DeleteUserPayload");
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $user = $context; 
        $user->delete();
        return $user;
    }
}
