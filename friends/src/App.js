import React from 'react';
import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/api/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
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
