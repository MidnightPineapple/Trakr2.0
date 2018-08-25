import { graphql } from 'react-relay';
import { Mutation } from '../lib';
import { ConnectionHandler } from 'relay-runtime';

export default (input, parentID) => Mutation(graphql`
mutation CreateProjectMutation($input: CreateProjectInput!) {
    createProject(input:$input) {
        project {
            id 
            name 
            description
        }
    }
}
`, {
    updater: store => {
        const newNode = store.getRootField("createProject").getLinkedRecord("project")
        const parent = store.get(parentID)
        const connection = ConnectionHandler.getConnection(parent, "ProjectsPage_projects")
        const newEdge = ConnectionHandler.createEdge(store, connection, newNode, "ProjectEdge");
        if(connection) {
            ConnectionHandler.insertEdgeAfter( connection, newEdge );
        }
    }
})(input);