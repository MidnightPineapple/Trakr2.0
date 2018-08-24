/**
 * @flow
 * @relayHash af3c831d087f837c074dc8f45f3b7cd7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateEntryInput = {
  description?: ?string,
  task_id: string,
  clientMutationId: string,
};
export type CreateEntryMutationVariables = {|
  input: CreateEntryInput
|};
export type CreateEntryMutationResponse = {|
  +createEntry: ?{|
    +entry: ?{|
      +id: string,
      +description: ?string,
      +task: ?{|
        +name: ?string,
        +id: string,
      |},
      +completed_at: ?string,
    |}
  |}
|};
export type CreateEntryMutation = {|
  variables: CreateEntryMutationVariables,
  response: CreateEntryMutationResponse,
|};
*/


/*
mutation CreateEntryMutation(
  $input: CreateEntryInput!
) {
  createEntry(input: $input) {
    entry {
      id
      description
      task {
        name
        id
      }
      completed_at(getter: "timestamp")
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateEntryInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createEntry",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateEntryInput!"
      }
    ],
    "concreteType": "CreateEntryPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "entry",
        "storageKey": null,
        "args": null,
        "concreteType": "Entry",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
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
                "name": "name",
                "args": null,
                "storageKey": null
              },
              v1
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "completed_at",
            "args": [
              {
                "kind": "Literal",
                "name": "getter",
                "value": "timestamp",
                "type": "String"
              }
            ],
            "storageKey": "completed_at(getter:\"timestamp\")"
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateEntryMutation",
  "id": null,
  "text": "mutation CreateEntryMutation(\n  $input: CreateEntryInput!\n) {\n  createEntry(input: $input) {\n    entry {\n      id\n      description\n      task {\n        name\n        id\n      }\n      completed_at(getter: \"timestamp\")\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateEntryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateEntryMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b4d5feb53e5cadc07d1fa6860eb8a82';
module.exports = node;
