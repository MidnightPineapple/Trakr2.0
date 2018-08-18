<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Task;
use App\GraphQL\Field\DateField;

class TaskNode extends BaseNode
{
    protected $attributes = [
        'name' => 'TaskNode',
        'description' => 'A relay node type for holding Tasks of Users in a project'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ],
            "name" => [ "type" => Type::string() ],
            "description" => [ "type" => Type::string() ],
            "archived" => [ "type" => Type::boolean() ],
            "created_at" => DateField::class,
            "updated_at" => DateField::class,
            "completed" => [ "type" => Type::boolean() ],
            "project" => [ "type" => GraphQL::type("Project") ],
            "team" => [ "type" => GraphQL::type("Team") ],
            "entries" => static::eloquentConnectionField(GraphQL::type("Entry")),
            // "tags" => [ "type" => Type::listOf(GraphQL::type("Tag")) ],
            "users" => static::eloquentConnectionField(GraphQL::type("User")),
        ];
    }

    public function resolveById($id)
    {
        return Task::find($id);
    }
}
