import React from 'react'

const EditProfileModal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#14213D] bg-opacity-50 z-50 text-white">
      <div className="bg-[#14213D] p-10 rounded-[10px] relative w-[20%] h-[45vh]">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
        {children}
      </div>
    </div>
  )
}

export default EditProfileModal