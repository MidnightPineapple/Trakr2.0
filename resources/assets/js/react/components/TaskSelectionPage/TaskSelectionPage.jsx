import React, { Component } from 'react';
import "./index.css";
import { QueryRenderer } from '../../lib';
import { graphql } from 'react-relay';
import { createTask } from '../../mutations';

class TaskSelectionPage extends Component {

  constructor() {
    super();
    this.state = {
      newTask:"",
      showNewTaskEntry:false
    }
  }

  handleClickTask(id) {
    this.props.appState.setTaskId(id);
    this.props.history.push("/")
  }

  handleClickNewTask() {
    this.setState({ showNewTaskEntry:true });
  }

  onEnterNewTask(e) {
    this.setState({ newTask:e.target.value })
  }

  handleSubmitNewTask(e) {
    e.preventDefault();
    const { projectId } = this.props.appState;
    createTask({ name:this.state.newTask, project_id:projectId}, projectId)
    .then(this.setState({ showNewTaskEntry:false, newTask:""}))
  }

  render() {
    return (
      <div>
        <h1>Wha'cha working on? </h1>
        <div className="task-selector container-fluid">
          { this.props.project.tasks.edges.map( ({node}, key) =>
            <button value={node.id} key={key} onClick={() => this.handleClickTask(node.id)}>{node.name}</button>
          )}
          {
            this.state.showNewTaskEntry
            ? (
              <form onSubmit={this.handleSubmitNewTask.bind(this)}>
                <input placeholder="New Task Name" onChange={this.onEnterNewTask.bind(this)} />
                <button onClick={this.handleSubmitNewTask.bind(this)}>+</button>
              </form>
            )
            : <button onClick={this.handleClickNewTask.bind(this)}>New Task</button>
          }
        </div>
      </div>
    )
  }

}

export default QueryRenderer(TaskSelectionPage, graphql`
query TaskSelectionPageAllQuery($id: ID!) {
 project(id:$id) {
   tasks( last:100 ) @connection(key:"TaskSelectionPage_tasks", filters:[]) {
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
`, props => ({ id: props.appState.projectId }));
