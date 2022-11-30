import React from 'react';
import { Pledge } from "./index";
import pledges from "../pledges.json";

const About = () => {
  return (
    <div className='lg:w-2/5 md:w-2/3 w-11/12 mx-auto rounded-md px-8 py-10 shadow-lg mt-4 bg-white relative bottom-6'>
        <h2 className='font-extrabold text-black text-2xl'>About this project</h2>

        <p className='text-sm mt-4 text-gray-400'>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>

        <p className='text-sm mt-4 text-gray-400'>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
            to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        {
          pledges.map((pledge, index) => {
            if(pledge.title != "Pledge with no reward") {
              return (
                <div key={index}>
                  <Pledge minimum={pledge.minimum} title={pledge.title} body={pledge.body} amount={pledge.amount}/>
                </div>
              )
            }
          }) 
        }
    </div>
  )
}

export default About;