<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Feedback;
use App\GraphQL\Field\DateField;

class FeedbackNode extends BaseNode
{
    protected $attributes = [
        'name' => 'FeedbackNode',
        'description' => 'A relay node type for keeping track of app feedback'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ],
            'message' => [ 'type' => Type::nonNull(Type::string()) ],
            "created_at" => DateField::class,
            "updated_at" => DateField::class,
            'user' => [ "type" => GraphQL::type("User") ],
        ];
    }
    
    public function resolveById($id)
    {
        return Feedback::find($id);
    }
}
