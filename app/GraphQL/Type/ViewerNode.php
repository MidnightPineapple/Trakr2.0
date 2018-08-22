<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\User;
use App\GraphQL\Field\DateField;

class ViewerNode extends BaseNode
{
    protected $attributes = [
        'name' => 'ViewerNode',
        'description' => 'A relay node type'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ],
            "first_name" => [ "type" => Type::string() ],
            "last_name" => [ "type" => Type::string() ],
            "username" => [ "type" => Type::string() ],
            "email" => [ "type" => Type::string() ],
            "created_at" => DateField::class,
            "updated_at" => DateField::class,
            "teams" => static::eloquentConnectionField(GraphQL::type("Team")),
            "templates" => static::eloquentConnectionField(GraphQL::type("Template")),
            "permissions" => static::eloquentConnectionField(GraphQL::type("Permission")),
        ];
    }
    
    public function resolveById($id)
    {
        return User::find($id);
    }
}
