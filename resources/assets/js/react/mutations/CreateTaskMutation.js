import { graphql } from 'react-relay';
import { Mutation } from '../lib';

export default (input, parentID) => Mutation(graphql`
mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input:$input) {
        task {
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
            key: 'Dashboard_tasks',
            rangeBehavior: 'append',
        }, {
            key: 'TaskSelectionPage_tasks',
            rangeBehavior: 'append',
        }],
        edgeName: "TaskEdge"
    }]
})(input);