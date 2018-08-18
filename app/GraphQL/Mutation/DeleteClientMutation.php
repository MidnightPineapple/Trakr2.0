<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\Client;

class DeleteClientMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'DeleteClientMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("DeleteClientInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("DeleteClientPayload");
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
        $client = Client::findByNodeId($input['id']);
        $client->delete();
        return $client;
    }   
}
