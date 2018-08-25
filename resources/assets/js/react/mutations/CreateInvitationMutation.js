import { graphql } from 'react-relay';
import { Mutation } from '../lib';
import { ConnectionHandler } from 'relay-runtime';

export default (teamId, parentID) => Mutation(graphql`
mutation CreateInvitationMutation($input: CreateInvitationInput!) {
    createInvitation(input:$input) {
        invitation {
            id 
            token
        }
    }
}
`, {
    updater: store => {
        const newNode = store.getRootField("createInvitation").getLinkedRecord("invitation")
        const parent = store.get(parentID)
        const connection = ConnectionHandler.getConnection(parent, "TeamsPage_invitations")
        const newEdge = ConnectionHandler.createEdge(store, connection, newNode, "InvitationEdge");
        if(connection) {
            ConnectionHandler.insertEdgeAfter( connection, newEdge );
        }
    }
})({ team_id: teamId });