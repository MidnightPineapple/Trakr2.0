<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Template;
use App\GraphQL\Field\DateField;

class TemplateNode extends BaseNode
{
    protected $attributes = [
        'name' => 'TemplateNode',
        'description' => 'A relay node type for storing project templates'
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
            "data" => [ 'type' => Type::nonNull(Type::string()) ],
            "team" => [ 'type' => GraphQL::type("Team") ]
        ];
    }
    
    public function resolveById($id)
    {
        return Template::find($id);
    }
}
