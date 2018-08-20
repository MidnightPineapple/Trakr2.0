import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../environment';

export default ( Component, query ) => () => (
    <QueryRenderer 
        environment={environment}
        query={query}
        render={({error, props }) => {
            if(error) return <div>{error.message}</div>; // TODO: error cmpt or... redux?
            if(props) return React.createElement(Component, props);
            return <div>Loading...</div> // TODO: loading cmpt or... redux?
        }}
    />
)