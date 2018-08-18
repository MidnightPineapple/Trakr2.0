<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Project;
use App\GraphQL\Field\DateField;

class ProjectNode extends BaseNode
{
    protected $attributes = [
        'name' => 'ProjectNode',
        'description' => 'A relay node type that stores info about a project'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ],
            'name' => [ 'type' => Type::string() ],
            'description' => [ 'type' => Type::string() ],
            'archived' => [ 'type' => Type::boolean() ],
            'completed' => [ 'type' => Type::boolean() ],
            "created_at" => DateField::class,
            "updated_at" => DateField::class,
            'division' => [ 'type' => GraphQL::type("Division") ],
            'tasks' => static::eloquentConnectionField(GraphQL::type("Task")),
            // 'tags' => [ 'type' => Type::listOf(GraphQL::type("Tag")) ],
            'users' => static::eloquentConnectionField(GraphQL::type("User")),
        ];
    }

    public function resolveById($id)
    {
        return Project::find($id);
    }
}
