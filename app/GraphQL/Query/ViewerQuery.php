<?php

namespace App\GraphQL\Query;

use Folklore\GraphQL\Support\Query as BaseQuery;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;

use App\User;

class ViewerQuery extends BaseQuery
{
    protected $attributes = [
        'name' => 'ViewerQuery',
        'description' => 'Queries for information about the current user'
    ];

    protected function type()
    {
        return GraphQL::type("Viewer");
    }

    protected function args()
    {
        return [];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return $context;
    }
} 
