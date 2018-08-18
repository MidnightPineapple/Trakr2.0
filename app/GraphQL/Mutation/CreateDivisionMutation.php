<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\Division;

class CreateDivisionMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'CreateDivisionMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("CreateDivisionInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("CreateDivisionPayload");
    }

    protected function rules() {
        return [
            "input.client_id" => [ "required" ],
            "input.name" => [ "string", "required" ],
            "input.description" => [ "required", "string" ], 
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $input = $args['input'];
        $division = new Division();
        $client = Client::findByNodeId($input['client_id']);
        unset($input['client_id']);
        $division->fill($input);
        $client->divisions()->save($division);
        return $division;
    }
}
