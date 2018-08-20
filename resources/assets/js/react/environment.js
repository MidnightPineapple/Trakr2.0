import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';
import { serverUrl, graphQLUri } from './config';  
  
let accessToken = "";
let csrfToken = Array.from(document.getElementsByTagName('meta'))
.find( v => v.getAttribute("name") === "csrf-token")
.getAttribute("content");

function fetchQuery(
  operation,
  variables,
) {
  return fetch( graphQLUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": accessToken && "Bearer " + accessToken,
      "X-CSRF-TOKEN": csrfToken,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});

export default environment;
export function setAccessToken(token) {
  accessToken = token;
}