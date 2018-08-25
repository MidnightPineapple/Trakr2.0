import { graphql } from 'react-relay';
import { Mutation } from '../lib';

export default (input, parentID) => Mutation(graphql`
mutation JoinTaskMutation($input: JoinTaskInput!) {
    joinTask(input:$input) {
        task {
            id
        }
    }
}
`)(input);