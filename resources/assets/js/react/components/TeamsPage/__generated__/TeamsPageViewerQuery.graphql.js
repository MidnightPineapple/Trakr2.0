/**
 * @flow
 * @relayHash 2004f609c78fcea507945cd4934ba25a
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
          +invitations: ?{|
            +edges: ?$ReadOnlyArray<?{|
              +node: ?{|
                +token: ?string,
                +id: string,
              |}
            |}>
          |},
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
          invitations(last: 100) {
            edges {
              node {
                token
                id
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v5 = {
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
v6 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "InvitationEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Invitation",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "token",
            "args": null,
            "storageKey": null
          },
          v0,
          v3
        ]
      },
      v4
    ]
  },
  v5
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
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
  "name": "TeamsPageViewerQuery",
  "id": null,
  "text": "query TeamsPageViewerQuery {\n  viewer {\n    id\n    teams(last: 100) {\n      edges {\n        node {\n          id\n          name\n          description\n          invitations(last: 100) {\n            edges {\n              node {\n                token\n                id\n                __typename\n              }\n              cursor\n            }\n            pageInfo {\n              hasPreviousPage\n              startCursor\n            }\n          }\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n    first_name\n    last_name\n  }\n}\n",
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
            "selections": [
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
                      v1,
                      v2,
                      {
                        "kind": "LinkedField",
                        "alias": "invitations",
                        "name": "__TeamsPage_invitations_connection",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "InvitationsConnection",
                        "plural": false,
                        "selections": v6
                      },
                      v3
                    ]
                  },
                  v4
                ]
              },
              v5
            ]
          },
          v7,
          v8
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
            "args": v9,
            "concreteType": "TeamsConnection",
            "plural": false,
            "selections": [
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
                      v1,
                      v2,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "invitations",
                        "storageKey": "invitations(last:100)",
                        "args": v9,
                        "concreteType": "InvitationsConnection",
                        "plural": false,
                        "selections": v6
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "invitations",
                        "args": v9,
                        "handle": "connection",
                        "key": "TeamsPage_invitations",
                        "filters": []
                      },
                      v3
                    ]
                  },
                  v4
                ]
              },
              v5
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "teams",
            "args": v9,
            "handle": "connection",
            "key": "TeamsPage_teams",
            "filters": []
          },
          v7,
          v8
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6669c3cc1503925a5338fa0abe080385';
module.exports = node;
