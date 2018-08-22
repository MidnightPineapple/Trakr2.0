import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Dashboard, TeamsPage, ProjectsPage, TaskSelectionPage } from './components';

export default class Router extends Component {

  render() {

    const { appState } = this.props;

    return (
      <BrowserRouter>
        <div className="container" >
            <Route path="/" exact render={props => <Redirecter {...props} appState={appState} /> } />
            <Route path="/dashboard" render={props => <Dashboard {...props} appState={appState} /> } />
            <Route path="/teams" render={props => <TeamsPage {...props} appState={appState} />} />
            <Route path="/projects" render={props => <ProjectsPage {...props} appState={appState} />} />
            <Route path="/tasks" render={props => <TaskSelectionPage {...props} appState={appState}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

class Redirecter extends Component {
  render() {
    const { appState } = this.props; 
    if(!appState.teamId) return <Redirect to={{ pathname:"/teams" }} />
    if(!appState.projectId) return <Redirect to={{ pathname:"/projects" }} />
    if(!appState.taskId) return <Redirect to={{ pathname:"/tasks" }} />
    return <Redirect to={{ pathname:"/dashboard" }} />
  }
}