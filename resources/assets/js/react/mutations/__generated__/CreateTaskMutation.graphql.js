/**
 * @flow
 * @relayHash 3c322a5d31c35fa0839e9e7bcb1ec267
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTaskInput = {
  name?: ?string,
  description?: ?string,
  project_id: string,
  clientMutationId: string,
};
export type CreateTaskMutationVariables = {|
  input: CreateTaskInput
|};
export type CreateTaskMutationResponse = {|
  +createTask: ?{|
    +task: ?{|
      +id: string,
      +name: ?string,
      +description: ?string,
      +entries: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +description: ?string,
            +completed_at: ?string,
            +task: ?{|
              +name: ?string,
              +id: string,
            |},
          |}
        |}>
      |},
    |}
  |}
|};
export type CreateTaskMutation = {|
  variables: CreateTaskMutationVariables,
  response: CreateTaskMutationResponse,
|};
*/


/*
mutation CreateTaskMutation(
  $input: CreateTaskInput!
) {
  createTask(input: $input) {
    task {
      id
      name
      description
      entries(last: 100) {
        edges {
          node {
            id
            description
            completed_at(getter: "timestamp")
            task {
              name
              id
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
    "type": "CreateTaskInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateTaskInput!"
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
    "concreteType": "EntryEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Entry",
        "plural": false,
        "selections": [
          v2,
          v4,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "completed_at",
            "args": [
              {
                "kind": "Literal",
                "name": "getter",
                "value": "timestamp",
                "type": "String"
              }
            ],
            "storageKey": "completed_at(getter:\"timestamp\")"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "task",
            "storageKey": null,
            "args": null,
            "concreteType": "Task",
            "plural": false,
            "selections": [
              v3,
              v2
            ]
          },
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
  "name": "CreateTaskMutation",
  "id": null,
  "text": "mutation CreateTaskMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    task {\n      id\n      name\n      description\n      entries(last: 100) {\n        edges {\n          node {\n            id\n            description\n            completed_at(getter: \"timestamp\")\n            task {\n              name\n              id\n            }\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          hasPreviousPage\n          startCursor\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "createTask",
          "task",
          "entries"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "CreateTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createTask",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateTaskPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "task",
            "storageKey": null,
            "args": null,
            "concreteType": "Task",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": "entries",
                "name": "__Dashboard_entries_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "EntriesConnection",
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
    "name": "CreateTaskMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createTask",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateTaskPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "task",
            "storageKey": null,
            "args": null,
            "concreteType": "Task",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "entries",
                "storageKey": "entries(last:100)",
                "args": v6,
                "concreteType": "EntriesConnection",
                "plural": false,
                "selections": v5
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "entries",
                "args": v6,
                "handle": "connection",
                "key": "Dashboard_entries",
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
(node/*: any*/).hash = '2f8f28727874dc2f9a9f260049e71ced';
module.exports = node;
