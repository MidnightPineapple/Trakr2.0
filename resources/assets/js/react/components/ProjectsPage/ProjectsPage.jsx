import React, { Component } from 'react';
import "./index.css";

const clients = { edges: [
  { node: { id:"asdf", name: "Harley Quinn Co.", description: "Buys stuff", divisions: {
    edges: [
      { node: { id:"asdf",name:"Well To Do Division", description: "Hi we do stuff", projects:{
        edges: [
          { node: { id:"asdf",name: "PROJ1", description: "better finish this on time" }},
          { node: { id:"asdf",name: "PROJ2", description: "I actually have a ridiculous amount to do" }},
        ]
      } }}
    ]
  }}},
  { node: { id:"asdf",name: "Harley Quinn Co.", description: "Buys stuff", divisions: {
    edges: [
      { node: { id:"asdf",name:"Well To Do Division", description: "Hi we do stuff", projects:{
        edges: [
          { node: {id:"asdf", name: "PROJ1", description: "better finish this on time" }},
          { node: {id:"asdf", name: "PROJ2", description: "I actually have a ridiculous amount to do" }},
        ]
      } }}
    ]
  }}}
]}

class ProjectsPage extends Component {

  render() {
    return (
      <div>
        <h1>My Projects</h1>
        <div className="clients-container">
          {clients.edges.map( ({node}, key) =>
            <div className = "client-display" key={key}>
              <p>{node.name}</p>
              {node.divisions.edges.map( ({node}, key) =>
                <div className="division-display" key={key}>
                  <p>{node.name}</p>
                  {node.projects.edges.map( ({node}, key) =>
                    <div className="project-display" key={key}>
                      <h3>{node.name}</h3>
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


export default ProjectsPage;
