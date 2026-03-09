"use client"


import manRock from "../../../assets/Index/TopDestination/man-rock.png";
import Customer1 from "../../../assets/Index/TopDestination/Customer-1.jpg";
import Customer2 from "../../../assets/Index/TopDestination/Customer-2.jpg";
import Customer3 from "../../../assets/Index/TopDestination/Customer-3.jpg"
import Mainbtn from "../../Buttons/Mainbtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react"


const TopDestination = () => {
  return (
    <>
      <div className="px-[2%] sm:px-[5%] lg:px-[5%] py-[5%] bg-[#DBEEEE]">
        <div className="bg-secondary px-[2%] sm:px-[3%] py-[5%] rounded-2xl relative">
          <img
            src={manRock}
            alt="manRock"
            className="absolute right-0 top-0 h-auto z-0"
          />

          <div className="w-full flex flex-col xl:flex-row gap-5 justify-between items-center pb-10 z-1 relative">
            <div className="w-full xl:w-1/2">
              <h2 className="text-5xl text-white font-bold">
                <span className="text-yellow"> Most Favorite </span> Tour Places
              </h2>

              <p className="text-gray-300 tracking-wide my-3">
                Choosing a destination can be exciting but also a bit overwhelming with so many amazing places out there! Let's narrow it down a little. Are you dreaming of peaceful nature, buzzing cities, historical wonders, or relaxing beaches?
              </p>

              <div className="flex items-center my-5">
                <div className="flex items-center">
                  <img src={Customer1} alt="Customer1" className="w-10 h-10 rounded-full object-cover border border-white" />
                  <img src={Customer2} alt="Customer2" className="w-10 h-10 rounded-full object-cover border border-white -translate-x-2" />
                  <img src={Customer3} alt="Customer3" className="w-10 h-10 rounded-full object-cover border border-white -translate-x-4" />
                </div>

                <div>
                  <h3 className="text-3xl text-prim font-semibold">
                    3.5K
                  </h3>

                  <p className="text-white">
                    Happy Customers
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <Mainbtn
                  text="View More Destination"
                  to="/destination"
                />
              </div>
            </div>

            <div className="w-full xl:w-1/1 xl:ps-10">
              <h1 className="text-3xl sm:text-5xl md:text-8xl lg:text-9xl font-bold text-yellow uppercase">
                Top!
                <span className="text-white block"> Destination</span>
              </h1>
            </div>
          </div>

          <div className="relative w-full">
            <button className="swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow-lg">
              <Icon icon="ep:arrow-left-bold" width="24" height="24" />
            </button>

            <button className="swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow-lg">
              <Icon icon="ep:arrow-right-bold" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopDestination