import React from 'react'
import {Link} from 'react-router-dom'
import { FaUserCircle} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa6";
import { IoChatbubblesSharp } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
const AdminSideBar = () => {
  return (
    <div className='bg-[#14213D] w-[20%] h-screen'>
        <div className='flex items-center justify-center'>
            <FaUserCircle className='text-[130px] text-[#FCA311] mt-10'/>
        </div>

        <div className='text-center mt-3'>
            <h1 className='text-white font-bold text-[30px]'>Administrator</h1>
        </div>

        <div className='flex justify-center mt-10'>
            <ul className='space-y-10 w-full'>
                <Link to='/manageappointment' className='flex items-center cursor-pointer font-bold text-white gap-2 text-[20px] hover:bg-black hover:p-2 duration-300 w-full'>
                    <MdManageAccounts className='text-[40px] text-[#FCA311] ml-10'/>Manage Appointments
                </Link>

                <Link to='/upcoming' className='flex items-center cursor-pointer font-bold text-white gap-2 text-[20px] hover:bg-black hover:p-2 duration-300 w-full'>
                    <FaClipboardList className='text-[40px] text-[#FCA311] ml-10'/>Upcoming Events
                </Link>

                <Link to='/latest' className='flex items-center cursor-pointer font-bold text-white gap-2 text-[20px] hover:bg-black hover:p-2 duration-300 w-full'>
                    <FaClipboardList className='text-[40px] text-[#FCA311] ml-10'/>Latest Events
                </Link>

                <Link to='/feedbacks' className='flex items-center cursor-pointer font-bold text-white gap-2 text-[20px] hover:bg-black hover:p-2 duration-300'>
                    <IoChatbubblesSharp className='text-[40px] text-[#FCA311] ml-10'/>Clients Feedback
                </Link>
            </ul>
        </div>

        <div className='flex items-center justify-center mt-[80%]'>
            <button className='flex items-center justify-center bg-[#FCA311] border-2 border-black font-bold p-2 w-[80%] rounded-[15px] gap-2 text-[20px]'><RiLogoutCircleLine className='text-[25px]'/>Logout</button>
        </div>
    </div>
  )
}

export default AdminSideBar