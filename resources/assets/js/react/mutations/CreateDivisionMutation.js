import { graphql } from 'react-relay';
import { Mutation } from '../lib';
import { ConnectionHandler } from 'relay-runtime';

export default (input, parentID) => Mutation(graphql`
mutation CreateDivisionMutation($input: CreateDivisionInput!) {
    createDivision(input:$input) {
        division {
            id 
            name 
            description
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
`, {
    updater: store => {
        const newNode = store.getRootField("createDivision").getLinkedRecord("division")
        const parent = store.get(parentID)
        const connection = ConnectionHandler.getConnection(parent, "ProjectsPage_divisions")
        console.log(parentID, parent, connection)
        const newEdge = ConnectionHandler.createEdge(store, connection, newNode, "DivisionEdge");
        if(connection) {
            ConnectionHandler.insertEdgeAfter( connection, newEdge );
        }
    }

})(input);