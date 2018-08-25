import { graphql } from 'react-relay';
import { Mutation } from '../lib';
import { ConnectionHandler } from 'relay-runtime';

export default (entryId, parentID) => Mutation(graphql`
mutation CompleteEntryMutation($input: CompleteEntryInput!) {
    completeEntry(input:$input) {
        entry {
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
`, {
    updater: store => {
        const newTeam = store.getRootField("completeEntry").getLinkedRecord("entry")
        const parent = store.get(parentID)
        const connection = ConnectionHandler.getConnection(parent, "Dashboard_entries")
        const newEdge = ConnectionHandler.createEdge(store, connection, newTeam, "EntryEdge");
        if(connection) {
            ConnectionHandler.deleteNode(connection, entryId);
            ConnectionHandler.insertEdgeAfter( connection, newEdge );
        }
    }
})({ id:entryId });