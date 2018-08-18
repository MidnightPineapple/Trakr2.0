<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

class DeleteDivisionMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'DeleteDivisionMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return GraphQL::type("DeleteDivisionInput");
    }
    
    protected function type()
    {
        return GraphQL::type("DeleteDivisionPayload");
    }

    protected function rules()
    {
        return [
            "input.id" => [ "required" ],
            "input.confirmation" => [ "required", "boolean", "accepted" ]
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];
        $d = Division::findByNodeId($input['id']);
        $d->delete();
        return $d;
    }
}
