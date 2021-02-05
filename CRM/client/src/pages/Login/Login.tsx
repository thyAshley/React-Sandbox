import React from "react";

import "./Login.scss";

const Login = () => {
  return (
    <div className="w-3/4 p-5 m-5 bg-white md:w-1/2 lg:w-1/3 rounded-3xl h-2/5">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <form className="form">
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            placeholder="Email"
            type="email"
            id="email"
            autoComplete="false"
          />

          <label htmlFor="password">Password</label>
          <input placeholder="Password" type="password" id="password" />

          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
