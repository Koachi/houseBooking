import React from 'react'
import Slider from 'react-slick';
import EmilyBgImage from "../../assets/emilyBg.jpg"
import Avatar from "../../assets/avatar.png"
import Image from 'next/image';

const bgStyle = {
  backgroundImage: `url(${EmilyBgImage.src})`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
};

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "I started with a spoon now I feed nations and I am just getting started",
    img: Avatar
  },
  {
    id: 2,
    name: "Sabir Ali",
    text: "I start by failing forward, now I encourage others to just start because starting is one step in the positive direction",
    img: Avatar
  },
  {
    id: 3,
    name: "John Holt",
    text: "I started with a tooth pick but thats just when it gets interesting now I own a forest",
    img: Avatar
  },
  {
    id: 4,
    name: "Sarah Willams",
    text: "It all seems impossible until you get it done, so get it done",
    img: Avatar
  }
]

const Testimonial = () => {
  //slider config
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  }
  
  return (
      <div style={bgStyle}>
        <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
          <div className='container'>
             {/* header section */}
             <div data-aos="fade-up" className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>Testimonials</h1>
             </div>
              {/*Testimonial cards Section*/}
              <div data-aos="zoom-in">
                
              <Slider {...settings}>
        {TestimonialData.map(({ id, name, text, img }) => (
          <div key={id} className="my-6">
            <div className="flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relative">
              {/* Content Section */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs text-center line-clamp-2">{text}</p>
              </div>
              
              {/* Image Section */}
              <div className="flex items-center gap-4">
                <Image
                  src={img}
                  alt={`${name}'s Avatar`}
                  width={60}
                  height={60}
                  className="rounded-full w-16 h-16"
                />
                <div className="space-y-2">
                  <h1 className='text-xl font-bold text-black/60 dark:text-primary font-cursive'>{name}</h1>
                  <p className="text-sm font-bold text-black/45 dark:text-white">Developer</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonial;