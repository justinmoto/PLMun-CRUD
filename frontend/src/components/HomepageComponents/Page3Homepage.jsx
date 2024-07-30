import {useState, useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const Page3Homepage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [talentfee, setTalentfee] = useState('')
  const [typeofevents, setTypeOfEvents] = useState('')
  const navigate = useNavigate()
  
  const handleConfirm = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/homepage', {name,email,mobile,typeofevents,date,time,location,talentfee})
    .then(res => {
      console.log(res);
      navigate('/profile')
    }).catch(err => console.log(err))
  }
  return (
    <div className='relative '>
      <div className=''>
        <img id='book' src="../../src/assets/plmun1.jpg" alt="" className='h-screen w-screen brightness-50'/>
      </div>

      <div className='absolute inset-0 backdrop-blur-[5px] flex items-center justify-center'>
        <div className='flex flex-col items-center '>
            <div className=''>
              <h1 className='text-center text-white text-[40px] font-extrabold'>Ma<span className='text-[#FCA311]'>ke</span> an Appoint<span className='text-[#FCA311]'>ment</span></h1>
              <h1 className='text-center text-white text-[20px] px-[20%] mt-5'>
              By  filling out the form, you automatically make an appoinment with the PLMun Chorale. A reminder will be sent to the specified contact.
              </h1>
            </div>

            <form onSubmit={handleConfirm} className='space-y-10 mt-10'>
              <div>
                <label className='block font-bold text-white'>Name<span className='text-[red]'> *</span></label>
                <input type="text" placeholder='Ex. Juan Dela Cruz' className='w-full p-2'
                onChange={e => setName(e.target.value)}/>
              </div>

              <div className='grid grid-cols-2 space-x-5'>
                <div>
                  <label className='block font-bold text-white'>Email<span className='text-[red]'> *</span></label>
                  <input type="text" placeholder='example@gmail.com' className='w-full p-2'
                  onChange={e => setEmail(e.target.value)}/>
                </div>

                <div>
                  <label className='block font-bold text-white'>Contact Number<span className='text-[red]'> *</span></label>
                  <input type="text" placeholder='+639999117551' className='w-full p-2'
                  onChange={e => setMobile(e.target.value)}/>
                </div>
              </div>

              <div>
              <label className='block font-bold text-white'>Type of Events<span className='text-[red]'> *</span></label>
              <input type="text" placeholder='Specify the event' className='w-full p-2'
              onChange={e => setTypeOfEvents(e.target.value)}/>
              </div>

              <div className='grid grid-cols-2 space-x-5'>
                <div>
                  <label className='block font-bold text-white'>Date<span className='text-[red]'> *</span></label>
                  <input type="date" placeholder='example@gmail.com' className='w-full p-2'
                  onChange={e => setDate(e.target.value)}/>
                </div>

                <div>
                  <label className='block font-bold text-white'>Time<span className='text-[red]'> *</span></label>
                  <input type="time" placeholder='+639999117551' className='w-full p-2'
                  onChange={e => setTime(e.target.value)}/>
                </div>
              </div>

              <div className='grid grid-cols-2 space-x-5'>
                <div>
                  <label className='block font-bold text-white'>Location<span className='text-[red]'> *</span></label>
                  <input type="text" placeholder='Alabang, Festival' className='w-full p-2'
                  onChange={e => setLocation(e.target.value)}/>
                </div>

                <div>
                  <label className='block font-bold text-white'>Talent Fee</label>
                  <input type="number" placeholder='P1 - P1000000' className='w-full p-2'
                  onChange={e => setTalentfee(e.target.value)}/>
                </div>
              </div>

              <div className='text-center  mt-7 '>
                <button type='submit' className='text-black font-bold border-2 border-black p-2 w-[60%] rounded-[10px] bg-[#FCA311]'>CONFIRM</button>
              </div>
            </form>

            <h1 className='text-center text-white text-[15px] px-[20%] mt-10'>
              <span className='text-[red]'> *</span>Your privacy is important to us; we ensure that all personal information collected on this website is handled in accordance with the Data Privacy Act, and is kept secure and confidential.
            </h1>
          </div>
      </div>
  
    </div>
    
  )
}

export default Page3Homepage;
