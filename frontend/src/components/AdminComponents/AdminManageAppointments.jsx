import React, { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { FaUserCircle,FaCalendarAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { FaLocationDot,FaPesoSign } from "react-icons/fa6";
import {MdEventSeat } from "react-icons/md";
import AdminSideBar from './AdminSideBar';
import AdminAppointmentDetailsModal from '../Modals/AdminAppointmentDetailsModal';
import AppointmentMoreModal from '../Modals/AppointmentMoreModal'
import axios from 'axios'

const AdminManageAppointments = () => {

    const [handleSeeMore, setIsHandleSeeMore] = useState(false)
    const [booking, setBooking] = useState([])
    const handleSeeMoreButton = (profileid) => {
      axios.get('http://localhost:4000/booking/'+ profileid)
      .then(res => setBooking(res.data))
      .catch(err => console.log(err))
      setIsHandleSeeMore(!handleSeeMore)
    }

    const [isView, isSetView] = useState(false)
    const handleViewButton = (profileid) => {
      axios.get('http://localhost:4000/booking/'+ profileid)
      .then(res => setBooking(res.data))
      .catch(err => console.log(err))
      isSetView(!isView)
    }

    const [bookings, setBookings] = useState([])
    
    useEffect(() => {
      axios.get('http://localhost:4000/')
      .then(res => setBookings(res.data))
      .catch(err => console.log(err))
    },[])

    function formatTime(timeString) {
      if (!timeString) {
          return ''; // Return an empty string or a default value if timeString is undefined
      }
      const [hours, minutes] = timeString.split(':');
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      const period = hours < 12 ? 'AM' : 'PM'; // Determine AM/PM
      return `${formattedHours}:${minutes} ${period}`;
    }

    const handleDelete = async (id) => {
      try{
        await axios.delete('http://localhost:4000/delete'+id)
        window.location.reload()
      }catch(err){
        console.log(err)
      }
    }

    const {id} = useParams();
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const [typeofevents, setTypeOfEvents] = useState('')
    const [talentfee, setTalentFee] = useState('')

    const handleUpdate = (event) => {
      event.preventDefault()
      axios.put(`http://localhost:4000/update/${booking.ID}`,{name,email,mobile,date,time,location,typeofevents,talentfee})
      .then(res =>{
        console.log(res)
        setName('');
        setEmail('');
        setMobile('');
        setDate('');
        setTime('');
        setLocation('');
        setTypeOfEvents('');
        setTalentFee('');
        navigate('/upcoming')
      })
      .catch(err => console.log(err)) 
    }
  return (
    <div>
        <AdminSideBar/>
        <div className='absolute top-0 left-[20%]'>
        
        <div className='p-10'>
            <h1 className='text-[45px] font-bold'>Manage Appointments</h1>
    <div className="overflow-x-auto ml-10">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full border-b text-[25px]">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Type of Event</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Date & Time</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((data, i) => (
              <tr key={i} className="w-full border-b border-gray-200 ">
                <td className="py-4 px-4 flex items-center gap-2 font-bold"><FaUserCircle className='text-[30px] text-[#FCA311] '/>{data.Name}</td>
                <td className="py-3 px-4 ">{data.TypeOfEvents}</td>
                <td className="py-3 px-4 ">{data.Location}</td>
                <td className="py-3 px-4">{new Date(data.Date).toLocaleDateString()} At {formatTime(data.Time)}</td>
                <td className="py-3 px-4">PENDING</td>
                <td className="py-3 px-4">                
                  <div className='flex items-center gap-5'>
                    <h1 className='font-bold p-1 px-5 rounded-[10px] bg-[#4EFC11]'>Accept</h1>
                    <h1 className='font-bold p-1 px-5 rounded-[10px] bg-[#FC111F]'>Decline</h1>
                    <IoEye onClick={() => handleSeeMoreButton(data.ID)} className='text-[35px] text-[#FCA311] hover:rounded-full hover:bg-[#14213D] hover:p-2 duration-200 cursor-pointer'/>
                    <MdDelete onClick={() => handleDelete(data.ID)} className='text-[35px] text-[red] hover:rounded-full hover:bg-[#14213D] hover:p-2 duration-200 cursor-pointer'/>
                    <MdEditSquare onClick={() => handleViewButton(data.ID)}className='text-[30px] text-[#FCA311]'/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            <AdminAppointmentDetailsModal isOpen={isView} onClose={handleViewButton} >
                <h1 className='text-center font-extrabold mt-[-10px] text-[30px]'>Edit <span className='text-[#FCA311]'>Appointment</span> Details adminmodal</h1>
                <form onSubmit={handleUpdate} className='space-y-8 mt-4 font-bold'>
                    <div className='grid grid-cols-2 place-items-center'>
                        <div className='grid w-[90%]'>
                            <label>Name</label>
                            <input type="text"  
                            onChange={e => setName(e.target.value)}
                            className='block p-2 rounded-[5px] text-black'/>
                        </div>

                        <div className='grid w-[90%]'>
                            <label>Date</label>
                            <input type="date"  placeholder={new Date(booking.Date).toLocaleDateString()} 
                            onChange={e => setDate(e.target.value)}
                            className='block p-2 rounded-[5px] text-black'/>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 place-items-center'>
                    <div className='grid w-[90%]'>
                            <label>Email</label>
                            <input type="text"  placeholder={booking.Email} 
                            onChange={e => setEmail(e.target.value)}
                            className='block p-2 rounded-[5px] text-black'/>
                        </div>

                        <div className='grid w-[90%]'>
                            <label>Time</label>
                            <input type="time" placeholder={formatTime(booking.Time)} 
                            onChange={e => setTime(e.target.value)}
                            className='block p-2 rounded-[5px] text-black'/>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 place-items-center'>
                    <div className='grid w-[90%]'>
                            <label>Contact Number</label>
                            <input type="number"  placeholder={booking.Mobile} 
                            onChange={e => setMobile(e.target.value)}
                            className='block p-2 rounded-[5px] text-black'/>
                        </div>

                        <div className='grid w-[90%]'>
                            <label>Location</label>
                            <input type="text"  placeholder={booking.Location} 
                            onChange={e => setLocation(e.target.value)}
                            className='block p-2 rounded-[5px] text-black'/>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 place-items-center'>
                        <div className='grid w-[90%]'>
                            <label>Type of Events</label>
                            <input type="text"  placeholder={booking.TypeOfEvents} 
                            onChange={e => setTypeOfEvents(e.target.value)}
                            className='block p-2 rounded-[5px] text-black'/>
                        </div>

                        <div className='grid w-[90%]'>
                            <label>Talent Fee</label>
                            <input type="number" placeholder={booking.TalentFee} 
                            onChange={e => setTalentFee(e.target.value)}
                            className='block p-2 rounded-[5px] text-black'/>
                        </div>
                    </div>

                    <div className='flex items-center justify-center text-black'>
                      <button type='submit' className='border-2 border-black p-2 w-[40%] rounded-[15px] bg-[#FCA311]'>Submit</button>
                    </div>
                </form>
            </AdminAppointmentDetailsModal>

            <AppointmentMoreModal isOpen={handleSeeMore} onClose={handleSeeMoreButton}>
                <div className='space-y-7 mb-4'>
                  <div className='flex justify-between'>
                    <div className='border-2 border-black w-[50%] flex items-center justify-center rounded-[15px] bg-[#FCA311]'>
                      <h1 className='font-bold'>Pending</h1>
                    </div>
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
        </div>
    </div>
  )
}

export default AdminManageAppointments