import React from 'react'

const SecondPageHero = () => {
  return (
    <div className='h-screen w-full grid grid-cols-2 mt-[5%]' >
        <div className='relative'>
            <img src="../src/assets/plmun.jpg" alt="ERROR"  className='w-[80%] rounded-[20px] absolute left-[5%]'/>
            <img src="../src/assets/plmun1.jpg" alt="ERROR"  className='w-[80%] mt-10 rounded-[20px] absolute top-[40%] right-10'/>
        </div>

        <div className=''>
            <h1 className='text-[40px] text-[#FCA311] font-extrabold ml-10'><span className='text-[#14213D]'>PL</span>Mun <span className='text-[#14213D]'>Cho</span>rale</h1>
            <h1 className='text-[25px] text-justify px-10 indent-10 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h1>

            <h1 className='text-[25px] text-justify px-10 indent-10 mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h1>

            <h1 className='text-[25px] text-justify px-10 indent-10 mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h1>

        </div>
    </div>
  )
}

export default SecondPageHero