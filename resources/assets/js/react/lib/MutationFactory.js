import { commitMutation } from 'react-relay';
import environment from '../environment';

export default function MutationFactory(mutation, config) {
    return function(input) {
        return new Promise( (resolve, reject) => {
            commitMutation( environment, {
                ...config,
                mutation,
                variables: { input },
                onCompleted: response => resolve(response),
                onError: error => reject(error)
            })
        })
    }
}