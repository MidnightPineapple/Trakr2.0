<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Client;
use App\GraphQL\Field\DateField;

class ClientNode extends BaseNode
{
    protected $attributes = [
        'name' => 'ClientNode',
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
            "team" => [ 'type' => GraphQL::type("Team") ],
            "divisions" => static::eloquentConnectionField(GraphQL::type("Division")),
            // 'tags' => [ 'type' => Type::listOf(GraphQL::type("Tag")) ],
        ];
    }
    
    public function resolveById($id)
    {
        return Client::find($id);
    }
}
