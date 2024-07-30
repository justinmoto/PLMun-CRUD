import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
const Page1Homepage = () => {
  return (
    <div>
        <div className='relative'>
            <img src="../src/assets/plmun1.jpg" alt="error" id='home' className='h-screen w-screen brightness-[0.4]'/>
        </div>

        <div className='absolute p-3 px-10 top-10 flex items-center justify-between w-full'>
            <h1 className='text-white text-[40px] font-extrabold'>PL<span className='text-[#FCA311]'>Mun</span> Cho<span className='text-[#FCA311]'>rale.</span></h1>

            <ul className='text-white space-x-[100px] flex text-[25px] font-bold cursor-pointer'>
                <a href="#home"><li className='hover:text-[#FCA311]'>HOME</li></a>
                <a href="#performance"><li className='hover:text-[#FCA311]'>PERFORMANCES</li></a>
                <a href="#book"><li className='hover:text-[#FCA311]'>BOOK</li></a>
                <a href="#team"><li className='hover:text-[#FCA311]'>TEAM</li></a>
            </ul>


            <Link to='/profile'>
                <FaUserCircle className='text-[#FCA311] text-[50px] mt-[-15px] cursor-pointer'/>
            </Link>


        </div>

        <div className='absolute top-[250px] w-full flex justify-center items-center px-[20%]'>
            <h1 className='font-extrabold text-white text-center text-[70px]'>
                The <span className='text-[#FCA311]'>FIRST</span> and <span className='text-[#FCA311]'>FINEST </span>Chorale Group in <span className='text-[#FCA311]'>Muntinlupa City</span>
            </h1>
        </div>

        <div className='absolute top-[500px] w-full flex justify-center items-center px-[20%]'>
            <a href="#book" className='text-white text-[30px] font-bold border-4 border-[#FCA311] p-2 px-10 rounded-[10px] hover:bg-[#FCA311]
            hover:text-black hover:border-black'>BOOK NOW</a>
        </div>
    </div>
  )
}

export default Page1Homepage