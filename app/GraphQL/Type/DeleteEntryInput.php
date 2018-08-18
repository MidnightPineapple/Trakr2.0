<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\InputType as BaseInputType;
use GraphQL;

class DeleteEntryInput extends BaseInputType
{
    protected $attributes = [
        'name' => 'DeleteEntryInput',
        'description' => 'A relay mutation input type'
    ];

    protected function fields()
    {
        return [
            "id" => [ "type" => Type::nonNull(Type::id()) ],
            "confirmation"  => [ "type" => Type::nonNull(Type::boolean()) ],
        ];
    }
}
