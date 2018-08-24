<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Entry;
use App\Task;
use App\GraphQL\Field\DateField;

class EntryNode extends BaseNode
{
    protected $attributes = [
        'name' => 'EntryNode',
        'description' => 'A relay node type for holding info about a particular work entry'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ],
            'description' => [ 'type' => Type::string() ],
            'archived' => [ 'type' => Type::boolean() ],
            'approved' => [ 'type' => Type::boolean() ],
            'completed_at' => DateField::class,
            "created_at" => DateField::class,
            "updated_at" => DateField::class,
            'task' => [ 'type' => GraphQL::type("Task") ],
            'user' => [ 'type' => GraphQL::type("User") ],
            // 'tags' => [ 'type' => Type::listOf(GraphQL::type("Tag")) ],
        ];
    }

    public function resolveById($id)
    {
        return Entry::find($id);
    }

    public function resolveTaskField($root, $args) {
        return Task::find($root->task_id);
    }
}
