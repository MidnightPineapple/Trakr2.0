import { graphql } from 'react-relay';
import { Mutation } from '../lib';

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
    configs: [{
        type: 'RANGE_ADD',
        parentID,
        connectionInfo: [{
            key: 'Dashboard_entries',
            rangeBehavior: 'append',
        }],
        edgeName: "EntryEdge"
    }]
})(input);