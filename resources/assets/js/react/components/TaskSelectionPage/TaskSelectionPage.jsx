import React, { Component } from 'react';
import "./index.css";

const tasks = { edges: [
  { node: { id:"ASDF1", name:"Task Name 1", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF2", name:"Task Name 2", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF3", name:"Task Name 3", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF4", name:"Task Name 4", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF5", name:"Task Name 5", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF6", name:"Task Name 6", description:"I thinnk im doing sth" } },
]}

class TaskSelectionPage extends Component {

  constructor() {
    super();
    this.state = {
      enterNewTask:false,
      newTask:"",
    }
  }

  handleClickTask(e) {
    // console.log(e.target.value);
  }

  handleClickNewTask() {
    this.setState({ enterNewTask:true });
  }

  onEnterNewTask(e) {
    this.setState({ newTask:e.target.value })
  }

  handleSubmitNewTask(e) {
    e.preventDefault();
    // mutation here
  }

  render() {
    return (
      <div>
        <h1>Wha'cha working on? </h1>
        <div className="task-selector container-fluid">
          { tasks.edges.map( ({node}, key) =>
            <button value={node.id} key={key} onClick={this.handleClickTask.bind(this)}>{node.name}</button>
          )}
          {
            this.state.enterNewTask
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

export default TaskSelectionPage;
