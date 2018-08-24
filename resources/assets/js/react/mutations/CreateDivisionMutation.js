import { graphql } from 'react-relay';
import { Mutation } from '../lib';

export default (input, parentID) => Mutation(graphql`
mutation CreateDivisionMutation($input: CreateDivisionInput!) {
    createDivision(input:$input) {
        division {
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
            key: 'ProjectsPage_divisions',
            rangeBehavior: 'append',
        }],
        edgeName: "DivisionEdge"
    }]
})(input);