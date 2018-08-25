import { graphql } from 'react-relay';
import { Mutation } from '../lib';
import { ConnectionHandler } from 'relay-runtime';

export default (token, parentID) => Mutation(graphql`
mutation RedeemInvitationMutation($input: RedeemInvitationInput!) {
    redeemInvitation(input:$input) {
        team {
            id 
            name 
            description
        }
    }
}
`, {
    updater: store => {
        const newNode = store.getRootField("redeemInvitation").getLinkedRecord("team")
        const viewer = store.get(parentID)
        const connection = ConnectionHandler.getConnection(viewer, "TeamsPage_teams")
        const newEdge = ConnectionHandler.createEdge(store, connection, newNode, "TeamEdge");
        if(connection) ConnectionHandler.insertEdgeAfter( connection, newEdge );
    }
})({ token });