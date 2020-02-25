import React, { useState } from "react";

const LoginForm = props => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const userLogin = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={userLogin}>
        <label htmlFor='User'>
          <input
            onChange={handleChange}
            id='User'
            name='userName'
            type='text'
            placeholder='User-Name'
            autoComplete='off'
            value={user.userName}
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
