import React, {useState} from 'react';
import { Logo, hamburger } from '../assets';

const Navbar = () => {
    const [toggled, setToggled] = useState(false);

    return (
      <div className="bg-cover bg-no-repeat navbar bg-center h-[280px] lg:px-[80px] px-6 py-10">
          <div className='lg:flex lg:justify-between'>
              <span className='w-full lg:w-auto flex justify-between'>
                <img src={Logo} className="h-5 my-auto"></img>

                <img src={hamburger} onClick={() => {setToggled(prev => !prev)}} className="h-4 lg:hidden my-auto"/>
              </span>
              
              <ul className={`list-none lg:flex lg:justify-between ${toggled ? '' : 'hidden'} text-center mt-6 lg:mt-0`}>
                  <li className='mr-4 text-white hover:opacity-90 hover:underline hover:cursor-pointer'>About</li>
                  <li className='mr-4 text-white hover:opacity-90 hover:underline hover:cursor-pointer'>Discover</li>
                  <li className='mr-4 text-white hover:opacity-90 hover:underline hover:cursor-pointer'>Get Started</li>
              </ul>
          </div>
          
      </div>
    )
}

export default Navbar;