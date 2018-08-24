import { graphql } from 'react-relay';
import { Mutation } from '../lib';

export default (input, parentID) => Mutation(graphql`
mutation CreateClientMutation($input: CreateClientInput!) {
    createClient(input:$input) {
        client {
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
            key: 'ProjectsPage_clients',
            rangeBehavior: 'append',
        }],
        edgeName: "ClientEdge"
    }]
})(input);