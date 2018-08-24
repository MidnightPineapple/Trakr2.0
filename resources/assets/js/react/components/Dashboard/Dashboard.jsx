import React, { Component } from 'react';
import "./index.css"
import { QueryRenderer } from '../../lib';
import { graphql } from 'react-relay';
import { Link } from "react-router-dom";

class Dashboard extends Component {

  constructor() {
    super();
    
    this.state = {
      newTaskInputVisible:false,
      newTaskName:"",
    }
  }

  handleChangeTask(event) {
    this.props.appState.setTaskId(event.target.value);
  }

  handleClickNewTask() {
    this.setState({newTaskInputVisible:true})
  }

  handleInputNewTask(e) {
    this.setState({newTaskName:e.target.value})
  }

  handleSubmitNewTask() {
    // new task mutation here
  }

  render() {

    const entries = this.props.project.tasks.edges.map( ({node}) => node.entries.edges )
    .reduce((ag, v) => [...ag, ...v] , [])
    .sort( (e1,e2) => {
      if(e1.completed_at > e2.completed_at) return -1;
      if(e1.completed_at < e2.completed_at) return 1;
      return 0;
    })

    return (
        <div>
            <div className="lead">
              <Link to="/projects">ChangeProject</Link> / <Link to="/teams"> ChangeTeam </Link>
            </div>
            <div className="row tasks">
              <div className="col-sm-4">
                <button className="entry-submit">&#9654;</button>
              </div>
              <div className="col-sm-8 tasks-display">
                <select multiple set={1} onChange={this.handleChangeTask.bind(this)}>
                  {this.props.project.tasks.edges.map( ({node}, key) => (
                    <option value={node.id} key={key}>{node.name}</option>
                  ))}
                </select>
                {
                  this.state.newTaskInputVisible
                  ? (
                    <div>
                      <input onChange={this.handleInputNewTask.bind(this)} value={this.state.newTaskName} placeholder="New Task Name" />
                      <button onClick={this.handleSubmitNewTask.bind(this)}>+</button>
                    </div>
                  )
                  : <button onClick={this.handleClickNewTask.bind(this)}>New Task</button>
                }
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Completed At</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {entries.map( ({node}, key) => {
                  const completedAt = new Date(parseInt(node.completed_at)*1000)
                  return (
                  <tr key={key}>
                    <td>{node.task.name}</td>
                    <td>
                      {
                        completedAt.getMonth()+1
                      }/{
                        completedAt.getDate()
                      }/{
                        (""+completedAt.getFullYear()).slice(2)
                      } @ {
                        completedAt.getHours()
                      }:{
                        completedAt.getMinutes() >= 10
                        ? completedAt.getMinutes()
                        : "0"+ completedAt.getMinutes()
                      }
                    </td>
                    <td>{node.description}</td>
                  </tr>
                )})}
              </tbody>
            </table>
        </div>
    );
  }
}

export default QueryRenderer(Dashboard, graphql`
query DashboardAllQuery($projectId:ID!) {
  project(id:$projectId) {
    tasks(last:100) @connection(key:"Dashboard_tasks", filters:[]) {
      edges {
        node {
          id
          name
          description
          entries(last:100) @connection(key:"Dashboard_entries", filters:[]) {
            edges {
              node {
                id 
                description
                completed_at(getter:"timestamp")
                task {
                  name
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
`, props => ({projectId:props.appState.projectId}));
