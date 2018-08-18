<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\NodeType as BaseNodeType;
use GraphQL;

use App\Tag;

class TagNode extends BaseNodeType
{
    protected $attributes = [
        'name' => 'TagNode',
        'description' => 'A relay node type for tags'
    ];

    protected function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::id())
            ]
        ];
    }
    
    public function resolveById($id)
    {
        return Tag::find($id);
    }
}
