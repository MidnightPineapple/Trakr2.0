/**
 * @flow
 * @relayHash 69e315cfcc4eb906648f9e7c9c8071e0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type JoinTaskInput = {
  user_id: string,
  task_id: string,
  clientMutationId: string,
};
export type JoinTaskMutationVariables = {|
  input: JoinTaskInput
|};
export type JoinTaskMutationResponse = {|
  +joinTask: ?{|
    +task: ?{|
      +id: string
    |}
  |}
|};
export type JoinTaskMutation = {|
  variables: JoinTaskMutationVariables,
  response: JoinTaskMutationResponse,
|};
*/


/*
mutation JoinTaskMutation(
  $input: JoinTaskInput!
) {
  joinTask(input: $input) {
    task {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "JoinTaskInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "joinTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "JoinTaskInput!"
      }
    ],
    "concreteType": "JoinTaskPayload",
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "JoinTaskMutation",
  "id": null,
  "text": "mutation JoinTaskMutation(\n  $input: JoinTaskInput!\n) {\n  joinTask(input: $input) {\n    task {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "JoinTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "JoinTaskMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57c8e8559a54b6b64b7e585ac98a4bd7';
module.exports = node;
