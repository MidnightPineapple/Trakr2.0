import React, { Component } from 'react';
import "./index.css"

const tasks = { edges: [
  { node: { id:"ASDF1", name:"Task Name 1", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF2", name:"Task Name 2", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF3", name:"Task Name 3", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF4", name:"Task Name 4", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF5", name:"Task Name 5", description:"I thinnk im doing sth" } },
  { node: { id:"ASDF6", name:"Task Name 6", description:"I thinnk im doing sth" } },
]}

const entries = { edges: [
  { node: { id: "ASDFFDSA", task:{ name:"Task 1", id:"asdfadsfawefsdf" }, project:"Proj 1", completed_at:Date.now()-10000, description:"Ipsum Lorem"}},
  { node: { id: "ASDFFDSA", task:{ name:"Task 2", id:"asdfadsfawefsdf" }, project:"Proj 1", completed_at:Date.now()-10000, description:"Ipsum Lorem"}},
  { node: { id: "ASDFFDSA", task:{ name:"Task 3", id:"asdfadsfawefsdf" }, project:"Proj 1", completed_at:Date.now()-10000, description:"Ipsum Lorem"}},
  { node: { id: "ASDFFDSA", task:{ name:"Task 4", id:"asdfadsfawefsdf" }, project:"Proj 1", completed_at:Date.now()-10000, description:"Ipsum Lorem"}},
  { node: { id: "ASDFFDSA", task:{ name:"Task 5", id:"asdfadsfawefsdf" }, project:"Proj 1", completed_at:Date.now()-10000, description:"Ipsum Lorem"}},
]}

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      currentTask:tasks.edges[0].node.id
    }
  }

  handleChangeTask(event) {
    console.log(event.target.value)
    this.setState({currentTask:event.target.value})
  }

  render() {

    return (
        <div>
            <div className="lead">
              ProjectName / TeamName
            </div>
            <div className="row tasks">
              <div className="col-sm-4">
                <button className="entry-submit">&#9654;</button>
              </div>
              <select multiple set={1} onChange={this.handleChangeTask.bind(this)} className="col-sm-8 tasks-display">
                {tasks.edges.map( ({node}, key) => (
                  <option value={node.id} key={key}>{node.name}</option>
                ))}
                <option value="new">New Task</option>
              </select>
            </div>
            <table className="container-fluid">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Completed At</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {entries.edges.map( ({node}, key) => {
                  const completedAt = new Date(node.completed_at)
                  return (
                  <tr key={key}>
                    <td>{node.task.name}</td>
                    <td>
                      {
                        completedAt.getMonth()
                      }/{
                        completedAt.getDate()
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

export default Dashboard;
