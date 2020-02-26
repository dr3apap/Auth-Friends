import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import styles from "./components/friends.module.css";
import LoginForm from "./components/LoginForm";
import Friends from "./components/Friends";

function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>

        <li>
          <Link to='protected'>Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path='/protected' component={Friends} />

        <Route path='/login' component={LoginForm} />

        <Route component={LoginForm} />
      </Switch>
      {/* Switch to protected route*/}
    </div>
  );
}

export default App;
