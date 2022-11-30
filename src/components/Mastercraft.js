import React, { useState, useRef, useEffect } from 'react';
import { LogoMasterCraft } from '../assets';
import pledges from "../pledges.json";

const Mastercraft = () => {
    const [bookmarked, setBookmarked] = useState(false);
    const [backProject, setBackProject] = useState(false);
    
    const handleClick = () => {
        setBookmarked(prev => !prev);
    }

    return (
        <div>
            <div className='lg:w-2/5 md:w-2/3 w-11/12 text-center mx-auto rounded-md px-6 pt-3 pb-6 shadow-lg bg-white relative bottom-10'>
                <img src={LogoMasterCraft} className="relative bottom-10 mx-auto" alt="" />
                <h1 className='font-extrabold text-black text-2xl'>Mastercraft Bamboo Monitor Riser</h1>
                <p className='text-gray-600 text-sm my-3'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

                <div className='flex justify-between mx-auto mt-6'>
                    <button className='rounded-full px-6 py-2 hover:bg-[#147b74] bg-[#3cb4ac]' onClick={() => setBackProject(true)}>Back this project</button>
                    <div className='bg-gray-200 rounded-full flex lg:pr-3 justify-between hover:cursor-pointer' onClick={handleClick}>
                        <div className='rounded-full flex align-center justify-center' >
                            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill={`${bookmarked ? "#147b74" : '#2F2F2F'}`} cx="28" cy="28" r="28"/><path fill={`${bookmarked ? "white" : "#B1B1B1"}`} d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                        </div>
                        <p className={`my-auto ${bookmarked ? 'text-[#147b74]' : ''} hidden lg:block ml-3`}>{bookmarked ? 'Bookmarked' : 'Bookmark'}</p>
                    </div>
                </div>
            </div>
            {/* <div className={`h-full w-full bg-red-300 flex overflow-hidden ${backProject ? 'grid' : '-translate-x-full hidden'} z-30 fixed items-center justify-center absolute top-0 right-0 left-0 bottom-0`}> */}
            <div className={backProject ? 'h-screen overflow-hidden flex justify-center w-full top-0 right-0 left-0 bottom-0 z-30 outline-none fixed' : ' -translate-x-full hidden'}>
                <div className='lg:w-1/2 w-11/12 bg-white rounded-lg h-[620px] shadow-2xl px-8 py-3'>
                    <span onClick={() => setBackProject(false)} className="flex justify-end">
                        <svg width="15" height="15" className='hover:fill-black' xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fill-rule="evenodd" opacity=".4"/></svg>
                    </span>
                    {/* <div className='text-lg text-gray-300 font-extrabold hover:text-black cursor-pointer flex justify-end' >x</div> */}
                    <p className='text-black font-semibold text-lg'>Back this project</p>
                    <p className='pt-3 opacity-60 text-sm'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

                    <div>
                        {
                            pledges.map((pledge, index) => {
                                return (
                                    <div key={index}>
                                        <Pledge amount={pledge.amount} body={pledge.body} minimum={pledge.minimum} title={pledge.title}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const Pledge = ({minimum, body, title, amount}) => {
    const [checked, setChecked] = useState(false);
    const input = useRef(null);
    const isChecked = useRef(null);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    const handleClick = () => {
        if(checked) {
            setChecked(false);
            isChecked.current.checked = false;
        } else {
            setChecked(true);
        }
    }

    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        if(input.current.value < minimum) {
            window.alert(`Please, you cannot donate anything less than $${minimum}. Kindly consider donating more or choosing another pledge.`);
        } else {
            setSuccess(true);
        }
    }

    return (
        <div className={`px-4 py-3 ${checked ? 'border-[#3cb4ac] border-2' : 'border border-gray-200' }  ${amount === 0 ? "opacity-40" : "opacity-100 group"} rounded-lg my-2 cursor-pointer `}>
            <div className='flex justify-between w-full'>
                <div className='flex'>
                    <input type="radio" ref={isChecked} name="pledge" onClick={handleClick} onChange={handleChange} className={`group-hover:border-[#3cb4ac] group-hover:outline-[#3cb4ac]`} id="noreward"></input>
                    <p className='group-hover:text-[#3cb4ac] text-black font-semibold mx-3 text-base'>{title}</p>
                    <p className={`text-[#3cb4ac] ${minimum ? '' : 'hidden'} text-xs mx-2 my-auto`}>Pledge ${minimum} or more</p>
                </div>

                <p className={`${amount != undefined ? amount === 0 ? "" : "" : 'hidden'}`}>
                    <span className='text-base text-black font-semibold mr-1'>{amount}</span>
                    <span className='opacity-60 text-xs'>left</span>
                </p>
            </div>
            <p className='text-sm opacity-60 w-full lg:w-[500px] pl-6 mt-4'>
                {body}
            </p>

            <div className={`border-t border-gray-200 py-2 mt-3 justify-between ${checked && amount > 0 ? "flex" : "hidden"}`}>
                <p className='text-xs opacity-60 my-auto'>Enter your pledge</p>

                <p className='text-base relative opacity-50 left-20 top-3'>$</p>
                <input type="number" ref={input} className='text-black w-1/5 focus:outline-[#3cb4ac] my-auto border border-gray-200 font-semibold px-5 py-3 rounded-full'></input>
                <button onClick={handleSubmit} className='text-white text-center rounded-full px-5 py-2 my-auto shadow-base bg-[#3cb4ac] hover:bg-[#147b74]'>Continue</button>
            </div>

            <div className={success ? 'h-screen flex justify-center items-center overflow-hidden  w-full top-0 right-0 left-0 bottom-0 z-30 outline-none fixed' : ' -translate-x-full hidden'}>
                <div className={`bg-white h-[280px] flex-row items-center rounded-lg shadow-2xl justify-center lg:w-[350px] w-11/12 p-4 fixed`}>
                
                    <svg width="64" className='mx-auto' height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
                    <p className='font-extrabold text-black text-lg my-3 text-center'>Thanks for your support!</p>
                    <p className='text-sm opacity-50 text-center'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.</p>
                    <div className='px-4 mt-4 py-2 mx-auto text-center lg:w-1/3 w-1/2 bg-[#3cb4ac] hover:bg-[#147b74] rounded-full text-white' onClick={() => setSuccess(false)}>Got it!</div>
                </div>
            </div>
        </div>
    )

}

export default Mastercraft;