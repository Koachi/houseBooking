import React from 'react'
import {
    FaAndroid,
    FaAppStoreIos,
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaMapMarker,
    FaMousePointer,
    FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return(
    <div className="bg-white text-black dark:bg-black dark:text-white">
        {/*Upper section Banner */}
            <div className="bg-primary text-black">
                <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
                    <p>WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS!</p>
                    <h1 className="text-3xl md:text-5xl font-bold">+123 4567 8900</h1>
                </div>
            </div>
     
        {/**Bottom Footer section*/}
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12">
            {/** first col section */}
            <div className='space-y-6'>
            {/* heading */}
            <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">About Rental Houses</h1>
            <p> Real Estate and Housing is really a good place to start from. We offer quality services
                Our housing are available and affordable
                We have different pricing from Luxury to Business class down to the Economy Class
            </p>
            {/* social links*/}
            <div className="flex items-center text-primary gap-3 text-2xl">
                <FaFacebook />
                <FaInstagram />
                <FaGoogle />
                <FaTwitter />
            </div>
        </div>


    {/** second col section*/}
        <div className='space-y-6'>
            <h1 className='text-2xl py-3 font-bold uppercase border-b-8 border-primary'>
                Download 
            </h1>
            <p>
                Download the quality of life that you want to live, navigate to the PlayStore or use our website and 
                jump on our application today.
            </p>
            <h1 className='text-primary text-xl font-semibold flex items-center gap-4'>
                Android user{" "}
                <span>
                    <FaAndroid className="text-2xl text-black dark:text-white" />
                </span>
            </h1>
            <h1 className='text-primary text-xl font-semibold flex items-center gap-4'>
                IOS user{"  "}
                <span>
                <FaAppStoreIos className="text-2xl text-black dark:text-white" />
                </span>
            </h1>
        </div>


        {/* thrid col section*/}
        <div className='space-y-6'> 
            {/** heading */}
            <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
                Contact
            </h1>
            <div className='flex items-center gap-4'>
                <FaMapMarker />123 Street, New York, USA
            </div>
            <div className='flex items-center gap-4'>
                <MdCall />
                +123 4567 8900
            </div>
            <div className='flex items-center gap-4'>
                <MdEmail /> uchenyikesandu@gmail.com
            </div>
            <div className='flex items-center gap-4'>
                <FaMousePointer /> www.cabhub-tcj.com
            </div>
        </div>
    </div>
    <p className='text-center py-4 text-sm'>Copyright @ 2024. All rights reserved</p>
</div>
        
        
  )
};

export default Footer