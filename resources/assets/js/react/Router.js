import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { graphql } from 'react-relay';
import { QueryRenderer } from './lib';
import { Dashboard } from './screens';

class Router extends Component {

    render() {

        const { viewer } = this.props;
    
        return (
          <BrowserRouter>
            <div>
              <Route path="/" exact render={() => <Dashboard viewer={viewer}/> } />
            </div>
          </BrowserRouter>
        );
      }

}

export default QueryRenderer(Router, graphql`
  query RouterAllQuery {
    viewer {
      ...Dashboard_viewer
    }
  }
`);
