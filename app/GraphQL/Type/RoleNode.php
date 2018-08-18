<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Role;
use App\GraphQL\Field\DateField;

class RoleNode extends BaseNode
{
    protected $attributes = [
        'name' => 'RoleNode',
        'description' => 'A relay node type for dispaying user roles'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ],
            'name' => [ 'type' => Type::string() ],
            'description' => [ 'type' => Type::string() ],
            'archived' => [ 'type' => Type::boolean() ],
            "created_at" => DateField::class,
            "updated_at" => DateField::class,
            "team" => [ 'type' => GraphQL::type("Team") ],
            "permissions" => static::eloquentConnectionField(GraphQL::type("Permission")),
        ];
    }
    
    public function resolveById($id)
    {
        return Role::find($id);
    }
}
