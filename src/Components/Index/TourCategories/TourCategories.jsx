import React, { useState } from "react";
import tourbg from "../../../assets/Index/TourCategories/tour-bg.jpg";
import ctg1 from "../../../assets/Index/TourCategories/Tour-Categories-01.jpg";
import ctg2 from "../../../assets/Index/TourCategories/Tour-Categories-02.jpg";
import ctg3 from "../../../assets/Index/TourCategories/Tour-Categories-03.jpg";
import ctg4 from "../../../assets/Index/TourCategories/Tour-Categories-04.jpg";
import ctg5 from "../../../assets/Index/TourCategories/Tour-Categories-05.jpg";
import ctg6 from "../../../assets/Index/TourCategories/Tour-Categories-06.jpg";

import Mainbtn from "../../Buttons/Mainbtn";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { fadeInUp, fadeInLeft, containerVariants } from "../../../Animations/variants";


const categories = [
  {
    id: 1,
    title: "Wildlife",
    pera: "Observing animals in their natural habitats like tiger safaris in Ranthambore or birdwatching in Keoladeo Ghana Bird Sanctuary has become a popular and educational form of travel.",
    image: ctg1
  },
  {
    id: 2,
    title: "Hiking",
    pera: "Here are the people who we believe most changed the stories that defined the past year.",
    image: ctg2
  },
  {
    id: 3,
    title: "Adventure Tours",
    pera: "Prime Minister Anthony Albanese has plenty of reasons to ban social media for under-16s.",
    image: ctg3
  },
  {
    id: 4,
    title: "Cultural Tours",
    pera: "The seven-time Formula One world champion moves to the iconic brand after more than a decade with Mercedes", image: ctg4
  },
  {
    id: 5,
    title: "Cruise Tours",
    pera: "TIME solicited nominations of places including hotels, cruises, restaurants, attractions, museums, parks, and more from around the world.",
    image: ctg5
  },
  {
    id: 5,
    title: "Dark Tourism",
    pera: "After inauguration day, it is on Trump and America to ensure that the oath to defend the U.S. Constitution is kept.",
    image: ctg6
  },
  {
    id: 6,
    title: "View All",
    isButton: true
  }
];

const TourCategories = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div
        className='tour-ctg-container bg-no-repeat bg-center bg-cover px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex flex-col xl:flex-row gap-12 relative'
        style={{ backgroundImage: `url(${tourbg})` }}
      >
        <div className="ctg-content w-full xl:w-[40%] flex flex-col justify-center relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h3 className="text-secondary font-afacad text-4xl font-medium pb-2">
                {categories[activeIndex].title}
              </h3>

              <p className="text-lg lg:max-w-sm text-secondary/70 mb-5">
                {categories[activeIndex].pera}
              </p>

              <Mainbtn
                text="View All"
                className="w-fit"
                to="/tours"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="ctg-wrap w-full xl:w-[60%] relative mb-14"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button className="ctg-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
            <Icon icon="ep:arrow-left-bold" width="24" height="24" />
          </button>

          <button className="ctg-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
            <Icon icon="ep:arrow-right-bold" width="24" height="24" />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              prevEl: ".ctg-prev",
              nextEl: ".ctg-next",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full h-full"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                {cat.isButton ? (
                  <motion.div
                    variants={containerVariants(0.1, index * 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center items-center h-full"
                  >
                    <Mainbtn
                      text="View All"
                      className="text-sm!"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    variants={containerVariants(0.1, index * 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={
                      `ctg-item bg-white p-5 rounded-2xl w-full transition-transform duration-500 
                     ${activeIndex === index   // comparar por index directo
                        ? "scale-100 rotate-0" // activo: recto // inactivo : inclinado
                        : "scale-75 rotate-6"}  
                    `}
                  >
                    <div className="ctg-image rounded-2xl overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <span className="text-center pt-2 block text-2xl lg:text-3xl font-medium text-secondary font-afacad">
                      {cat.title}
                    </span>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="relative lg:absolute xl:right-40 bottom-8 flex flex-col text-white font-kaushan! text-xl sm:text-2xl xl:text-start text-end xl:text-5xl z-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Wonderful Place For you

          <h2 className="uppercase font-afacad! font-extrabold text-4xl lg:text-6xl xl:text-8xl text-yellow">
            Tour Categories
          </h2>
        </motion.div>
      </div>
    </>
  )
}

export default TourCategories