import React, { useState, useEffect } from 'react'
import AdminSideBar from './AdminSideBar'
import AppointmentMoreModal from '../Modals/AppointmentMoreModal'
import { IoIosMore } from "react-icons/io";
import { FaUserCircle,FaCalendarAlt } from "react-icons/fa";
import { FaArrowLeftLong,FaLocationDot,FaPesoSign } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdOutlineKeyboardDoubleArrowRight,MdEventSeat } from "react-icons/md";
import axios from 'axios'
    const AdminAppointmentHistory = () => {
        const [bookings, setBookings] = useState([])
        useEffect(() => {
        axios.get('http://localhost:4000/')
        .then(res => setBookings(res.data))
        .catch(err => console.log(err))
    
    },[])

    const [isView, isSetView] = useState(false)
    const [booking, setBooking] = useState([])
    const handleSeeMoreButton = (profileid) => {
      axios.get('http://localhost:4000/booking/'+ profileid)
      .then(res => setBooking(res.data))
      .catch(err => console.log(err))
      isSetView(!isView)
    }

    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const period = hours < 12 ? 'AM' : 'PM'; // Determine AM/PM
        return `${formattedHours}:${minutes} ${period}`;
    }
 
  return (
    <div>
        <AdminSideBar/>
        <div className='absolute top-0 left-[20%]'>
            <div className=''>
                <h1 className='text-[35px] font-bold p-10'>Latest Events</h1>
                
                <div className='grid grid-cols-[1fr,2fr,1fr,1fr,1fr] text-[30px] gap-10 ml-10 font-bold place-items-center'>
                    <h1>Status</h1>
                    <h1 className=''>Name</h1>
                    <h1>Location</h1>
                    <h1 className=''>Date & Time</h1>
                    <h1></h1>
                </div>
                {bookings.map((data,i) => (
                    <div key={i} className='grid grid-cols-[1fr,2fr,1fr,1fr,1fr] text-[20px] gap-10 ml-10 font-bold place-items-center border-2 py-5 rounded-[15px] mt-5'>
                    <h1 className='px-4 rounded-[10px] text-center text-white bg-[#686C67]'>Attended</h1>
                    <h1 className='flex items-center gap-3'>{data.Name}</h1>
                    <h1 className='text-center'>{data.Location}</h1>
                    <h1 className=''>{new Date(data.Date).toLocaleDateString()} At {formatTime(data.Time)}</h1>
                    <h1><IoIosMore onClick={e => handleSeeMoreButton(data.ID)} className='text-[40px] text-[#FCA311] hover:bg-[#14213D] hover:rounded-full hover:p-2 cursor-pointer'/></h1>
                </div>
                ))}
             </div>
        </div>
        <AppointmentMoreModal isOpen={isView} onClose={handleSeeMoreButton}>
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

export default AdminAppointmentHistory