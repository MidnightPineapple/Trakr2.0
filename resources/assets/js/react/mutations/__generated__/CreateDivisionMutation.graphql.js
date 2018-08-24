/**
 * @flow
 * @relayHash 8e2ae12be72157d7a8a970ec3cad5455
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateDivisionInput = {
  name?: ?string,
  description?: ?string,
  client_id: string,
  clientMutationId: string,
};
export type CreateDivisionMutationVariables = {|
  input: CreateDivisionInput
|};
export type CreateDivisionMutationResponse = {|
  +createDivision: ?{|
    +division: ?{|
      +id: string,
      +name: ?string,
      +description: ?string,
    |}
  |}
|};
export type CreateDivisionMutation = {|
  variables: CreateDivisionMutationVariables,
  response: CreateDivisionMutationResponse,
|};
*/


/*
mutation CreateDivisionMutation(
  $input: CreateDivisionInput!
) {
  createDivision(input: $input) {
    division {
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
    "type": "CreateDivisionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createDivision",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateDivisionInput!"
      }
    ],
    "concreteType": "CreateDivisionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "division",
        "storageKey": null,
        "args": null,
        "concreteType": "Division",
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
  "name": "CreateDivisionMutation",
  "id": null,
  "text": "mutation CreateDivisionMutation(\n  $input: CreateDivisionInput!\n) {\n  createDivision(input: $input) {\n    division {\n      id\n      name\n      description\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateDivisionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateDivisionMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f41056e3d9c7ba02d905eb418075ff7c';
module.exports = node;
