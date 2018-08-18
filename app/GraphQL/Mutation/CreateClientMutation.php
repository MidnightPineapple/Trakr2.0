<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL;

use App\Client;
use App\Team;

class CreateClientMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'CreateClientMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("CreateClientInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("CreateClientPayload");
    }

    protected function rules() 
    {
        return [
            "input.team_id" => [ "required" ],
            "input.name" => [ "required", "string" ],
            "input.description" => [ "required", "string" ]
        ];
    }
    
    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        // TODO: check that 1. user is in this team 2. user has authority to add new client to team

        $input = $args['input'];

        $team = Team::findByNodeId($input['team_id']);
        $client = new Client();
        $client->name = $input['name'];
        $client->description = $input['description'];
        $team->clients()->save($client);

        return $client;
    }
}
