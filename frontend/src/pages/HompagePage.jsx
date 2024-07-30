import React, { useEffect, useState, useNavigate } from 'react'
import {Link} from 'react-router-dom'
import { IoIosArrowUp } from "react-icons/io";
import Page1Homepage from '../components/HomepageComponents/Page1Homepage'
import Page2Homepage from '../components/HomepageComponents/Page2Homepage'
import Page3Homepage from '../components/HomepageComponents/Page3Homepage'
import Page4Homepage from '../components/HomepageComponents/Page4Homepage'
import FooterHomapge from '../components/HomepageComponents/FooterHomapge'
import axios from 'axios'
import ProfilePage from '../components/HomepageComponents/ProfilePage';
const HompagePage = () => {
  const [auth, setAuth] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  axios.defaults.withCredentials = true;
    useEffect(() => {
      axios.get('http://localhost:4000/')
      .then(res => {
        if(res.data.Status === 'Success') {
          setAuth(true)
          setName(res.data.name)
          console.log(res.data.name)
        }else {
          setAuth(false)
          setMessage(res.data.Error)
          console.log(res.data.Error)
        }
      })
      .catch(err => console.log(err))
    },[])
    const handleDelete = () => {
      axios.get('http://localhost:4000/logout')
      .then(res => {
        location.reload(true)
      }).catch(err => console.log(err))
    }
  return (
    <div className='relative'>
      {auth ?
      <div>
        <div>
          <button onClick={handleDelete}>LOGOUT {name}</button>
        </div>
        <Page1Homepage/>
        <Page2Homepage/>
        <Page3Homepage/>
        <Page4Homepage/>
        <FooterHomapge/>
      </div>
        :
        <div>
        <Link to='/'>Click</Link>
        </div>
    }

      <div className='absolute'>
        <a href='#home'><IoIosArrowUp className='fixed top-[80%] left-[95%] border-4 border-[#FCA311] rounded-full p-2 text-[60px] text-[#FCA311]'/></a>
      </div>
    </div>
  )
}

export default HompagePage
