import React from 'react'
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import sectionbanner from "../../assets/section-banner.jpg"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp, scaleIn } from "../../Animations/variants"
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png"
import tourData from "../../Data/PopularTour.json"
import PopularTourCard from "../../Components/PopularTourCard/PopularTourCard"

const breadcrumbs = [
  { label: "Home", url: "/" },
  { label: "Tours", url: "/tours" },
];

const Tour = () => {
  return (
    <>
      <CommonBanner
        bgImage={sectionbanner}
        title="Tours"
        breadcrumbs={breadcrumbs}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants(0.15, 0.2)}
        className="relative bg-gradient-to-br from-[#e8fafa] via-[#f0fefe] to-[#dff6f6] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] overflow-hidden"
      >
        <div className="title flex flex-col justify-center items-center text-center relative mb-14">
          <motion.h1
            className="text-secondary text-4xl md:text-6xl font-bold"
            variants={fadeInUp}
          >
            <span className="text-yellow"> Explore Popular </span> Tours!
          </motion.h1>

          <motion.p
            className="text-secondary/70 my-2 text-lg"
            variants={fadeInUp}
          >
            Destinations worth exploring! Here are a few popular spots
          </motion.p>

          <motion.img
            src={titleShape}
            alt="titleShape"
            className="w-[45%] object-contain absolute -bottom-12"
            variants={scaleIn}
          />
        </div>


        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {tourData.slice(0, 4).map((tour) => (
            <PopularTourCard key={tour.id} tour={tour} />

          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Tour