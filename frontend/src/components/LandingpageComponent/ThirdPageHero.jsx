import React from 'react'

const ThirdPageHero = () => {
  return (
    <div className='h-screen w-full bg-[#14213D] mt-10 relative'>

        <div className='absolute top-[600px] left-[-5%]'>
            <img src="../src/assets/bg1.png" alt="" className='h-[350px]' />
        </div>

        <div className='absolute top-[600px] right-[0.1%]'>
            <img src="../src/assets/bg2.png" alt="" className='h-[350px]' />
        </div>

        <div className='p-[4%] px-[9%]'>
            <h1 className='text-center text-white text-[25px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</h1>
        </div>

        <div className='grid grid-cols-3 font-bold absolute'>
            <div className='grid place-items-center'>
                <img src="../../src/assets/plmun.jpg" alt="" className='w-[90%] rounded-[20px]'/>
                <h1 className='text-white text-[30px] mt-5'>Sch<span className='text-[#FCA311]'>ool</span> Eve<span className='text-[#FCA311]'>nts</span></h1>
            </div>

            <div className='grid place-items-center'>
                <img src="../../src/assets/plmun1.jpg" alt="" className='w-[90%] rounded-[20px]'/>
                <h1 className='text-white text-[30px] mt-5'>Holi<span className='text-[#FCA311]'>day</span> Eve<span className='text-[#FCA311]'>nts</span></h1>
            </div>

            <div className='grid place-items-center'>
                <img src="../../src/assets/plmun2.jpg" alt="" className='w-[90%] rounded-[20px]'/>
                <h1 className='text-white text-[30px] mt-5'>Oth<span className='text-[#FCA311]'>er</span> Eve<span className='text-[#FCA311]'>nts</span></h1>
            </div>
        </div>

        <div className='flex justify-center mt-[28%]'>
            <button className='border-black border-2 bg-[#FCA311] p-2 text-[25px] px-10 rounded-[10px] font-extrabold'>BOOK NOW</button>
        </div>


    </div>
  )
}

export default ThirdPageHero