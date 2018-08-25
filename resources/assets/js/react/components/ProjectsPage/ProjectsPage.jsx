import React, { Component } from 'react';
import "./index.css";
import { QueryRenderer } from '../../lib';
import { graphql } from 'react-relay';
import { createClient, createDivision, createProject } from '../../mutations';

class ProjectsPage extends Component {

  constructor() {
    super();
    this.state = {
      newClientInputVisible:false,
      newClientField:"",
      newDivisionInputVisible:null,
      newDivisionField:"",
      newProjectInputVisible:null,
      newProjectField:"",
    }
  }

  handleClickProject(id) {
    this.props.appState.setProjectId(id);
    this.props.history.push("/");
  }

  handleClickNewClient() {
    this.setState({newClientInputVisible:true})
  }

  handleSubmitNewClient(e) {
    e.preventDefault();
    const { teamId } = this.props.appState;
    this.setState({newClientInputVisible:false})
    createClient({ name:this.state.newClientField, team_id:teamId, description:"" }, teamId)
  }

  handleInputNewClient(e) {
    this.setState({newClientField:e.target.value});
  }

  handleClickNewDivision(id) {
    this.setState({newDivisionInputVisible:id})
  }

  handleSubmitNewDivision(e, id) {
    e.preventDefault();
    this.setState({newDivisionInputVisible:false})
    createDivision({ name: this.state.newDivisionField, client_id:id, description:"" }, id)
  }

  handleInputNewDivision(e) {
    this.setState({newDivisionField:e.target.value});
  }

  handleClickNewProject(id) {
    this.setState({newProjectInputVisible:id})
  }

  handleSubmitNewProject(e, id) {
    e.preventDefault();
    this.setState({newProjectInputVisible:false})
    createProject({ name: this.state.newProjectField, division_id:id, description:"" }, id)
  }

  handleInputNewProject(e) {
    this.setState({newProjectField:e.target.value});
  }

  render() {

    const { newClientInputVisible, newDivisionInputVisible, newProjectInputVisible } = this.state;
    return (
      <div>
        <h1>My Projects</h1>
        <div className="clients-container">
          {this.props.team.clients.edges.map( ({node}, key) =>
            <div className = "client-display" key={key}>
              <p className="vertical-text">Client: {node.name}</p>
              <br/>
              {node.divisions && node.divisions.edges.map( ({node}, key) =>
                <div className="division-display" key={key}>
                  <p >Division: {node.name}</p>
                  { node.projects && node.projects.edges.map( ({node}, key) =>
                    <div className="project-display" key={key}>
                      <button onClick={() => this.handleClickProject(node.id)}>{node.name}</button>
                    </div>
                  )}
                  { 
                    newProjectInputVisible === node.id
                    ? (<form onSubmit={e => this.handleSubmitNewProject(e, node.id)}>
                      <input onChange={this.handleInputNewProject.bind(this)} placeholder="New Project Name"/>
                      <button onClick={e => this.handleSubmitNewProject(e, node.id)}>+</button>
                    </form>)
                    : <button onClick={_ => this.handleClickNewProject(node.id)} >+ Proj</button>
                  }
                </div>
              )}
              { 
                newDivisionInputVisible === node.id
                ? (<form onSubmit={e => this.handleSubmitNewDivision(e, node.id)}>
                  <input onChange={this.handleInputNewDivision.bind(this)} placeholder="New Division Name"/>
                  <button onClick={e => this.handleSubmitNewDivision(e, node.id)}>+</button>
                </form>)
                : <button onClick={_ => this.handleClickNewDivision(node.id)} >New Division</button>
              }
            </div>
          )}
          { 
            newClientInputVisible 
            ? <form>
              <input onChange={this.handleInputNewClient.bind(this)} placeholder="New Client Name"/>
              <button onClick={this.handleSubmitNewClient.bind(this)}>+</button>
            </form>
            : <button onClick={this.handleClickNewClient.bind(this)} >New Client</button>
          }
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
`, props => ({
    id: props.appState.teamId
  }));
