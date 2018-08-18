<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Permission;

class PermissionNode extends BaseNode
{
    protected $attributes = [
        'name' => 'PermissionNode',
        'description' => 'A relay node type'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ],
            'name' => [ 'type' => Type::string() ],
            'description' => [ 'type' => Type::string() ],
        ];
    }
    
    public function resolveById($id)
    {
        return Permission::find($id);
    }
}
