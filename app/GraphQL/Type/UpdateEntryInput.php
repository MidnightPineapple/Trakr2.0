<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class UpdateEntryInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'UpdateEntryInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ], 
            'description' => [ 'type' => Type::string() ],
            'completed_at' => [ "type" => Type::string() ],
        ];
    }
}
