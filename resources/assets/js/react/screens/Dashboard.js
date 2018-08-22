import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Dashboard extends Component {
  render() {
    return (
        <div>
            Hello World {this.props.viewer.first_name}
        </div>
    );
  }
}

export default createFragmentContainer(Dashboard, graphql`
fragment Dashboard_viewer on User {
    id
    first_name
    last_name
}
`);