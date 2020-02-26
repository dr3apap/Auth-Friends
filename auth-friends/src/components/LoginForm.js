import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styles from "./friends.module.css";

const LoginForm = props => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const userLogin = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", user)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);

        console.log("The response:", res);
      })
      .catch(err => {
        console.log("the data", err.message);
      });
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Friend's Login</h1>
      <form onSubmit={userLogin}>
        <label htmlFor='User'>
          <input
            onChange={handleChange}
            id='User'
            name='username'
            type='text'
            placeholder='User-Name'
            autoComplete='off'
            value={user.username}
          />
        </label>

        <label>
          <input
            onChange={handleChange}
            id='Password'
            type='Password'
            name='password'
            placeholder='Password'
            autoComplete='off'
            value={user.password}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
