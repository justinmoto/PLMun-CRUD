import React from 'react'

const Page4Homepage = () => {
  return (
    <div className=''>
        <div className='text-center mt-[3%]'>
            <h1 id='team' className='text-[40px] text-[#14213D] font-extrabold'>Meet <span className='text-[#FCA311]'>Our</span> Team</h1>
            <h1 className='text-[20px] mt-5'>"Meet our talented singers, conductors, and composers—creating captivating music to inspire worldwide."</h1>
        </div>

        <div className='font-bold flex justify-center items-center mt-10 gap-10'>
            <h1 className='bg-[#FCA311] border-2 border-black p-2 px-10 rounded-full'>EXECUTIVES</h1>
            <h1 className='bg-[#FCA311] border-2 border-black p-2 px-10 rounded-full'>COMMITTEE</h1>
        </div>

        <div className='grid grid-cols-4 mx-[10%] mt-10 place-items-center'>
            <div className='grid place-items-center border-2 rounded-t-[45%] border-black w-[78%] h-[34vh] bg-[#FCA311]'>
                <img src="../../src/assets/President.png" alt="" className='mr-3 mt-10'/>
                <div className=' border-b-2 border-l-2 border-r-2 border-black w-[101.5%] text-white bg-[#14213D]'>
                    <h1 className='text-center font-bold mt-2'>John Paul Cedric Endrinal</h1>
                    <h1 className='text-center'>President</h1>
                </div>
            </div>

            <div className='grid place-items-center border-2 rounded-t-[45%] border-black w-[78%] h-[34vh] bg-[#FCA311]'>
                <img src="../../src/assets/Vice_President.png" alt="" className='mr-10 mt-10'/>
                <div className=' border-b-2 border-l-2 border-r-2 border-black w-[101.5%] text-white bg-[#14213D]'>
                    <h1 className='text-center font-bold mt-2'>Maria Christine Masing</h1>
                    <h1 className='text-center'>Vice President</h1>
                </div>
            </div>

            <div className='grid place-items-center border-2 rounded-t-[45%] border-black w-[78%] h-[34vh] bg-[#FCA311]'>
                <img src="../../src/assets/Secretary.png" alt="" className='mt-10'/>
                <div className=' border-b-2 border-l-2 border-r-2 border-black w-[101.5%] text-white bg-[#14213D]'>
                    <h1 className='text-center font-bold mt-2'>Princess Cabrera</h1>
                    <h1 className='text-center'>Secretary</h1>
                </div>
            </div>

            <div className='grid place-items-center border-2 rounded-t-[45%] border-black w-[78%] h-[34vh] bg-[#FCA311]'>
                <img src="../../src/assets/Assistant_Secretary.png" alt="" className='mt-10'/>
                <div className=' border-b-2 border-l-2 border-r-2 border-black w-[101.5%] text-white bg-[#14213D]'>
                    <h1 className='text-center font-bold mt-2'>Mae Marie Mendoza</h1>
                    <h1 className='text-center'>Assistant Secretary</h1>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-4 mx-[10%] mt-32 place-items-center'>
            <div className='grid place-items-center border-2 rounded-t-[45%] border-black w-[78%] h-[34vh] bg-[#FCA311]'>
                <img src="../../src/assets/Treasurer.png" alt="" className='mt-10'/>
                <div className=' border-b-2 border-l-2 border-r-2 border-black w-[101.5%] text-white bg-[#14213D]'>
                    <h1 className='text-center font-bold mt-2'>Lourielyn Rivera</h1>
                    <h1 className='text-center'>Treasurer</h1>
                </div>
            </div>

            <div className='grid place-items-center border-2 rounded-t-[45%] border-black w-[78%] h-[34vh] bg-[#FCA311]'>
                <img src="../../src/assets/Auditor.png" alt="" className='mt-10'/>
                <div className=' border-b-2 border-l-2 border-r-2 border-black w-[101.5%] text-white bg-[#14213D]'>
                    <h1 className='text-center font-bold mt-2'>Lourielyn Rivera</h1>
                    <h1 className='text-center'>Auditor</h1>
                </div>
            </div>

            <div className='grid place-items-center border-2 rounded-t-[45%] border-black w-[78%] h-[34vh] bg-[#FCA311]'>
                <img src="../../src/assets/PRO.png" alt="" className='mt-10'/>
                <div className=' border-b-2 border-l-2 border-r-2 border-black w-[101.5%] text-white bg-[#14213D]'>
                    <h1 className='text-center font-bold mt-2'>Mariel Abayare</h1>
                    <h1 className='text-center'>P.R.O</h1>
                </div>
            </div>

            <div className='grid place-items-center border-2 rounded-t-[45%] border-black w-[78%] h-[34vh] bg-[#FCA311]'>
                <img src="../../src/assets/Assistant_PRO.png" alt="" className='mt-10'/>
                <div className=' border-b-2 border-l-2 border-r-2 border-black w-[101.5%] text-white bg-[#14213D]'>
                    <h1 className='text-center font-bold mt-2'>Pamela Denise Aballa</h1>
                    <h1 className='text-center'>Assistant P.R.O</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page4Homepage