import React from 'react';
import { Pledge } from "./index";

const About = () => {
  const firstBody = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.";
  const secondBody = "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.";
  const thirdBody = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.";
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

        <Pledge minimum={25} title={"Bamboo Stand"} body={firstBody} amount={101} />
        <Pledge minimum={75} title={"Black Edition Stand"} body={secondBody} amount={64} />
        <Pledge minimum={200} title={"Mahogany Special Edition"} body={thirdBody} amount={0} />
    </div>
  )
}

export default About;