import React from 'react'
import AdminSideBar from './AdminSideBar';
import { FaUserCircle} from "react-icons/fa";
const AdminFeedbacks = () => {
  return (
    <div>
    <AdminSideBar/>
    <div className='absolute top-0 left-[20%]'>
    <div className='p-10'>
        <h1 className='text-[45px] font-bold'>Clients Feedback</h1>
    </div>

    <div className='ml-10 grid grid-cols-3 '>
      <div className='border-2 p-2 rounded-[15px]'>
        <div className=' flex items-center p-2 gap-2'>
          <FaUserCircle className='text-[40px] text-[#FCA311]'/>
          <div className='font-bold'>
            <h1 >Justin Mark Agustin</h1>
            <h1>Festival Mall, Alabang</h1>
          </div>
        </div>

        <div className='text-justify px-10 mt-3'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </div>

        <div>
          <h1 className='text-right mt-10 font-bold'>01/01/24 at 10:00AM</h1>
        </div>
      </div>
      
      
    </div>
    </div>
</div>
  )
}

export default AdminFeedbacks