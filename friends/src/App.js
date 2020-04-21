import React from 'react';
import './App.css';
import Login from './components/Login'
import {Friends} from './components/Friends'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
          {/* component ==> history, match (params), location */}
          {/* <Route render={props => <GasPrices {...props} />} />
          <Route>
            <GasPrices />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}


export default App;
