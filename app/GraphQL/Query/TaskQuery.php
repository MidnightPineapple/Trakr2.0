<?php

namespace App\GraphQL\Query;

use Folklore\GraphQL\Support\Query as BaseQuery;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Task;

class TaskQuery extends BaseQuery
{
    protected $attributes = [
        'name' => 'TaskQuery',
        'description' => 'A query'
    ];

    protected function type()
    {
        return GraphQL::type("Task");
    }

    protected function args()
    {
        return [
            "id" => [ "type" => Type::nonNull(Type::id()) ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return Task::findByNodeId($args['id']);
    }
}
