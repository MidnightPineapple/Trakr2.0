import { graphql } from 'react-relay';
import { Mutation } from '../lib';
import { ConnectionHandler } from 'relay-runtime';

export default (input, parentID) => Mutation(graphql`
mutation CreateTeamMutation($input: CreateTeamInput!) {
    createTeam(input:$input) {
        team {
            id 
            name 
            description
        }
    }
}
`, {
    updater: store => {
        const newTeam = store.getRootField("createTeam").getLinkedRecord("team")
        const viewer = store.get(parentID)
        const connection = ConnectionHandler.getConnection(viewer, "TeamsPage_teams")
        const newEdge = ConnectionHandler.createEdge(store, connection, newTeam, "TeamEdge");
        if(connection) ConnectionHandler.insertEdgeAfter( connection, newEdge );
    }
})(input);