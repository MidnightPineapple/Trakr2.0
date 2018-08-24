/**
 * @flow
 * @relayHash a444b34e6c8f4a73fc107d6fa3bb5b52
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateInvitationInput = {
  team_id: string,
  clientMutationId: string,
};
export type CreateInvitationMutationVariables = {|
  input: CreateInvitationInput
|};
export type CreateInvitationMutationResponse = {|
  +createInvitation: ?{|
    +invitation: ?{|
      +id: string,
      +token: ?string,
    |}
  |}
|};
export type CreateInvitationMutation = {|
  variables: CreateInvitationMutationVariables,
  response: CreateInvitationMutationResponse,
|};
*/


/*
mutation CreateInvitationMutation(
  $input: CreateInvitationInput!
) {
  createInvitation(input: $input) {
    invitation {
      id
      token
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateInvitationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createInvitation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateInvitationInput!"
      }
    ],
    "concreteType": "CreateInvitationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "invitation",
        "storageKey": null,
        "args": null,
        "concreteType": "Invitation",
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
            "name": "token",
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
  "name": "CreateInvitationMutation",
  "id": null,
  "text": "mutation CreateInvitationMutation(\n  $input: CreateInvitationInput!\n) {\n  createInvitation(input: $input) {\n    invitation {\n      id\n      token\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateInvitationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateInvitationMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bb652bcd444e0921274587c5a0b15da0';
module.exports = node;
