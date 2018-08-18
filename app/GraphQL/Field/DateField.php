<?php

namespace App\GraphQL\Field;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Support\Field as BaseField;
use GraphQL;

class DateField extends BaseField
{
    protected $attributes = [
        'name' => 'DateField',
        'description' => 'A field for displaying Carbon dates'
    ];

    protected function type()
    {
        return Type::string();
    }

    protected function args()
    {
        return [
            "format" => [ 'type' => Type::string() ],
            "getter" => [ 'type' => Type::string() ],
        ];
    }

    // TODO: some sort of validation to make sure we only get either getter or format

    public function resolve($root, $args, $content, ResolveInfo $info)
    {
        if( !array_key_exists("format", $args) && !array_key_exists("getter", $args) ) {
            return $root[$info->fieldName]->toCookieString();
        }
        if( array_key_exists("getter", $args) ) { 
            return $root[$info->fieldName]->{$args['getter']};
        } else {
            return $root[$info->fieldName]->format($args['format']);
        }
    }
}
