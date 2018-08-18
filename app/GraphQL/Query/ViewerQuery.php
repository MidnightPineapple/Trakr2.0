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
        return GraphQL::type("User");
    }

    protected function args()
    {
        return [];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        // Then we just check on the UserNodeType whether the user being accessed is in fact
        // the one who's authenticated or someone who has access to it that stuff? but then
        // how would an admin access a list of his users? Maybe restrict access to mutations
        // also could restrict certain fields from being fetched if you're not the user himself
        // like the other teams some guy is in shouldn't be visible to the admin 
        return $context;
    }
} 
