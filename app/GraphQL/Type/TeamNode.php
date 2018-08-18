<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Team;
use App\GraphQL\Field\DateField;

class TeamNode extends BaseNode
{
    protected $attributes = [
        'name' => 'TeamNode',
        'description' => 'A relay node type to hold a team of users'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ], 
            "name" => [ "type" => Type::string() ],
            "description" => [ "type" => Type::string() ],
            "created_at" => DateField::class,
            "updated_at" => DateField::class,
            'users' => static::eloquentConnectionField(GraphQL::type("User")),
            'roles' => static::eloquentConnectionField(GraphQL::type("Role")),
            'clients' => static::eloquentConnectionField(GraphQL::type("Client")),
            'projects' => static::eloquentConnectionField(GraphQL::type("Project")),
            'templates' => static::eloquentConnectionField(GraphQL::type("Template")),
        ];
    }

    public function resolveById($id)
    {
        return Team::find($id);
    }
}
