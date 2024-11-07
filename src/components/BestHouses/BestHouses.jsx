import React from 'react'
import house3 from "../../assets/house3.png"
import Image from "next/image"

const ServicesData = [
    {
        id: 1,
        img: house3,
        name: "Standard Class",
        description: 
            "House at lekki phase 3, luxury guaranteed, Electricity, Good Road Network and a healthy community",
        aosDelay: "100",
    },
    {
        id: 2,
        img: house3,
        name: "Student Class",
        description: 
            "House at Yaba, Affordable, Access to clean water, Good Road Network and a healthy community",
        aosDelay: "300",
    },
    {
        id: 3,
        img: house3,
        name: "Business Class",
        description: 
            "House at Mushin 3, Comfort guaranteed, Electricity, Good Road Network and a healthy community",
        aosDelay: "500",
    }
]

const BestHouses = () => {
    return (
    <div className='py-10 bg-white dark:bg-dark text-black dark:text-white'>
        <div className='container'>
        {/* header title section */}
        <div data-aos="fade-up" className="text-center mb-20">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
               Make your choice from the House Collection
            </h1>
        </div>

        {/** Best Cab Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center">
            {ServicesData.map(({ id, img, name, description, aosDelay }) => {
                     return(
                        <div 
                        key={id}
                        data-aos="fade-up"
                        data-aos-delay={aosDelay}
                        className="group rounded-2xl bg-white dark:bg-black hover:!bg-primary shadow-xl duration-200 max-w-[300px] relative" >
                    
                        {/* image section */}
                        <div className="h-[190px]" >
                            <Image src={img} 
                                   alt=""
                                   className="max-w-[200px] block mx-auto transform -transform-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300"/>
                        </div>
                        {/** text content section */}
                        <div className="p-4 text-center space-y-4">
                            <h1 className='text-xl font-bold'>{name}</h1>
                            <p className="text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2">{description}</p>
                            <p className='text-primary text-2xl font-bold group-hover:text-black'>$100/flat</p>
                            <button className='bg-black text-white px- py-2 rounded-lg'>Read More</button>
                        </div>
                        </div>
                     )
            })}
        </div>
        </div>
    </div>
  )
}

export default BestHouses;


