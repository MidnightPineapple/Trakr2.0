import { graphql } from 'react-relay';
import { Mutation } from '../lib';

export default (input, parentID) => Mutation(graphql`
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
    configs: [{
        type: 'RANGE_ADD',
        parentID,
        connectionInfo: [{
            key: 'Dashboard_entries',
            rangeBehavior: 'append', // ! gotta figure out how to replace.
        }],
        edgeName: "EntryEdge"
    }]
})(input);