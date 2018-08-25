import { graphql } from 'react-relay';
import { Mutation } from '../lib';
import { ConnectionHandler } from 'relay-runtime';

export default (input, parentID) => Mutation(graphql`
mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input:$input) {
        task {
            id 
            name 
            description 
            entries(last:100) @connection(key:"Dashboard_entries", filters:[]) {
                edges {
                    node {
                        id 
                        description
                        completed_at(getter:"timestamp")
                        task {
                            name
                            id
                        }
                    }
                }
            }
        }
    }
}
`, {
    updater: store => {
        const newNode = store.getRootField("createTask").getLinkedRecord("task")
        const parent = store.get(parentID)
        let connection = ConnectionHandler.getConnection(parent, "Dashboard_tasks")
        if(!connection) connection = ConnectionHandler.getConnection(parent, "TaskSelectionPage_tasks")
        const newEdge = ConnectionHandler.createEdge(store, connection, newNode, "TaskEdge");
        if(connection) {
            ConnectionHandler.insertEdgeAfter( connection, newEdge );
        }
    }
})(input);