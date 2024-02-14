import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
     <h1 className='text-3xl font-semibold text-center text-gray-300'>Register
     <span className='text-blue-500'> ChatApp</span>
     </h1>
     <form >
        <div>
        <label className='label p-2' htmlFor="">
            <span className='text-base label-text'>Full Name</span>
        </label>
        <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10 ' />
        </div>
        <div>
        <label className='label p-2' htmlFor="">
            <span className='text-base label-text'>Username</span>
        </label>
        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10 ' />
        </div>
        <div>
        <label className='label p-2' htmlFor="">
            <span className='text-base label-text'>Password</span>
        </label>
        <input type="Password" placeholder='Enter password' className='w-full input input-bordered h-10 ' />
        </div>
        <div>
        <label className='label p-2' htmlFor="">
            <span className='text-base label-text'>Confirm password</span>
        </label>
        <input type="Password" placeholder='re-enter password' className='w-full input input-bordered h-10 ' />
        </div>
        <div>
        <label className='label p-2' htmlFor="">
            <span className='text-base label-text'>Gender</span>
        </label>
        <span className='flex flex-row justify-center items-center space-x-7 gap-2'><input type="radio" name="Gender" id="male" /> Male 
        <input type="radio" name="Gender" id="female" /> Female </span>
        </div>
        <hr className='m-4 bg-gray-400'/>
        <button className='btn btn-block btn-sm mt-2 bg-blue-700'>Register</button>
        <a href="#" className='text-sm hover:underline hover:text-blue-900 mt-2 inline-block'>{"Already"} have an account?</a>
     </form>
    </div>
    </div>
  )
}

export default Register
