<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Project;
use App\Division;
use App\User;

class CreateProjectMutation extends BaseMutation
{
    protected $attributes = [
        'name' => 'CreateProjectMutation',
        'description' => 'A relay mutation'
    ];

    protected function inputType()
    {
        return Type::nonNull(GraphQL::type("CreateProjectInput"));
    }
    
    protected function type()
    {
        return GraphQL::type("CreateProjectPayload");
    }

    protected function rules() 
    {
        return [
            "input.division_id" => [ "required" ], 
            "input.name" => [ "required", "string" ],
            "input.description" => [ "required", "string" ]
        ];
    }

    public function resolve($root, $args, $user, ResolveInfo $info)
    {
        $project = new Project();
        $input = $args['input'];
        // firstOrCreate / firstOrNew eloquent method is basically exactly what I need here lol
        $division = Division::findByNodeId($input['division_id']);

        $project->fill($input);
        $division->projects()->save($project);

        // associate with user. 
        // TODO: add user meta here later.
        $user->projects()->attach($project->id);
        return $project;
    }
}
