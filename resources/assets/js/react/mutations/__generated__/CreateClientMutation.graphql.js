/**
 * @flow
 * @relayHash 663e17a6e307e1e27bfca86d7f2a19c7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateClientInput = {
  name?: ?string,
  description?: ?string,
  team_id: string,
  clientMutationId: string,
};
export type CreateClientMutationVariables = {|
  input: CreateClientInput
|};
export type CreateClientMutationResponse = {|
  +createClient: ?{|
    +client: ?{|
      +id: string,
      +name: ?string,
      +description: ?string,
      +divisions: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +name: ?string,
            +projects: ?{|
              +edges: ?$ReadOnlyArray<?{|
                +node: ?{|
                  +id: string,
                  +name: ?string,
                  +description: ?string,
                |}
              |}>
            |},
          |}
        |}>
      |},
    |}
  |}
|};
export type CreateClientMutation = {|
  variables: CreateClientMutationVariables,
  response: CreateClientMutationResponse,
|};
*/


/*
mutation CreateClientMutation(
  $input: CreateClientInput!
) {
  createClient(input: $input) {
    client {
      id
      name
      description
      divisions(last: 100) {
        edges {
          node {
            id
            name
            projects(last: 100) {
              edges {
                node {
                  id
                  name
                  description
                  __typename
                }
                cursor
              }
              pageInfo {
                hasPreviousPage
                startCursor
              }
            }
            __typename
          }
          cursor
        }
        pageInfo {
          hasPreviousPage
          startCursor
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateClientInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateClientInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasPreviousPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "startCursor",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ProjectEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Project",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4,
          v5
        ]
      },
      v6
    ]
  },
  v7
],
v9 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateClientMutation",
  "id": null,
  "text": "mutation CreateClientMutation(\n  $input: CreateClientInput!\n) {\n  createClient(input: $input) {\n    client {\n      id\n      name\n      description\n      divisions(last: 100) {\n        edges {\n          node {\n            id\n            name\n            projects(last: 100) {\n              edges {\n                node {\n                  id\n                  name\n                  description\n                  __typename\n                }\n                cursor\n              }\n              pageInfo {\n                hasPreviousPage\n                startCursor\n              }\n            }\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          hasPreviousPage\n          startCursor\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": null
      },
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "createClient",
          "client",
          "divisions"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "CreateClientMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createClient",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateClientPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "client",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": "divisions",
                "name": "__ProjectsPage_divisions_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "DivisionsConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "DivisionEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Division",
                        "plural": false,
                        "selections": [
                          v2,
                          v3,
                          {
                            "kind": "LinkedField",
                            "alias": "projects",
                            "name": "__ProjectsPage_projects_connection",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ProjectsConnection",
                            "plural": false,
                            "selections": v8
                          },
                          v5
                        ]
                      },
                      v6
                    ]
                  },
                  v7
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateClientMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createClient",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateClientPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "client",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "divisions",
                "storageKey": "divisions(last:100)",
                "args": v9,
                "concreteType": "DivisionsConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "DivisionEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Division",
                        "plural": false,
                        "selections": [
                          v2,
                          v3,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "projects",
                            "storageKey": "projects(last:100)",
                            "args": v9,
                            "concreteType": "ProjectsConnection",
                            "plural": false,
                            "selections": v8
                          },
                          {
                            "kind": "LinkedHandle",
                            "alias": null,
                            "name": "projects",
                            "args": v9,
                            "handle": "connection",
                            "key": "ProjectsPage_projects",
                            "filters": []
                          },
                          v5
                        ]
                      },
                      v6
                    ]
                  },
                  v7
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "divisions",
                "args": v9,
                "handle": "connection",
                "key": "ProjectsPage_divisions",
                "filters": []
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1eae8a225e03edea0a7e9674a936de04';
module.exports = node;
