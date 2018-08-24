/**
 * @flow
 * @relayHash ab961b32abe15056550d2a8f4795c5cc
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
    "kind": "LinkedField",
    "alias": null,
    "name": "createClient",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateClientInput!"
      }
    ],
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateClientMutation",
  "id": null,
  "text": "mutation CreateClientMutation(\n  $input: CreateClientInput!\n) {\n  createClient(input: $input) {\n    client {\n      id\n      name\n      description\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateClientMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateClientMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '341d4a9f49198891f837fd33936926a6';
module.exports = node;
