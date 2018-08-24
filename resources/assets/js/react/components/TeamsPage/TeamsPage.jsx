import React, { Component } from 'react';
import ButtonBox from './ButtonBox';
import "./index.css"
import { QueryRenderer } from '../../lib';
import { graphql } from 'react-relay';

class TeamsPage extends Component {

  setTeam(id) {
    this.props.appState.setTeamId(id)
    this.props.history.push("/")
  }

  handleClickNewTeam() {
    // mutations for createTeam
  }

  render() {

    const { teams } = this.props.viewer;
    
    return (
      <div>
          <h1>Your Teams</h1>
          <div className="row">
            { teams.edges.map( ({node}, key) => (
              <ButtonBox key={key} title={node.name} teamId={node.id} onClick={() => this.setTeam(node.id)} />
            ))}
            <ButtonBox title="New Team" onClick = { this.handleClickNewTeam.bind(this) } />
          </div>
      </div>
    );
  }
}

export default QueryRenderer(TeamsPage, graphql`
query TeamsPageViewerQuery {
  viewer {
    id
    teams(last:100) @connection(key:"TeamsPage_teams", filters:[]) {
      edges {
        node {
          id
          name 
          description 
          invitations (last:100) @connection(key:"TeamsPage_invitations", filters:[]) {
            edges {
              node {
                token 
                id
              }
            }
          }
        }
      }
    }
    first_name
    last_name
  }
}
`)
