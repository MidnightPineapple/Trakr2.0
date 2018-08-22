<?php

namespace App\GraphQL\Query;

use Folklore\GraphQL\Support\Query as BaseQuery;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;

use App\User;

class UserQuery extends BaseQuery
{
    protected $attributes = [
        'name' => 'UserQuery',
        'description' => 'A query'
    ];

    protected function type()
    {
        return GraphQL::type("User");
    }

    protected function args()
    {
        return [
            "id" => [ "type" => Type::nonNull(Type::id()) ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return User::findByNodeId($args['id']);
    }
}
