import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../environment';

export default ( Component, query ) => rootProps => (
    <QueryRenderer 
        environment={environment}
        query={query}
        render={({error, props:relayProps }) => {
            if(error) return <div>{error.message}</div>; // TODO: error cmpt or... redux?
            if(relayProps) return <Component {...rootProps} {...relayProps} />
            return <div>Loading...</div> // TODO: loading cmpt or... redux?
        }}
    />
)