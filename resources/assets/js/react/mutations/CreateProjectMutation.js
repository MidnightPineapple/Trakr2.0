import { graphql } from 'react-relay';
import { Mutation } from '../lib';

export default (input, parentID) => Mutation(graphql`
mutation CreateProjectMutation($input: CreateProjectInput!) {
    createProject(input:$input) {
        project {
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
            key: 'ProjectsPage_projects',
            rangeBehavior: 'append',
        }],
        edgeName: "ProjectEdge"
    }]
})(input);