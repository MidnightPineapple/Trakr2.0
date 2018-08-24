/**
 * @flow
 * @relayHash 3749b5f5422b9c3e531846867ca938c2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type JoinProjectInput = {
  user_id: string,
  project_id: string,
  clientMutationId: string,
};
export type JoinProjectMutationVariables = {|
  input: JoinProjectInput
|};
export type JoinProjectMutationResponse = {|
  +joinProject: ?{|
    +project: ?{|
      +id: string
    |}
  |}
|};
export type JoinProjectMutation = {|
  variables: JoinProjectMutationVariables,
  response: JoinProjectMutationResponse,
|};
*/


/*
mutation JoinProjectMutation(
  $input: JoinProjectInput!
) {
  joinProject(input: $input) {
    project {
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
    "type": "JoinProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "joinProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "JoinProjectInput!"
      }
    ],
    "concreteType": "JoinProjectPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
        "storageKey": null,
        "args": null,
        "concreteType": "Project",
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
  "name": "JoinProjectMutation",
  "id": null,
  "text": "mutation JoinProjectMutation(\n  $input: JoinProjectInput!\n) {\n  joinProject(input: $input) {\n    project {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "JoinProjectMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "JoinProjectMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0db87c2f7ca22367ba779a1b533d1e64';
module.exports = node;
