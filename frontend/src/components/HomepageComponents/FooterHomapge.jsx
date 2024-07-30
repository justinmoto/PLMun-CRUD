import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const FooterHomapge = () => {
  return (
    <div className='grid grid-cols-3 bg-[#14213D] mt-[8%] h-[12vh]'>
        <div className='flex items-center ml-12'>
            <h1 className='text-white text-[25px] font-extrabold'>PL<span className='text-[#FCA311]'>Mun</span> Cho<span className='text-[#FCA311]'>rale.</span></h1>
        </div>

        <div className='flex items-center justify-center font-bold text-white font-poppins h-[100px] text-[20px]'>
            Copyright © 2024. All Rights Reserved
        </div>

        <div className='flex items-center justify-end mr-10 text-white font-poppins h-[100px] gap-10'>
            <div className='grid place-items-center'>
                <a href="https://www.facebook.com/plmun.chorale"><FaFacebook/></a>
                <a href='https://www.facebook.com/plmun.chorale' className='text-center text-[13px]'>Facebook</a>
            </div>

            <div className='grid place-items-center'>
                <a href="https://www.instagram.com/plmunchoraleofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram/></a>
                <a href="https://www.instagram.com/plmunchoraleofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="className='text-center text-[13px]'>Instagram</a>
            </div>

            <div className='grid place-items-center'>
                <a href="https://www.youtube.com/@plmunchoraleofficial6929" className=""><FaYoutube/></a>
                <a href='https://www.youtube.com/@plmunchoraleofficial6929' className='text-center text-[13px]'>Youtube</a>
            </div>
      </div>
    </div>
  )
}

export default FooterHomapge