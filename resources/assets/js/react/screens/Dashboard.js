import React, { Component } from 'react';
import { QueryRenderer } from '../lib';
import { graphql } from 'react-relay';

class Dashboard extends Component {
  render() {

    return (
        <div>
            Hello World {this.props.viewer.first_name}
        </div>
    );
  }
}

export default QueryRenderer(Dashboard, graphql`
query DashboardQuery {
    viewer {
        id
        first_name
        last_name
    }
}
`);
