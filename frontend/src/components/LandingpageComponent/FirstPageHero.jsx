import React from 'react'
import { Link } from 'react-router-dom'
const FirstPageHero = () => {
  return (
    <div>
        <div className='relative'>
            <img src="../src/assets/plmun1.jpg" alt="error" className='h-screen w-screen brightness-[0.4]'/>
        </div>

        <div className='absolute p-3 px-10 top-10 flex items-center justify-between w-full'>
            <h1 className='text-white text-[40px] font-extrabold'>PL<span className='text-[#FCA311]'>Mun</span> Cho<span className='text-[#FCA311]'>rale.</span></h1>

            <ul className='text-white space-x-[100px] flex text-[25px] font-bold'>
                <li className='hover:text-[#FCA311]'>HOME
                    
                </li>
                <li className='hover:text-[#FCA311]'>ABOUT US</li>
                <li className='hover:text-[#FCA311]'>BOOK</li>
            </ul>

            <Link to='/login' className='text-black font-bold bg-[#FCA311] rounded-full px-10 py-2'>LOGIN</Link>
        </div>

        <div className='absolute top-[250px] w-full flex justify-center items-center px-[20%]'>
            <h1 className='font-extrabold text-white text-center text-[70px]'>
                The <span className='text-[#FCA311]'>FIRST</span> and <span className='text-[#FCA311]'>FINEST </span>Chorale Group in <span className='text-[#FCA311]'>Muntinlupa City</span>
            </h1>
        </div>

        <div className='absolute top-[500px] w-full flex justify-center items-center px-[20%]'>
            <Link to='/signup' className='text-white text-[30px] font-bold border-4 border-[#FCA311] p-2 px-10 rounded-[10px] hover:bg-[#FCA311]
            hover:text-black hover:border-black'>SIGN UP</Link>
        </div>
    </div>
  )
}

export default FirstPageHero