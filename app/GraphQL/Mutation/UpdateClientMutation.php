<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Relay\Support\Mutation as BaseMutation;
use GraphQL;

use App\Client;

class UpdateClientMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'UpdateClientMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return GraphQL::type("UpdateClientInput");
    }
    
    protected function type()
    {
        return GraphQL::type("UpdateClientPayload");
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
        $client = Client::findbyNodeId($input['id']);
        unset($input['id']);
        $client->fill($input);
        $client->save();
    }
}
