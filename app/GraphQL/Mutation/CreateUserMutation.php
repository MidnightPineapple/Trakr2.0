<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\User;

class CreateUserMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'CreateNewUserMutation',
        'description' => 'A relay mutation for creating new users.'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("CreateUserInput"));
    }

    protected function rules($root, $args, $context)
    {
        return [
            "input.first_name" => [ "required" ],
            "input.last_name" => [ "required" ],
            "input.username" => [ "required", "min:6", "max:30" ],
            "input.email" => [ "required", "email" ],
            "input.password" => [ "required", "min:8", "confirmed" ]
        ];
    }
    
    protected function type()
    {
        return GraphQL::type("CreateUserPayload");
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $user = new User();
        $user->fill( $args['input'] );
        $user->password = bcrypt($args['input']['password']);
        $user->save();
        return $user;
    }
}
