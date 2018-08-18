<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Division;

class UpdateDivisionMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'UpdateDivisionMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("UpdateDivisionInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("UpdateDivisionPayload");
    }

    protected function rules()
    {
        return [
            "input.id" => [ "required" ] 
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];
        $d = Division::findByNodeId($input['id']);
        $d->fill($input);
        $d->save();
    }
}
