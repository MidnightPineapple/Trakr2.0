import { graphql } from 'react-relay';
import { Mutation } from '../lib';
import { ConnectionHandler } from 'relay-runtime';

export default (input, parentID) => Mutation(graphql`
mutation CreateEntryMutation($input: CreateEntryInput!) {
    createEntry(input:$input) {
        entry {
            id 
            description
            task {
                name 
                id
            }
            completed_at(getter:"timestamp")
        }
    }
}
`, {
    updater: store => {
        const newNode = store.getRootField("createEntry").getLinkedRecord("entry")
        const parent = store.get(parentID)
        const connection = ConnectionHandler.getConnection(parent, "Dashboard_entries")
        const newEdge = ConnectionHandler.createEdge(store, connection, newNode, "EntryEdge");
        if(connection) {
            ConnectionHandler.insertEdgeAfter( connection, newEdge );
        }
    }
})(input);