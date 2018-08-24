/**
 * @flow
 * @relayHash cc82f59094071aab7219154c26ee048e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTeamInput = {
  name: string,
  description?: ?string,
  clientMutationId: string,
};
export type CreateTeamMutationVariables = {|
  input: CreateTeamInput
|};
export type CreateTeamMutationResponse = {|
  +createTeam: ?{|
    +team: ?{|
      +id: string,
      +name: ?string,
      +description: ?string,
    |}
  |}
|};
export type CreateTeamMutation = {|
  variables: CreateTeamMutationVariables,
  response: CreateTeamMutationResponse,
|};
*/


/*
mutation CreateTeamMutation(
  $input: CreateTeamInput!
) {
  createTeam(input: $input) {
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
    "type": "CreateTeamInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTeam",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateTeamInput!"
      }
    ],
    "concreteType": "CreateTeamPayload",
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
  "name": "CreateTeamMutation",
  "id": null,
  "text": "mutation CreateTeamMutation(\n  $input: CreateTeamInput!\n) {\n  createTeam(input: $input) {\n    team {\n      id\n      name\n      description\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateTeamMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateTeamMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c1163d1d8da9bf6696bc62038a5d38bf';
module.exports = node;
