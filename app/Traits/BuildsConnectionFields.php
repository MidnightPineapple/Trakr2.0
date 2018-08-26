<?php

namespace App\Traits;

use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\ObjectType;
use GraphQL;
use Relay;

trait BuildsConnectionFields {

    protected static function eloquentConnectionField(ObjectType $type)
    {
        return Relay::connectionFieldFromEdgeTypeAndQueryBuilder( 
            $type, 
            function($root, $args, $context, ResolveInfo $info) {
                if(in_array( get_class($root), ["Folklore\GraphQL\Relay\MutationResponse", "Folklore\GraphQL\Relay\NodeResponse"])) {
                    $root = $root->getOriginalNode();
                }

                return $root->{$info->fieldName}();
            },
            count(func_get_args()) === 2 ? func_get_arg(1) : []
        );
    }
    
}