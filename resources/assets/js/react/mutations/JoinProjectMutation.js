import { graphql } from 'react-relay';
import { Mutation } from '../lib';

export default (input, parentID) => Mutation(graphql`
mutation JoinProjectMutation($input: JoinProjectInput!) {
    joinProject(input:$input) {
        project {
            id
        }
    }
}
`)(input);