import React, { Component } from 'react';
import ButtonBox from './ButtonBox';
import "./index.css"

const teams = { edges: [
  { node: { id:"asdfasdfasdf", name:"The Avengers", description:"We do stuff" }},
  { node: { id:"asdfasdfasdf", name:"The Avengers", description:"We do stuff" }},
  { node: { id:"asdfasdfasdf", name:"The Avengers", description:"We do stuff" }},
  { node: { id:"asdfasdfasdf", name:"The Avengers", description:"We do stuff" }},
  { node: { id:"asdfasdfasdf", name:"The Avengers", description:"We do stuff" }},
  { node: { id:"asdfasdfasdf", name:"The Avengers", description:"We do stuff" }},
  { node: { id:"asdfasdfasdf", name:"The Avengers", description:"We do stuff" }},
  { node: { id:"asdfasdfasdf", name:"The Avengers", description:"We do stuff" }},
  { node: { id:"asdfasdfasdf", name:"The Avengers", description:"We do stuff" }},
]}

class TeamsPage extends Component {
  render() {

    return (
        <div>
            <h1>Your Teams</h1>
            <div className="row">
              { teams.edges.map( ({node}, key) => (
                <ButtonBox title={node.name} />
              ))}
              <ButtonBox title="New Team" />
            </div>
        </div>
    );
  }
}

export default TeamsPage;
