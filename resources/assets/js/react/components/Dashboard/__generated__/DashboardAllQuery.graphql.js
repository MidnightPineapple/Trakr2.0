/**
 * @flow
 * @relayHash b20c13a3586ae9329466c5b60667236f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DashboardAllQueryVariables = {|
  projectId: string
|};
export type DashboardAllQueryResponse = {|
  +project: ?{|
    +tasks: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
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
      |}>
    |}
  |}
|};
export type DashboardAllQuery = {|
  variables: DashboardAllQueryVariables,
  response: DashboardAllQueryResponse,
|};
*/


/*
query DashboardAllQuery(
  $projectId: ID!
) {
  project(id: $projectId) {
    tasks(last: 100) {
      edges {
        node {
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
    "name": "projectId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "projectId",
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
  "operationKind": "query",
  "name": "DashboardAllQuery",
  "id": null,
  "text": "query DashboardAllQuery(\n  $projectId: ID!\n) {\n  project(id: $projectId) {\n    tasks(last: 100) {\n      edges {\n        node {\n          id\n          name\n          description\n          entries(last: 100) {\n            edges {\n              node {\n                id\n                description\n                completed_at(getter: \"timestamp\")\n                task {\n                  name\n                  id\n                }\n                __typename\n              }\n              cursor\n            }\n            pageInfo {\n              hasPreviousPage\n              startCursor\n            }\n          }\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n    id\n  }\n}\n",
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
          "project",
          "tasks"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "DashboardAllQuery",
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
            "name": "__Dashboard_tasks_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "TasksConnection",
            "plural": false,
            "selections": [
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
  },
  "operation": {
    "kind": "Operation",
    "name": "DashboardAllQuery",
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
            "args": v9,
            "concreteType": "TasksConnection",
            "plural": false,
            "selections": [
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
                      v3,
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "entries",
                        "storageKey": "entries(last:100)",
                        "args": v9,
                        "concreteType": "EntriesConnection",
                        "plural": false,
                        "selections": v8
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "entries",
                        "args": v9,
                        "handle": "connection",
                        "key": "Dashboard_entries",
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
            "name": "tasks",
            "args": v9,
            "handle": "connection",
            "key": "Dashboard_tasks",
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
(node/*: any*/).hash = 'a541123d0baa70495b4d606c04678d53';
module.exports = node;
