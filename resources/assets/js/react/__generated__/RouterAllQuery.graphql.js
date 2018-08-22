/**
 * @flow
 * @relayHash da07bc7de78d016e6d9ab432d4b74ecb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Dashboard_viewer$ref = any;
export type RouterAllQueryVariables = {||};
export type RouterAllQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Dashboard_viewer$ref
  |}
|};
export type RouterAllQuery = {|
  variables: RouterAllQueryVariables,
  response: RouterAllQueryResponse,
|};
*/


/*
query RouterAllQuery {
  viewer {
    ...Dashboard_viewer
    id
  }
}

fragment Dashboard_viewer on User {
  id
  first_name
  last_name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "RouterAllQuery",
  "id": null,
  "text": "query RouterAllQuery {\n  viewer {\n    ...Dashboard_viewer\n    id\n  }\n}\n\nfragment Dashboard_viewer on User {\n  id\n  first_name\n  last_name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RouterAllQuery",
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
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Dashboard_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RouterAllQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "first_name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "last_name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '1a18a42afd7a2d55978e257228d8b7d8';
module.exports = node;
