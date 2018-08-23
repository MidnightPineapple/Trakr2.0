import React, { Component } from 'react';
import "./index.css";
import { QueryRenderer } from '../../lib';
import { graphql } from 'react-relay';

class ProjectsPage extends Component {

  handleClickProject(id) {
    this.props.appState.setProjectId(id);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>My Projects</h1>
        <div className="clients-container">
          {this.props.team.clients.edges.map( ({node}, key) =>
            <div className = "client-display" key={key}>
              <p className="vertical-text">Client: {node.name}</p>
              <br/>
              {node.divisions.edges.map( ({node}, key) =>
                <div className="division-display" key={key}>
                  <p >Division: {node.name}</p>
                  {node.projects.edges.map( ({node}, key) =>
                    <div className="project-display" key={key}>
                      <button onClick={() => this.handleClickProject(node.id)}>{node.name}</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}


export default QueryRenderer(ProjectsPage, graphql`
query ProjectsPageAllQuery($id: ID!) {
  team(id: $id) {
    clients( last:100 ) @connection(key:"ProjectsPage_clients", filters:[]) {
      edges {
        node {
          id
          name 
          divisions( last:100 ) @connection(key:"ProjectsPage_divisions", filters:[]) {
            edges {
              node {
                id
                name 
                projects(last:100) @connection(key:"ProjectsPage_projects", filters:[]) {
                  edges {
                    node {
                      id
                      name 
                      description
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } 
}
`, props => {

  console.log(props.appState)

  return {
    id: props.appState.teamId
  }
} );
