import React from 'react'

const Details = () => {
  return (
    <div className='lg:w-2/5 md:w-2/3 w-11/12 text-center mx-auto rounded-md px-10 py-6 shadow-lg bg-white relative bottom-6'>
        <div className='lg:flex md:flex justify-between'>
            <span className='py-3'>
                <p className='text-2xl font-extrabold text-black'> $89,914 </p> 
                <p className='text-sm text-gray-400'>of $100,000 backed</p>
            </span>

            {/* lg:border-t-0 lg:border-b-0 lg:border-l-2 lg:border-r-2 border-gray px-6 lg:px-14 border-t-2 border-b-2 */}
            <span className='py-5 lg:py-1 px-6 lg:px-14 lg:border-t-0 lg:border-b-0 lg:border-l-2 lg:border-r-2 border-gray'>
                <p className='text-2xl font-extrabold text-black'> 5,007 </p> 
                <p className='text-sm text-gray-400'>total backers</p>
            </span>
            
            {/* lg:border-t-0 md:border-t-0 border-t-2 border-gray-300 */}
            <span className='py-3  px-2'>
                <p className='text-2xl font-extrabold text-black'> 56 </p> 
                <p className='text-sm text-gray-400'>days left</p>
            </span>
        </div>
        
        <div className="w-full bg-gray-200 mt-5 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-[#147b74] h-2.5 rounded-full" style={{width: '80%'}}></div>
        </div>
    </div>
  )
}

export default Details;