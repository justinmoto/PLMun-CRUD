import React from 'react'

const AppointmentMoreModal = ({ children, isOpen, onClose, booking }) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#14213D] bg-opacity-50 z-50 text-white">
    <div className="bg-[#14213D] p-10 rounded-[10px] relative w-[20%] h-[45vh]">
      <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
      {children}
      <div className='absolute top-[60%] right-0 '>
  <img src="../../src/assets/bg2.png" alt="" className='h-[18vh]'/>
</div>
    </div>

  </div>
  )
}

export default AppointmentMoreModal