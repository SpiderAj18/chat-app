import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../Hooks/useSignup";

const Register = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const {loading, signup}=useSignup()
  const handleSubmit= async (e)=>{
    e.preventDefault();
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Register
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 "
              value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 "
              value={inputs.userName}
              onChange={(e)=>setInputs({...inputs,userName:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="Password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 "
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs,password:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input
              type="Password"
              placeholder="re-enter password"
              className="w-full input input-bordered h-10 "
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Gender</span>
            </label>
            <span className="flex flex-row justify-center items-center space-x-7 gap-2">
              <input
               type="radio" 
               name="Gender" 
               value="male"
               checked={inputs.gender==="male"} 
               onChange={(e)=>setInputs({...inputs,gender:e.target.value})} /> Male
              <input type="radio" name="Gender" value="female" 
              checked={inputs.gender==="female"} 
              onChange={(e)=>setInputs({...inputs,gender:e.target.value})}/> Female{" "}
              
            </span>
          </div>
          <hr className="m-4 bg-gray-400" />
          <button className="btn btn-block btn-sm mt-2 bg-blue-700">
            Register
          </button>
          <Link
            to="/login"
            className="text-sm text-gray-400 hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            {"Already"} have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
