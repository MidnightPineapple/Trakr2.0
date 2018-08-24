/**
 * @flow
 * @relayHash afb329cd4963f904bb75ee55d4fb4101
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompleteEntryInput = {
  id: string,
  clientMutationId: string,
};
export type CompleteEntryMutationVariables = {|
  input: CompleteEntryInput
|};
export type CompleteEntryMutationResponse = {|
  +completeEntry: ?{|
    +entry: ?{|
      +id: string,
      +description: ?string,
      +completed_at: ?string,
      +task: ?{|
        +name: ?string,
        +id: string,
      |},
    |}
  |}
|};
export type CompleteEntryMutation = {|
  variables: CompleteEntryMutationVariables,
  response: CompleteEntryMutationResponse,
|};
*/


/*
mutation CompleteEntryMutation(
  $input: CompleteEntryInput!
) {
  completeEntry(input: $input) {
    entry {
      id
      description
      completed_at(getter: "timestamp")
      task {
        name
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CompleteEntryInput!",
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
    "name": "completeEntry",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CompleteEntryInput!"
      }
    ],
    "concreteType": "CompleteEntryPayload",
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CompleteEntryMutation",
  "id": null,
  "text": "mutation CompleteEntryMutation(\n  $input: CompleteEntryInput!\n) {\n  completeEntry(input: $input) {\n    entry {\n      id\n      description\n      completed_at(getter: \"timestamp\")\n      task {\n        name\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CompleteEntryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "CompleteEntryMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ed9fd0b179dfffc59ff5a0608a3e48e';
module.exports = node;
