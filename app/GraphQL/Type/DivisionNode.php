<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Division;
use App\GraphQL\Field\DateField;
use App\Project;

class DivisionNode extends BaseNode
{
    protected $attributes = [
        'name' => 'DivisionNode',
        'description' => 'A relay node type'
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
            'client' => [ 'type' => GraphQL::type('Client') ],
            'team' => [ 'type' => GraphQL::type('Team') ],
            'projects' => static::eloquentConnectionField(GraphQL::type("Project")),
            // 'tags' => [ 'type' => Type::listOf(GraphQL::type("Tag")) ],
        ];
    }
    
    public function resolveById($id)
    {
        return Division::find($id);
    }
}
