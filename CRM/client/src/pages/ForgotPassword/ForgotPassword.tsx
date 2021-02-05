import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  // Local Functions
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
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

export default ForgotPassword;
