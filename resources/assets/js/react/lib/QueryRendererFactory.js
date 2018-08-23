import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../environment';

export default ( Component, query, getVars ) => rootProps => (
    <QueryRenderer 
        environment={environment}
        query={query}
        variables={getVars && getVars(rootProps)}
        render={({error, props:relayProps }) => {
            if(error) return <div>{error.message}</div>; // TODO: error cmpt or... redux?
            if(relayProps) return <Component {...rootProps} {...relayProps} />
            return <div>Loading...</div> // TODO: loading cmpt or... redux?
        }}
    />
)