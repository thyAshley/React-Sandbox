import React, { useState } from "react";
import { FormEvent } from "react";

import "./Login.scss";

const Login = () => {
  // Local Variables
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<{ [key: string]: string }>({});

  // Local Functions
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setError({});
    console.log(error);
    if (!email) {
      console.log("...");
      setError((error) => {
        return {
          ...error,
          email: "Email cannot be null",
        };
      });
    }
    if (!password) {
      setError((error) => {
        return {
          ...error,
          password: "Password is cannot be null",
        };
      });
    }
  };

  return (
    <div className="w-3/4 h-auto p-5 m-5 bg-white login md:w-1/2 lg:w-1/3 rounded-3xl">
      <h1 className="text-4xl font-bold text-center text-green-400">Login</h1>
      {/* Form element */}
      <form className="form" onSubmit={onSubmitHandler}>
        <div>
          <div className="relative">
            <label htmlFor="email">Email Address</label>
            <input
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            {error?.email && <small>{error.email}</small>}
          </div>

          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className={error?.password ? "border-red-600" : ""}
            />
            {error?.password && <small>{error.password}</small>}
          </div>

          <input type="submit" value="Login" />
        </div>
      </form>

      <hr className="border-green-100" />
      {/* Forgot password link */}
      <p className="m-2 text-green-500">Forgot Password?</p>
    </div>
  );
};

export default Login;
