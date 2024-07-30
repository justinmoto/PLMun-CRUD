import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [values, setValues] = useState({
    clientemail: '',
    clientpassword: ''
  })
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleLogin = (event) => {
    event.preventDefault()
    axios.post('http://localhost:4000/logins', values)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/homepage')
        } else {
          alert("Error: " + res.data.Error)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='relative h-screen'>
      <div className='absolute inset-0'>
        <img src="../../src/assets/plmun1.jpg" alt="Background" className='h-full w-full object-cover brightness-[0.75]' />
      </div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='space-y-7 backdrop-blur-[10px] shadow-2xl px-10 py-8 rounded-2xl border border-white border-opacity-30 bg-white bg-opacity-10'>
          <h1 className='text-4xl font-extrabold text-white'>PL<span className='text-[#FCA311]'>Mun</span> Cho<span className='text-[#FCA311]'>rale.</span></h1>
          <h1 className='text-3xl text-center font-bold text-white'>LOG<span className='text-[#FCA311]'>IN</span></h1>
          <form className='space-y-5' onSubmit={handleLogin}>
            <div>
              <label className='block font-bold text-white' htmlFor="email">Username</label>
              <input 
                type="text" 
                id="email" 
                placeholder='example@gmail.com' 
                aria-label="Email" 
                onChange={e => setValues({ ...values, clientemail: e.target.value })}
                className='w-full p-2 rounded bg-white bg-opacity-80' 
              />
            </div>
            <div>
              <label className='block font-bold text-white' htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder='*************' 
                aria-label="Password" 
                onChange={e => setValues({ ...values, clientpassword: e.target.value })}
                className='w-full p-2 rounded bg-white bg-opacity-80' 
              />
            </div>
            <div className='text-right'>
              <Link to='/forgotpassword' className='underline text-white'>Forgot Password?</Link>
            </div>
            <button 
              type="submit" 
              className='text-black font-bold w-full bg-[#FCA311] p-2 rounded-2xl'>
              LOGIN
            </button>
            <h1 className='text-center text-white'>Don’t have an account yet? <Link to='/signup' className='underline'>Sign up here</Link></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
