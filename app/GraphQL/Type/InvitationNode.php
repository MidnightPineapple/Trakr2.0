<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use GraphQL;

use App\Invitation;
use App\GraphQL\Field\DateField;

class InvitationNode extends BaseNode
{
    protected $attributes = [
        'name' => 'InvitationNode',
        'description' => 'A relay node type'
    ];

    protected function fields()
    {
        return [
            'id' => [ 'type' => Type::nonNull(Type::id()) ],
            'team' => [ 'type' => GraphQL::type("Team") ],
            "token" => [ 'type' => Type::string() ],
            "created_at" => DateField::class,
            "updated_at" => DateField::class,
        ];
    }
    
    public function resolveById($id)
    {
        return Invitation::find($id);
    }

    public function resolveIdField($root, $args) 
    {
        return $root->token;
    }

    public function resolveTeamField($root, $args)
    {
        // workaround b/c i have no idea why sometimes $root->team is null
        return Invitation::find($root->token)->team;
    }
}
