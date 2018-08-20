import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './screens';
import './App.css';
import { serverUrl, authUri, authRedirect, authClientId } from './config';
import { setAccessToken } from './environment';

class App extends Component {

  constructor() {
    super();
    // FIXME: WTAF why is it giving me a hash sign instead of question mark for search params
    const searchParams = (new URL( window.location.href.replace("#","?") )).searchParams;
    const token = searchParams.get("access_token") || this.authorize();
    setAccessToken(token);

    this.state = {
      isAuthenticated: !!token,
      token,
    }
  }

  authorize() {
    const url = new URL(authUri, serverUrl)
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
      <Router>
        <div>
          <Route path="/" exact component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
