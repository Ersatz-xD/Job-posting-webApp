import React, { useState } from 'react'

const SignupPage = () => {
  const [fullname, setFullname] = useState();
  

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='min-w-[540px] w-1/4 bg-[#badbee] rounded-2xl p-10 flex flex-col gap-10'>
        <h1 className='text-5xl'>Signup</h1>
        <div>
            <h3 className='text-2xl pb-1'>Full Name</h3>
            <input 
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            value = {fullname} className='bg-[whitesmoke] rounded w-full p-4' placeholder='full name' type="text" />
        </div>

        <div>
            <h3 className='text-2xl pb-1'>Email</h3>
            <input className='bg-[whitesmoke] rounded w-full p-4' placeholder='email' type="email" />
        </div>
        <div>
            <h3 className='text-2xl pb-1'>Password</h3>
            <input className='bg-[whitesmoke] rounded w-full p-4' placeholder='password' type="password" />
        </div>

        <button className='w-full bg-[#4abbf0] rounded-2xl py-4 px-10'>Login</button>
        </div>
      
    </div>
  )
}

export default SignupPage