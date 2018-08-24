import { graphql } from 'react-relay';
import { Mutation } from '../lib';

export default (input, parentID) => Mutation(graphql`
mutation CreateInvitationMutation($input: CreateInvitationInput!) {
    createInvitation(input:$input) {
        invitation {
            id 
            token
        }
    }
}
`, {
    configs: [{
        type: 'RANGE_ADD',
        parentID,
        connectionInfo: [{
            key: 'TeamsPage_invitations',
            rangeBehavior: 'append',
        }],
        edgeName: "InvitationEdge"
    }]
})(input);