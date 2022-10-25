import React from 'react';

const Pledge = ({minimum, title, body, amount}) => {
  return (
    <div className={`px-6 py-6 border border-gray-400 ${amount === 0 ? "opacity-40" : "opacity-100"} rounded-lg mb-3 mt-6`}>
        <div className='justify-between w-full lg:flex'>
            <h2 className='font-extrabold text-black text-xl'>{title}</h2>

            <p className='text-sm text-[#147b74] my-auto'>{`Pledge $${minimum} or more`}</p>
        </div>
        

        <p className='text-sm my-4 text-gray-400'>
            {body}
        </p>

        <div className='lg:flex md:flex justify-between w-full'>
            <p className='my-auto'>
                <span className='text-xl font-extrabold text-black mr-2'>{amount}</span>
                <span className='text-sm text-gray-300'>left</span>
            </p>

            <button className={`rounded-full mt-4 lg:mt-0 md:mt-0 px-6 text-center ${amount === 0 ? "bg-gray-800" : 'bg-[#3cb4ac] hover:bg-[#147b74]'} text-white py-2`}>{amount === 0 ? "Out of Stock" : "Select Reward"}</button>
        </div>
    </div>
  )
}

export default Pledge;