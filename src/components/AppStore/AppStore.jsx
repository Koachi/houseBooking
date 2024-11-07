"use client";
import Image from "next/image";
import React from "react";
import  HomeHunt from "../../assets/homeHunt.jpg";
import AppStoreImg from "../../assets/apple.png";
import PlayStoreImg from "../../assets/playstore.png";

const AppStore = () => {
    return (
        <div className="bg-[#f5f5f5] dark:bg-black dark:text-white">
            <div className="container">
                {/* header title section */}
                <div className="space-y-3 uppercase text-center py-14">
                    <p  data-aos="fade-up"
                        className="text-primary text-2xl font-semibold"
                    >
                        Download
                    </p>
                    <h1 data-aos="fade-up"
                        data-aos-delays="300"
                        className="text-3xl font-bold"
                    >
                        Best Rental Service
                    </h1>
                </div>
                {/**Card Section*/}
                <div data-aos="fade-up"
                     className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
                        {/* text-content section */}
                    <div className="space-y-8 max-w-[400px] mx-auto">
                        <h1 className="text-2xl font-bold">
                            Download the rental voucher app free! Get Exciting New Offers
                        </h1>
                        <p>
                            Search for houses of your choice frrom business location class, luxury to affordable student priced
                            You will get more discounted offer with the more people you refer to the app who actually do transactions
                        </p>
                        {/**App store Logo section */}
                        <div className= "flex flex-wrap justify-center sm:justify-start items-center">
                            <a href="#">
                                <Image
                                    src={AppStoreImg}
                                    alt=""
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                            </a>
                            <a href="#">
                                <Image
                                    src={PlayStoreImg}
                                    alt=""
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                            </a>
                        </div>
                    </div>
                    {/* Image section */}
                    <div>
                        <Image src={HomeHunt} alt="" className="max-w-[400px]" />
                    </div>
                </div>
        </div>
    </div>
    )

}

export default AppStore;

