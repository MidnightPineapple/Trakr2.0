import React, { Component } from 'react';
import ButtonBox from './ButtonBox';
import "./index.css"
import { QueryRenderer } from '../../lib';
import { graphql } from 'react-relay';
import { redeemInvitation, createTeam, createInvitation } from '../../mutations';

class TeamsPage extends Component {

  constructor () {
    super();
    this.state = {
      newTeamEntryVisible:false,
      newTeamName: "",
      teamInvitationCode:"",
      invitationsVisible:false,
    };
  }

  setTeam(id) {
    this.props.appState.setTeamId(id)
    this.props.history.push("/")
  }

  handleClickNewTeam() {
    this.setState({ newTeamEntryVisible: true});
  }

  handleInputNewTeam(e) {
    this.setState({ newTeamName: e.target.value });
  }

  handleInputInvitationCode(e) {
    this.setState({ teamInvitationCode: e.target.value });
  }

  handleSubmitNewTeam(e) {
    e.preventDefault();
    createTeam({ name:this.state.newTeamName }, this.props.viewer.id);
  }

  handleSubmitInvitation(e) {
    e.preventDefault();
    redeemInvitation(this.state.teamInvitationCode, this.props.viewer.id);
  }

  showInvitations({ id, invitations }) {
    if(invitations.edges.length!==0) {
      this.setState({invitationsVisible:id});
      return
    }
    createInvitation(id,id).then( _ => this.setState({ invitationsVisible:id}))
  }

  render() {

    const { teams } = this.props.viewer;
    const { newTeamEntryVisible, newTeamName, teamInvitationCode } = this.state;
    
    return (
      <div>
          <h1>Your Teams</h1>
          <div className="row">
            { teams.edges.map( ({node}, key) => (
              <div key={key} className="col-md-6 col-lg-3">
                <ButtonBox title={node.name} teamId={node.id} onClick={() => this.setTeam(node.id)} />
                { this.state.invitationsVisible === node.id 
                  ? <ul>{[
                    <p>Please provide one of the following codes to a team member.</p>,
                    ...node.invitations.edges.map( ({node}, k) => <li key={k}>{node.token}</li> )
                  ]}</ul>
                  : <button onClick={() => this.showInvitations(node)}>Invite Users</button>}
              </div>
            ))}
            {
              newTeamEntryVisible 
              ? <div className="new-team-input">
                  <form>
                    <input value={newTeamName} onChange={this.handleInputNewTeam.bind(this)} placeholder="New Team Name" />
                    <button onClick={this.handleSubmitNewTeam.bind(this)}>+</button>
                  </form>
                  <form>
                    <input value={teamInvitationCode} onChange={this.handleInputInvitationCode.bind(this)} placeholder="Team Invitation Code" />
                    <button onClick={this.handleSubmitInvitation.bind(this)}>+</button>
                  </form>
                </div>
              : <ButtonBox title="New Team / Join Team" onClick = { this.handleClickNewTeam.bind(this) } />
            }
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
