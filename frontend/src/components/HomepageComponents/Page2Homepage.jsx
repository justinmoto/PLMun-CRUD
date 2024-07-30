import React from 'react'

const Page2Homepage = () => {
  return (
    <div className='h-screen'>
        <h1 id='performance' className='text-center text-[40px] text-[#14213D] font-extrabold mt-[5%]'>Perfor<span className='text-[#FCA311]'>mances</span></h1>

        <div className='grid grid-cols-3 mt-10'>
            <div className='flex justify-center items-center '>
                <img src="../../src/assets/plmun.jpg" alt="" className='w-[90%] rounded-[20px]' />
            </div>

            <div className='flex justify-center items-center'>
                <img src="../../src/assets/plmun1.jpg" alt="" className='w-[90%] rounded-[20px]'/>
            </div>

            <div className='flex justify-center items-center'>
                <img src="../../src/assets/plmun2.jpg" alt="" className='w-[90%] rounded-[20px]'/>
            </div>
        </div>

        <div className='grid grid-cols-2 mt-10'>
            <div className='flex justify-end '>
                <img src="../../src/assets/plmun.jpg" alt="" className='w-[60%] rounded-[20px] mr-10'/>
            </div>

            <div className='flex justify-start items-center'>
                <img src="../../src/assets/plmun1.jpg" alt="" className='w-[60%] rounded-[20px] ml-10'/>
            </div>
        </div>
    </div>
  )
}

export default Page2Homepage