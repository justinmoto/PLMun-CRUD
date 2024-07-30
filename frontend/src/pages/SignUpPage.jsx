import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignUpPage = () => {
  const [values, setValues] = useState({
    clientname:'',
    clientemail:'',
    clientpassword:''
  })
  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/register', values)
    .then(res => {
      if(res.data.Status === 'Success') {
        navigate('/login')
      }else {
        alert("Error")
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div className=''>
      <div className='relative'>
        <img src="../../src/assets/plmun1.jpg" alt="" className='relative h-screen w-full brightness-[0.75]'/>
      </div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='space-y-5 backdrop-blur-[10px] shadow-2xl px-[5%] py-[3%] rounded-[20px] border-[0.5px] border-white border-opacity-30 bg-white bg-opacity-10'>
          <h1 className='text-[40px] font-extrabold text-white '>PL<span className='text-[#FCA311]'>Mun</span> Cho<span className='text-[#FCA311]'>rale.</span></h1>
          <h1 className='text-[35px] text-center font-bold text-white'>REGIS<span className='text-[#FCA311]'>TER</span></h1>
          <form onSubmit={handleRegister} className='space-y-5'>
            <div>
              <label className='block font-bold text-white'>Name<span className='text-[red]'> *</span></label>
              <input type="text" placeholder='example@gmail.com' 
              onChange={e => setValues({...values, clientname: e.target.value})}
              className='w-full p-2 ' />
            </div>
            <div>
              <label className='block font-bold text-white'>Email<span className='text-[red]'> *</span></label>
              <input type="text" placeholder='example@gmail.com' 
              onChange={e => setValues({...values, clientemail: e.target.value})}
              className='w-full p-2 ' />
            </div>
            <div>
              <label className='block font-bold text-white'>Password<span className='text-[red]'> *</span></label>
              <input type="password" placeholder='example@gmail.com' 
              onChange={e => setValues({...values, clientpassword: e.target.value})}
              className='w-full p-2 ' />
            </div>
            <div className='space-y-7'>
            <div>
              <label className='block font-bold text-white'>Confirm Password<span className='text-[red]'> *</span></label>
              <input type="password" placeholder='*************' className='w-full p-2' />
            </div>
              <button type="submit" className='text-black font-bold w-full bg-[#FCA311] p-2 rounded-[20px] '>LOGIN</button>
              <h1 className='text-center text-white'>Already have account? <Link to='/login' className='underline'>Sign in now</Link></h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage