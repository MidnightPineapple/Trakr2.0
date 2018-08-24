/**
 * @flow
 * @relayHash 8b0d7bdcca0e6d19be71ed1a7c0c87cb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RedeemInvitationInput = {
  token: string,
  clientMutationId: string,
};
export type RedeemInvitationMutationVariables = {|
  input: RedeemInvitationInput
|};
export type RedeemInvitationMutationResponse = {|
  +redeemInvitation: ?{|
    +team: ?{|
      +id: string,
      +name: ?string,
      +description: ?string,
    |}
  |}
|};
export type RedeemInvitationMutation = {|
  variables: RedeemInvitationMutationVariables,
  response: RedeemInvitationMutationResponse,
|};
*/


/*
mutation RedeemInvitationMutation(
  $input: RedeemInvitationInput!
) {
  redeemInvitation(input: $input) {
    team {
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
    "type": "RedeemInvitationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "redeemInvitation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RedeemInvitationInput!"
      }
    ],
    "concreteType": "RedeemInvitationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "team",
        "storageKey": null,
        "args": null,
        "concreteType": "Team",
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
  "name": "RedeemInvitationMutation",
  "id": null,
  "text": "mutation RedeemInvitationMutation(\n  $input: RedeemInvitationInput!\n) {\n  redeemInvitation(input: $input) {\n    team {\n      id\n      name\n      description\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RedeemInvitationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RedeemInvitationMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1039fb438f586d096ab11b468b674561';
module.exports = node;
