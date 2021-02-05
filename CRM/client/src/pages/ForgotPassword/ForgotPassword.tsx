import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ForgotPassword.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  // Local Functions
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-3/4 h-auto p-5 m-5 bg-white login md:w-1/2 lg:w-1/3 rounded-3xl">
      <h1 className="text-4xl font-bold text-center text-green-400">
        Forgot Password
      </h1>
      {/* Form element */}
      <form className="form" onSubmit={onSubmitHandler}>
        <div>
          <div className="relative">
            <label htmlFor="email">Enter Email</label>
            <input
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

          <input type="submit" value="Reset Password" />
        </div>
      </form>

      <hr className="border-green-100" />
      {/* Forgot password link */}
      <Link to="/">
        <p className="m-2 text-green-500">Log in</p>
      </Link>
    </div>
  );
};

export default ForgotPassword;
