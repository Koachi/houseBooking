import React from 'react'
import fullHouse from "../../assets/house2.png";
import singleHouse from "../../assets/house3.png"
import houseSample from "../../assets/houseSample.png"
import Image from "next/image";
import Link from 'next/link';

const bgStyle = {
  backgroundImage: `url(${fullHouse.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "520px",
  width: "100vw",
};

const Hero = () => {
  return (
    <div style={bgStyle}>
      <div className="dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 h-[520px] w-full flex">
        <div className="container grid grid-cols-1 place-items-center">
          {/* text content section */}
          <div className='text-center space-y-5 py-14'>
            <p data-aos="fade-up" 
               className="text-primary text-3xl font-semibold uppercase">
              Book House Now
            </p>
            <h1 data-aos="fade-up"
                 data-aos-delay="600"
                 className='text-4xl md:text-6xl font-bold'> +234 916 547 0751</h1>
            <p
                 data-aos="fade-up"
                 data-aos-delay="1000"
                 className="tracking-[8px] text-base sm:text-xl font-semibold">
                 www.rentals.com
            </p>
          </div>
          {/* Your image or other content here */}
          <div data-aos="zoom-in-right"
               data-aos-duration="1000">
            <Image 
                src={houseSample}
                alt ="single house"
                className= "max-h-[460px] sm:scale-125 translate-y-10 sm:translate-y-0"/>
          </div>
      </div>
  </div>
</div>
  )
};

export default Hero;