import React, { Component } from 'react';
import './App.css';
import { serverUrl, authUri, authRedirect, authClientId } from './config';
import { setAccessToken } from './environment';
import Router from './Router';

export default class App extends Component {

  constructor() {
    super();
    // FIXME: WTAF why is it giving me a hash sign instead of question mark for search params
    const searchParams = (new URL( window.location.href.replace("#","?") )).searchParams;
    const token = searchParams.get("access_token") || this.authorize();
    setAccessToken(token);
    this.state = {
      isAuthenticated: !!token,
      token,
      appState:{
        teamId:null,
        projectId:null,
        taskId:null,
      }
    }

    this.state.appState.setTeamId = this.setTeamId.bind(this);
    this.state.appState.setProjectId = this.setProjectId.bind(this);
    this.state.appState.setTaskId = this.setTaskId.bind(this);
  }

  setTeamId(id){
    const newState = Object.assign({}, this.state.appState)
    newState.teamId = id;
    newState.projectId = null;
    newState.taskId = null;
    this.setState({appState: newState})
  }

  setProjectId(id){
    const newState = Object.assign({}, this.state.appState)
    newState.projectId = id;
    newState.taskId = null;
    this.setState({appState: newState})
  }

  setTaskId(id){
    const newState = Object.assign({}, this.state.appState)
    newState.taskId = id;
    this.setState({appState: newState})
  }

  authorize() {
    const url = new URL(authUri, window.location.host)
    url.searchParams.set('client_id', authClientId);
    url.searchParams.set('redirect_uri', authRedirect);
    url.searchParams.set('response_type', "token");
    url.searchParams.set('scope', "");
    window.location.replace(url.toString());
  }

  render() { 

    const { isAuthenticated } = this.state;

    if(!isAuthenticated) return <div>Please Log in</div>

    return (
      <Router appState={this.state.appState} />
    );
  }
}

