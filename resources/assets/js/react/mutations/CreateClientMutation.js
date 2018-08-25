import { graphql } from 'react-relay';
import { Mutation } from '../lib';
import { ConnectionHandler } from 'relay-runtime';

export default (input, parentID) => Mutation(graphql`
mutation CreateClientMutation($input: CreateClientInput!) {
    createClient(input:$input) {
        client {
            id 
            name 
            description
            divisions( last:100 ) @connection(key:"ProjectsPage_divisions", filters:[]) {
                edges {
                    node {
                        id
                        name 
                        projects(last:100) @connection(key:"ProjectsPage_projects", filters:[]) {
                            edges {
                                node {
                                    id
                                    name 
                                    description
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`, {
    updater: store => {
        const newNode = store.getRootField("createClient").getLinkedRecord("client")
        const parent = store.get(parentID)
        const connection = ConnectionHandler.getConnection(parent, "ProjectsPage_clients")
        const newEdge = ConnectionHandler.createEdge(store, connection, newNode, "ClientEdge");
        if(connection) {
            ConnectionHandler.insertEdgeAfter( connection, newEdge );
        }
    }
})(input);