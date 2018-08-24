/**
 * @flow
 * @relayHash e051c25348cf0674506552301f5e6333
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTaskInput = {
  name?: ?string,
  description?: ?string,
  project_id: string,
  clientMutationId: string,
};
export type CreateTaskMutationVariables = {|
  input: CreateTaskInput
|};
export type CreateTaskMutationResponse = {|
  +createTask: ?{|
    +task: ?{|
      +id: string,
      +name: ?string,
      +description: ?string,
    |}
  |}
|};
export type CreateTaskMutation = {|
  variables: CreateTaskMutationVariables,
  response: CreateTaskMutationResponse,
|};
*/


/*
mutation CreateTaskMutation(
  $input: CreateTaskInput!
) {
  createTask(input: $input) {
    task {
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
    "type": "CreateTaskInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateTaskInput!"
      }
    ],
    "concreteType": "CreateTaskPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "task",
        "storageKey": null,
        "args": null,
        "concreteType": "Task",
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
  "name": "CreateTaskMutation",
  "id": null,
  "text": "mutation CreateTaskMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    task {\n      id\n      name\n      description\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateTaskMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b77fcbd3911f474e7a2ce3dbc923af9e';
module.exports = node;
