/**
 * @flow
 * @relayHash c03cd1597b4b0a6104c455f0edec28c5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamsPageViewerQueryVariables = {||};
export type TeamsPageViewerQueryResponse = {|
  +viewer: ?{|
    +id: string,
    +teams: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +description: ?string,
        |}
      |}>
    |},
    +first_name: ?string,
    +last_name: ?string,
  |}
|};
export type TeamsPageViewerQuery = {|
  variables: TeamsPageViewerQueryVariables,
  response: TeamsPageViewerQueryResponse,
|};
*/


/*
query TeamsPageViewerQuery {
  viewer {
    id
    teams(last: 100) {
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
    first_name
    last_name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "TeamEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Team",
        "plural": false,
        "selections": [
          v0,
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
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
  "name": "TeamsPageViewerQuery",
  "id": null,
  "text": "query TeamsPageViewerQuery {\n  viewer {\n    id\n    teams(last: 100) {\n      edges {\n        node {\n          id\n          name\n          description\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n    first_name\n    last_name\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "viewer",
          "teams"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "TeamsPageViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": "teams",
            "name": "__TeamsPage_teams_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "TeamsConnection",
            "plural": false,
            "selections": v1
          },
          v2,
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TeamsPageViewerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "teams",
            "storageKey": "teams(last:100)",
            "args": v4,
            "concreteType": "TeamsConnection",
            "plural": false,
            "selections": v1
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "teams",
            "args": v4,
            "handle": "connection",
            "key": "TeamsPage_teams",
            "filters": null
          },
          v2,
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df4ca304e7f23c749c0eecb09b72e50c';
module.exports = node;
