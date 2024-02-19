import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const {loading,login} = useLogin();

  const handleSumbit = async (e)=>{
    e.preventDefault();
    await login(userName,password);
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSumbit}>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 "
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 "
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <hr className="m-4 bg-gray-400" />
          <button className="btn btn-block btn-sm mt-2 bg-blue-700" disabled={loading}>
            Login
          </button>
          <Link
            to="/register"
            className="text-sm hover:underline hover:text-blue-900 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
