import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import styles from "./components/friends.module.css";
import LoginForm from "./components/LoginForm";
import Friends from "./components/Friends";

function App() {
  return (
    <div className='App'>
      <ul className={styles.listParent}>
        <li className={styles.link}>
          <Link className={styles.link} to='/login'>
            Login
          </Link>
        </li>

        <li className={styles.link}>
          <Link className={styles.link} to='/protected'>
            Protected-Page
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/login' component={LoginForm} />

        <PrivateRoute path='/protected' component={Friends} />

        <Route component={LoginForm} />
      </Switch>
      {/* Switch to protected route*/}
    </div>
  );
}

export default App;
