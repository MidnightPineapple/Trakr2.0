/**
 * @flow
 * @relayHash 4cd96e43597282bf7ad0f87658bcc1da
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectsPageAllQueryVariables = {|
  id: string
|};
export type ProjectsPageAllQueryResponse = {|
  +team: ?{|
    +clients: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
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
      |}>
    |}
  |}
|};
export type ProjectsPageAllQuery = {|
  variables: ProjectsPageAllQueryVariables,
  response: ProjectsPageAllQueryResponse,
|};
*/


/*
query ProjectsPageAllQuery(
  $id: ID!
) {
  team(id: $id) {
    clients(last: 100) {
      edges {
        node {
          id
          name
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
var v0 = {
  "count": null,
  "cursor": null,
  "direction": "backward",
  "path": null
},
v1 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
          v3,
          v4,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
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
  "name": "ProjectsPageAllQuery",
  "id": null,
  "text": "query ProjectsPageAllQuery(\n  $id: ID!\n) {\n  team(id: $id) {\n    clients(last: 100) {\n      edges {\n        node {\n          id\n          name\n          divisions(last: 100) {\n            edges {\n              node {\n                id\n                name\n                projects(last: 100) {\n                  edges {\n                    node {\n                      id\n                      name\n                      description\n                      __typename\n                    }\n                    cursor\n                  }\n                  pageInfo {\n                    hasPreviousPage\n                    startCursor\n                  }\n                }\n                __typename\n              }\n              cursor\n            }\n            pageInfo {\n              hasPreviousPage\n              startCursor\n            }\n          }\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {
    "connection": [
      v0,
      v0,
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "team",
          "clients"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "ProjectsPageAllQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v1,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "team",
        "storageKey": null,
        "args": v2,
        "concreteType": "Team",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "clients",
            "name": "__ProjectsPage_clients_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "ClientsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ClientEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Client",
                    "plural": false,
                    "selections": [
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
    "name": "ProjectsPageAllQuery",
    "argumentDefinitions": v1,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "team",
        "storageKey": null,
        "args": v2,
        "concreteType": "Team",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clients",
            "storageKey": "clients(last:100)",
            "args": v9,
            "concreteType": "ClientsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ClientEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Client",
                    "plural": false,
                    "selections": [
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
                                  v3,
                                  v4,
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
            "name": "clients",
            "args": v9,
            "handle": "connection",
            "key": "ProjectsPage_clients",
            "filters": []
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3877983556f42b7652464173252d3ba6';
module.exports = node;
