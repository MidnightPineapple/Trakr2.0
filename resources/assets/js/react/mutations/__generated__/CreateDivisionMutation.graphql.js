/**
 * @flow
 * @relayHash 0b55ebb39e1e28a6de5e19952769653d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateDivisionInput = {
  name?: ?string,
  description?: ?string,
  client_id: string,
  clientMutationId: string,
};
export type CreateDivisionMutationVariables = {|
  input: CreateDivisionInput
|};
export type CreateDivisionMutationResponse = {|
  +createDivision: ?{|
    +division: ?{|
      +id: string,
      +name: ?string,
      +description: ?string,
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
  |}
|};
export type CreateDivisionMutation = {|
  variables: CreateDivisionMutationVariables,
  response: CreateDivisionMutationResponse,
|};
*/


/*
mutation CreateDivisionMutation(
  $input: CreateDivisionInput!
) {
  createDivision(input: $input) {
    division {
      id
      name
      description
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
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateDivisionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateDivisionInput!"
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
v5 = [
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
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
  }
],
v6 = [
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
  "name": "CreateDivisionMutation",
  "id": null,
  "text": "mutation CreateDivisionMutation(\n  $input: CreateDivisionInput!\n) {\n  createDivision(input: $input) {\n    division {\n      id\n      name\n      description\n      projects(last: 100) {\n        edges {\n          node {\n            id\n            name\n            description\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          hasPreviousPage\n          startCursor\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "createDivision",
          "division",
          "projects"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "CreateDivisionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createDivision",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateDivisionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "division",
            "storageKey": null,
            "args": null,
            "concreteType": "Division",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": "projects",
                "name": "__ProjectsPage_projects_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "ProjectsConnection",
                "plural": false,
                "selections": v5
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateDivisionMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createDivision",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateDivisionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "division",
            "storageKey": null,
            "args": null,
            "concreteType": "Division",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "projects",
                "storageKey": "projects(last:100)",
                "args": v6,
                "concreteType": "ProjectsConnection",
                "plural": false,
                "selections": v5
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "projects",
                "args": v6,
                "handle": "connection",
                "key": "ProjectsPage_projects",
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
(node/*: any*/).hash = '4e1352d55de7b475a15a1297fc30ef58';
module.exports = node;
