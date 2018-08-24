import { graphql } from 'react-relay';
import { Mutation } from '../lib';

export default (input, parentID) => Mutation(graphql`
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
    configs: [{
        type: 'RANGE_ADD',
        parentID,
        connectionInfo: [{
            key: 'TeamsPage_teams',
            rangeBehavior: 'append',
        }],
        edgeName: "TeamEdge"
    }]
})(input);