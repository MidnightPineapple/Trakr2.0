<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\User;

class UpdateUserMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'UpdateUserMutation',
        'description' => 'A relay mutation that updates user data'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("UpdateUserInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("UpdateUserPayload");
    }

    public function rules() {
        return [
            "input.email" => [ "email", "string", "max:255", "unique:users" ],
            "input.password" => [ "min:8", "confirmed" ]
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $user = $context; 
        $user->fill($args['input']);
        if(array_key_exists("password", $args['input'])){
            $user->password = bcrypt($args['input']['password']);
        }
        $user->save();
        return $user;
    }
}
