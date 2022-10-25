import React from 'react';
import { LogoMasterCraft } from '../assets';

const Mastercraft = () => {
    const [bookmarked, setBookmarked] = React.useState(false);
    
    const handleClick = () => {
        setBookmarked(prev => !prev);
    }

    return (
        <div className='lg:w-2/5 md:w-2/3 w-11/12 text-center mx-auto rounded-md px-6 pt-3 pb-6 shadow-lg bg-white relative bottom-10'>
            <img src={LogoMasterCraft} className="relative bottom-10 mx-auto" alt="" />
            <h1 className='font-extrabold text-black text-2xl'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-gray-600 text-sm my-3'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

            <div className='flex justify-between mx-auto mt-6'>
                <button className='rounded-full px-6 py-2 hover:bg-[#147b74] bg-[#3cb4ac]'>Back this project</button>
                <div className='bg-gray-200 rounded-full flex lg:pr-3 justify-between hover:cursor-pointer' onClick={handleClick}>
                    <div className='rounded-full flex align-center justify-center' >
                        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill={`${bookmarked ? "#147b74" : '#2F2F2F'}`} cx="28" cy="28" r="28"/><path fill={`${bookmarked ? "white" : "#B1B1B1"}`} d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                    </div>
                    <p className={`my-auto ${bookmarked ? 'text-[#147b74]' : ''} hidden lg:block ml-3`}>{bookmarked ? 'Bookmarked' : 'Bookmark'}</p>
                </div>
            </div>
        </div>
    )
}

export default Mastercraft;