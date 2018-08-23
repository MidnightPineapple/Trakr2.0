/**
 * @flow
 * @relayHash c9d6e354a8d942d9ebb62619c444f7cd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TaskSelectionPageAllQueryVariables = {|
  id: string
|};
export type TaskSelectionPageAllQueryResponse = {|
  +project: ?{|
    +tasks: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +description: ?string,
        |}
      |}>
    |}
  |}
|};
export type TaskSelectionPageAllQuery = {|
  variables: TaskSelectionPageAllQueryVariables,
  response: TaskSelectionPageAllQueryResponse,
|};
*/


/*
query TaskSelectionPageAllQuery(
  $id: ID!
) {
  project(id: $id) {
    tasks(last: 100) {
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
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "TaskEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Task",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
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
v4 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TaskSelectionPageAllQuery",
  "id": null,
  "text": "query TaskSelectionPageAllQuery(\n  $id: ID!\n) {\n  project(id: $id) {\n    tasks(last: 100) {\n      edges {\n        node {\n          id\n          name\n          description\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "project",
          "tasks"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "TaskSelectionPageAllQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
        "storageKey": null,
        "args": v1,
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "tasks",
            "name": "__TaskSelectionPage_tasks_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "TasksConnection",
            "plural": false,
            "selections": v3
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TaskSelectionPageAllQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
        "storageKey": null,
        "args": v1,
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tasks",
            "storageKey": "tasks(last:100)",
            "args": v4,
            "concreteType": "TasksConnection",
            "plural": false,
            "selections": v3
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "tasks",
            "args": v4,
            "handle": "connection",
            "key": "TaskSelectionPage_tasks",
            "filters": []
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '56891b8ecf64f07b6dcff74d642e9544';
module.exports = node;
