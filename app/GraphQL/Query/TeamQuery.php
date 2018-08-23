<?php

namespace App\GraphQL\Query;

use Folklore\GraphQL\Support\Query as BaseQuery;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Team;

class TeamQuery extends BaseQuery
{
    protected $attributes = [
        'name' => 'TeamQuery',
        'description' => 'A query'
    ];

    protected function type()
    {
        return GraphQL::type("Team");
    }

    protected function args()
    {
        return [
            "id" => [ "type" => Type::nonNull(Type::id()) ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return Team::findByNodeId($args['id']);
    }
}
