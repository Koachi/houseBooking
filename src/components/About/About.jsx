"use client"
import React from 'react';
import house4 from "../../assets/house4.png";
import { SlStar } from "react-icons/sl";
import BannerCard from './BannerCard';

const bgStyle = {
    backgroundImage: `url(${house4.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundPosition: "no-repeat",
    minHeight: "520px",
    width: "100vw",
};

const About = () => {
  return (
    <div style={bgStyle}>
        <div className='text-white bg-black/80 min-h-[530px] flex items-center py-10'>
        <div className='container'>
            {/* header title section */}
            <div className="space-y-3 uppercase text-center py-14">
                <p  data-aos="fade-up"
                    className='text-primary text-2xl font-semibold'>
                    We do our Best
                </p>
                <h1 data-aos="fade-up"
                    data-aos-delays="300"
                    className="text-3xl font-bold">More Than Your Expectations</h1>
            </div>

            {/* Card sections */}
            <div   
                data-aos="fade-up"
                className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='space-y-8'>
                    <BannerCard 
                        title={"Fast Booking"}
                        description={
                            "This is a fast booking, it fills up very fast"
                        }
                        icon={<SlStar />}
                />
                    <BannerCard 
                            title={"Fast Booking"}
                            description={
                                "This is a fast booking, it fills up very fast"
                            }
                            icon={<SlStar />}
                    />
                </div>
                <div className='space-y-8'>
                <BannerCard 
                        title={"Fast Booking"}
                        description={
                            "This is a fast booking, it fills up very fast"
                        }
                        icon={<SlStar />}
                />
                    <BannerCard 
                            title={"Fast Booking"}
                            description={
                                "This is a fast booking, it fills up very fast"
                            }
                            icon={<SlStar />}
                    />
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default About;