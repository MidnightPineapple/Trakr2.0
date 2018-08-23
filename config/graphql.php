<?php


return [

    // The name of the default schema used when no argument is provided
    // to GraphQL::schema() or when the routes are used without the {graphql_schema}
    // parameter.
    'schema' => 'default',

    // The list of schemas for you graphql server. It expects an array to provide
    // both the 'query' fields and the 'mutation' fields. You can also
    // provide directly an instance of GraphQL\Schema
    //
    // Example:
    //
    // 'schemas' => [
    //     'default' => [
    //         'query' => [
    //              'users' => \App\GraphQL\Query\UsersQuery::class
    //          ],
    //          'mutation' => [
    //              'updateUserName' => \App\GraphQL\Mutation\UpdateUserNameMutation::class
    //          ]
    //     ],
    // ]
    //
    // If you don't specify a key, the "name" attribute of your Query or Mutation
    // will be used.
    //
    // [
    //     'query' => [
    //          \App\GraphQL\Query\UsersQuery::class
    //      ],
    //      'mutation' => [
    //          \App\GraphQL\Mutation\UpdateUserNameMutation::class
    //      ]
    // ]
    //
    // You can also use directly \GraphQL\Schema
    //
    // 'schemas' => [
    //     'default' => new \GraphQL\Schema($config)
    // ]
    //
    'schemas' => [
        'default' => [
            'query' => [
                "viewer" => App\GraphQL\Query\ViewerQuery::class,
                "user" => App\GraphQL\Query\UserQuery::class,
                "project" => App\GraphQL\Query\ProjectQuery::class,
                "task" => App\GraphQL\Query\TaskQuery::class,
                "team" => App\GraphQL\Query\TeamQuery::class,
            ],
            'mutation' => [
                "updateUser" => App\GraphQL\Mutation\UpdateUserMutation::class,
                "deleteUser" => App\GraphQL\Mutation\DeleteUserMutation::class,
                "createTeam" => App\GraphQL\Mutation\CreateTeamMutation::class,
                "updateTeam" => App\GraphQL\Mutation\UpdateTeamMutation::class,
                "deleteTeam" => App\GraphQL\Mutation\DeleteTeamMutation::class,
                "createClient" => App\GraphQL\Mutation\CreateClientMutation::class,
                "updateClient" => App\GraphQL\Mutation\UpdateClientMutation::class,
                "deleteClient" => App\GraphQL\Mutation\DeleteClientMutation::class,
                "createDivision" => App\GraphQL\Mutation\CreateDivisionMutation::class,
                "updateDivision" => App\GraphQL\Mutation\UpdateDivisionMutation::class,
                "deleteDivision" => App\GraphQL\Mutation\DeleteDivisionMutation::class,
                "createProject" => App\GraphQL\Mutation\CreateProjectMutation::class,
                "updateProject" => App\GraphQL\Mutation\UpdateProjectMutation::class,
                "deleteProject" => App\GraphQL\Mutation\DeleteProjectMutation::class,
                "createTask" => App\GraphQL\Mutation\CreateTaskMutation::class,
                "updateTask" => App\GraphQL\Mutation\UpdateTaskMutation::class,
                "deleteTask" => App\GraphQL\Mutation\DeleteTaskMutation::class,
                "createEntry" => App\GraphQL\Mutation\CreateEntryMutation::class,
                "updateEntry" => App\GraphQL\Mutation\UpdateEntryMutation::class,
                "deleteEntry" => App\GraphQL\Mutation\DeleteEntryMutation::class,
                // "createFeedback" => App\GraphQL\Mutation\CreateFeedbackMutation::class,
                // "updateFeedback" => App\GraphQL\Mutation\UpdateFeedbackMutation::class,
                // "deleteFeedback" => App\GraphQL\Mutation\DeleteFeedbackMutation::class,
            ]
        ]
    ],

    // The types available in the application. You can then access it from the
    // facade like this: GraphQL::type('User')
    //
    // Example:
    //
    // 'types' => [
    //     'User' => App\GraphQL\Type\UserType:class
    // ]
    //
    // or whitout specifying a key (it will use the "name" attribute of your Type)
    //
    // 'types' => [
    //     App\GraphQL\Type\UserType::class
    // ]
    //
    'types' => [
        'Viewer' => App\GraphQL\Type\ViewerNode::class,
        'User' => App\GraphQL\Type\UserNode::class,
        "Team" => App\GraphQL\Type\TeamNode::class,
        "Client" => App\GraphQL\Type\ClientNode::class,
        "Division" => App\GraphQL\Type\DivisionNode::class,
        "Project" => App\GraphQL\Type\ProjectNode::class,
        "Task" => App\GraphQL\Type\TaskNode::class,
        "Entry" => App\GraphQL\Type\EntryNode::class,
        "Feedback" => App\GraphQL\Type\FeedbackNode::class,
        "Role" => App\GraphQL\Type\RoleNode::class,
        "Template" => App\GraphQL\Type\TemplateNode::class,
        "Permission" => App\GraphQL\Type\PermissionNode::class,
        "CreateClientInput" => App\GraphQL\Type\CreateClientInput::class,
        "CreateClientPayload" => App\GraphQL\Type\CreateClientPayload::class,
        "UpdateClientInput" => App\GraphQL\Type\UpdateClientInput::class,
        "UpdateClientPayload" => App\GraphQL\Type\UpdateClientPayload::class,
        "DeleteClientInput" => App\GraphQL\Type\DeleteClientInput::class,
        "DeleteClientPayload" => App\GraphQL\Type\DeleteClientPayload::class,
        "UpdateUserInput" => App\GraphQL\Type\UpdateUserInput::class,
        "UpdateUserPayload" => App\GraphQL\Type\UpdateUserPayload::class,
        "DeleteUserInput" => App\GraphQL\Type\DeleteUserInput::class,
        "DeleteUserPayload" => App\GraphQL\Type\DeleteUserPayload::class,
        "CreateTeamInput" => App\GraphQL\Type\CreateTeamInput::class,
        "CreateTeamPayload" => App\GraphQL\Type\CreateTeamPayload::class,
        "UpdateTeamInput" => App\GraphQL\Type\UpdateTeamInput::class,
        "UpdateTeamPayload" => App\GraphQL\Type\UpdateTeamPayload::class,
        "DeleteTeamInput" => App\GraphQL\Type\DeleteTeamInput::class,
        "DeleteTeamPayload" => App\GraphQL\Type\DeleteTeamPayload::class,
        "CreateDivisionInput" => App\GraphQL\Type\CreateDivisionInput::class,
        "CreateDivisionPayload" => App\GraphQL\Type\CreateDivisionPayload::class,
        "UpdateDivisionInput" => App\GraphQL\Type\UpdateDivisionInput::class,
        "UpdateDivisionPayload" => App\GraphQL\Type\UpdateDivisionPayload::class,
        "DeleteDivisionInput" => App\GraphQL\Type\DeleteDivisionInput::class,
        "DeleteDivisionPayload" => App\GraphQL\Type\DeleteDivisionPayload::class,
        "CreateProjectInput" => App\GraphQL\Type\CreateProjectInput::class,
        "CreateProjectPayload" => App\GraphQL\Type\CreateProjectPayload::class,
        "UpdateProjectInput" => App\GraphQL\Type\UpdateProjectInput::class,
        "UpdateProjectPayload" => App\GraphQL\Type\UpdateProjectPayload::class,
        "DeleteProjectInput" => App\GraphQL\Type\DeleteProjectInput::class,
        "DeleteProjectPayload" => App\GraphQL\Type\DeleteProjectPayload::class,
        "CreateTaskInput" => App\GraphQL\Type\CreateTaskInput::class,
        "CreateTaskPayload" => App\GraphQL\Type\CreateTaskPayload::class,
        "UpdateTaskInput" => App\GraphQL\Type\UpdateTaskInput::class,
        "UpdateTaskPayload" => App\GraphQL\Type\UpdateTaskPayload::class,
        "DeleteTaskInput" => App\GraphQL\Type\DeleteTaskInput::class,
        "DeleteTaskPayload" => App\GraphQL\Type\DeleteTaskPayload::class,
        "CreateEntryInput" => App\GraphQL\Type\CreateEntryInput::class,
        "CreateEntryPayload" => App\GraphQL\Type\CreateEntryPayload::class,
        "UpdateEntryInput" => App\GraphQL\Type\UpdateEntryInput::class,
        "UpdateEntryPayload" => App\GraphQL\Type\UpdateEntryPayload::class,
        "DeleteEntryInput" => App\GraphQL\Type\DeleteEntryInput::class,
        "DeleteEntryPayload" => App\GraphQL\Type\DeleteEntryPayload::class,
        // "CreateFeedbackInput" => App\GraphQL\Type\CreateFeedbackInput::class,
        // "CreateFeedbackPayload" => App\GraphQL\Type\CreateFeedbackPayload::class,
        // "UpdateFeedbackInput" => App\GraphQL\Type\UpdateFeedbackInput::class,
        // "UpdateFeedbackPayload" => App\GraphQL\Type\UpdateFeedbackPayload::class,
        // "DeleteFeedbackInput" => App\GraphQL\Type\DeleteFeedbackInput::class,
        // "DeleteFeedbackPayload" => App\GraphQL\Type\DeleteFeedbackPayload::class,
    ],

    // The prefix for routes. You can remove it by setting it to null.
    'routes_prefix' => 'graphql',

    // The routes to make GraphQL request. By default, both query and mutation
    // are set to {graphql_schema?} so you can make requests to /graphql or
    // /graphql/name_of_the_schema
    //
    // You can define other routes, like this:
    //
    // 'routes' => [
    //     'query' => 'other_query/{graphql_schema?}',
    //     'mutation' => 'mutation/{graphql_schema?}'
    // ]
    //
    // Or disable routes by setting routes to null
    //
    // 'routes' => null,
    //
    'routes' => [
        'query' => '{graphql_schema?}',
        'mutation' => '{graphql_schema?}'
    ],

    // The controller to use in GraphQL request. It expect an array containing
    // the key 'query' and/or 'mutation' with the according Controller path
    //
    // Example:
    //
    // 'controllers' => [
    //     'query' => '\Folklore\GraphQL\GraphQLController@query',
    //     'mutation' => '\Folklore\GraphQL\GraphQLController@mutation'
    // ]
    //
    'controllers' => [
        'query' => '\Folklore\GraphQL\GraphQLController@query',
        'mutation' => '\Folklore\GraphQL\GraphQLController@query'
    ],
    
    // The name of the input that will contains variables when you query the endpoint.
    // Some library use "variables", you can change it here.
    'request_variables_name' => 'variables',

    // Any middleware for the graphql routes group
    'middleware' => [ "auth:api" ],

    // This callable will received every Error objects for each errors GraphQL catch.
    // The method should return an array representing the error.
    //
    // Typically:
    // [
    //     'message' => '',
    //     'locations' => []
    // ]
    //
    'error_formatter' => [\Folklore\GraphQL\GraphQL::class, 'formatError'],
    
    // Introspection configuration
    'introspection' => [
        
        // Contains the path to the introspection query
        // https://github.com/graphql/graphql-js/blob/master/src/utilities/introspectionQuery.js
        'query' => base_path('resources/graphql/introspection.txt'),
        
        // Used by the "make:graphql:schema" command as a default path for
        // saving generated schema.
        'schema_output' => base_path('resources/graphql/schema.json')
    ],
    
    // Relay configuration
    'relay' => [
        
        // Define the schemas on which you would like to use relay. It will
        // automatically add the node query defined below to those schemas.
        // The parameter can be a string, an array of names or "*" for all schemas.
        'schemas' => 'default',
        
        // The Query class used for the node query
        'query' => [
            'node' => \Folklore\GraphQL\Relay\NodeQuery::class
        ],
        
        // The Type classes used for the Node interface and the PageInfo
        'types' => [
            'Node' => \Folklore\GraphQL\Relay\NodeInterface::class,
            'PageInfo' => \Folklore\GraphQL\Relay\PageInfoType::class
        ]
    ],
    
    // Config for GraphiQL (https://github.com/graphql/graphiql).
    // To disable GraphiQL, set this to null.
    'graphiql' => [
        'routes' => '/graphiql',
        'middleware' => [],
        'view' => 'graphql::graphiql',
        'composer' => \Folklore\GraphQL\View\GraphiQLComposer::class
    ],

    // Options to limit the query complexity and depth. See the doc
    // @ https://github.com/webonyx/graphql-php#security
    // for details. Disabled by default.
    'security' => [
        'query_max_complexity' => 200, // 100
        'query_max_depth' => 20, // 5
    ]
];
