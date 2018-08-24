import { graphql } from 'react-relay';
import { Mutation } from '../lib';

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