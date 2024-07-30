import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FaUserCircle,FaCalendarAlt } from "react-icons/fa";
import { FaArrowLeftLong,FaLocationDot,FaPesoSign } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdOutlineKeyboardDoubleArrowRight,MdEventSeat } from "react-icons/md";
import EditProfileModal from '../Modals/EditProfileModal';
import AppointmentMoreModal from '../Modals/AppointmentMoreModal';
import axios from 'axios'

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const period = hours < 12 ? 'AM' : 'PM'; // Determine AM/PM
  return `${formattedHours}:${minutes} ${period}`;
}

const ProfilePage = () => {
  const [handleUpdate, setIsHandleUpdate] = useState(false)
  
  const handleEditButton = () => {
    setIsHandleUpdate(!handleUpdate)
  }

  const [handleSeeMore, setIsHandleSeeMore] = useState(false)

  const [booking, setBooking] = useState([])
  const handleSeeMoreButton = (profileid) => {
    axios.get('http://localhost:4000/booking/'+ profileid)
    .then(res => setBooking(res.data))
    .catch(err => console.log(err))
    setIsHandleSeeMore(!handleSeeMore)
  }

  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/')
    .then(res => setBookings(res.data))
    .catch(err => console.log(err))

  },[])
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
    
    <div>
      <div className='p-10'>
        <Link to='/homepage'><FaArrowLeftLong className='text-[30px] text-[#FCA311]'/></Link>
      </div>

      <div className='grid grid-cols-2 py-8 px-[5%]'>
        <div className='flex items-center'>
          <FaUserCircle className='text-[130px] text-[#FCA311]'/>
          <div className='ml-10'>
            <h1 className='text-[30px] font-bold'>Justin Mark Agustin</h1> 
            <h1 className='font-medium flex items-center gap-3'><MdEmail/>justinmark134@gmail.com</h1>
            <h1 className='font-medium flex items-center gap-2'><FaPhone/>+639999117551</h1>
          </div>
        </div>

        <div className='flex items-center justify-end'>
          <button onClick={handleEditButton} className='font-bold text-[20px] p-1 px-5 rounded-[5px] bg-[#FCA311]'>EDIT</button>
        </div>
      </div>
      <hr className='bg-[#14213D] h-1'></hr>

      <div className='mt-10 px-[5%]'>
        <h1 className='text-[35px] font-bold'>About</h1>
        <p className='text-[20px] px-[3%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
      </div>

      <div className='mt-10 px-[5%]'>

      <div className="overflow-x-auto">
      <h1 className='text-[35px] font-bold'>Appointments</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full border-b">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Contact #</th>
              <th className="py-3 px-4 text-left">Type of Event</th>
              <th className="py-3 px-4 text-left">Date & Time</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Talent Fee</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((data, i) => (
              <tr key={i} className="w-full border-b border-gray-200">
                <td className="py-3 px-4">{data.Name}</td>
                <td className="py-3 px-4">{data.Mobile}</td>
                <td className="py-3 px-4">{data.TypeOfEvents}</td>
                <td className="py-3 px-4">{new Date(data.Date).toLocaleDateString()} & {formatTime(data.Time)}</td>
                <td className="py-3 px-4">{data.Location}</td>
                <td className="py-3 px-4">{data.TalentFee}</td>
                <td className="py-3 px-4">                
                  <div className='flex items-start '>
                      <MdOutlineKeyboardDoubleArrowRight onClick={() => handleSeeMoreButton(data.ID)} className='text-[35px] text-[#FCA311] hover:rounded-full hover:bg-[#14213D] hover:p-2 duration-200 cursor-pointer'/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </div>
      {/* //Profile Edit */}
      <EditProfileModal isOpen={handleUpdate} onClose={handleEditButton} className=''>
        <form className='flex flex-col'>
          <div className='space-y-5'>
            <h1 className='text-center text-[25px] font-extrabold'>Edit Profile Details</h1>

            <div>
              <label>Name</label>
              <input type="text" className='block p-2 w-full'/>
            </div>

            <div>
              <label>Email</label>
              <input type="text"  className='block p-2 w-full'/>
            </div>
            
            <div>
              <label>Contact Number</label>
              <input type="text"  className='block p-2 w-full'/>
            </div>
          </div>
          <div className='flex justify-center'>
            <button type='submit' className='mt-6 p-2 bg-[#FCA311] w-[70%] rounded-[15px] text-black font-bold'>Submit</button>
          </div>
        </form>
      </EditProfileModal>

      
      <AppointmentMoreModal isOpen={handleSeeMore} onClose={handleSeeMoreButton}>
        <div className='space-y-7 mb-4'>
          <div className='border-2 border-black w-[50%] flex items-center justify-center rounded-[15px] bg-[#FCA311]'>
            <h1 className='font-bold'>Pending</h1>
          </div>

          <div className='flex items-center'>
            <FaUserCircle className='text-[30px] text-[#FCA311]'/>
            <div className='ml-4'>
              <h1 className='text-[15px] font-bold'>{booking.Name}</h1>
              <h1 className='font-medium flex items-center gap-2'>{booking.Mobile}</h1>
            </div>
          </div>

          <div className='flex items-center'>
            <FaCalendarAlt className='text-[30px] text-[#FCA311]'/>
            <div className='ml-4'>
              <h1 className='text-[15px] font-bold'>{booking.Time}</h1>
              <h1 className='font-medium flex items-center gap-2'>{new Date(booking.Date).toLocaleDateString()}</h1>
            </div>
          </div>

          <div className='flex items-center'>
            <FaLocationDot className='text-[30px] text-[#FCA311]'/>
            <h1 className='text-[15px] font-bold ml-4'>{booking.Location}</h1>
          </div>

          <div className='flex items-center'>
            <MdEventSeat className='text-[30px] text-[#FCA311]'/>
            <h1 className='text-[15px] font-bold ml-4'>{booking.TypeOfEvents}</h1>
          </div>

          <div className='flex items-center'>
            <FaPesoSign className='text-[30px] text-[#FCA311]'/>
            <h1 className='text-[15px] font-bold ml-4'>{parseFloat(booking.TalentFee).toLocaleString()}</h1>
          </div>
        </div>
    </AppointmentMoreModal>
    </div>
  )
}

export default ProfilePage