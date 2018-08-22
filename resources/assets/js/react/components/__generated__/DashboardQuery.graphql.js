/**
 * @flow
 * @relayHash 40b886d2da875e8ccf16f955b1c97187
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DashboardQueryVariables = {||};
export type DashboardQueryResponse = {|
  +viewer: ?{|
    +id: string
  |}
|};
export type DashboardQuery = {|
  variables: DashboardQueryVariables,
  response: DashboardQueryResponse,
|};
*/


/*
query DashboardQuery {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DashboardQuery",
  "id": null,
  "text": "query DashboardQuery {\n  viewer {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DashboardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "DashboardQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1e9fa25f89a103638ca6641d2aea09a3';
module.exports = node;
