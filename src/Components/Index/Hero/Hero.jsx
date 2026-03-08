

import headerbg from "../../../assets/Index/Hero/slider-bg.jpg"
import heroimg from "../../../assets/Index/Hero/right-pic.png"
import plane from "../../../assets/Index/Hero/Plane-With-Line.png"
import cloud1 from "../../../assets/Index/Hero/Cloud1.png"
import cloud2 from "../../../assets/Index/Hero/Cloud2.png"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import Mainbtn from "../../Buttons/Mainbtn"
import { ShineButton } from "../../Buttons/ShineButton"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp, fadeInRight, scaleIn, bounceIn, rotateIn } from "../../../Animations/variants"


const Hero = () => {
  return (
    <div
      className='hero relative bg-cover bg-center min-h-screen xl:min-h-0 overflow-hidden'
      style={{ backgroundImage: `url(${headerbg})` }}
    >
      <div className="bg-overlay mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-25 xl:h-screen flex items-center xl:flex-row flex-col xl:gap-0 gap-20">
        <motion.div
          className="hero-content w-full xl:ps-12.5 z-1"
          variants={containerVariants(0.18, 0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-5xl text-white font-kaushan!"
            variants={fadeInUp}
          >
            Discover
          </motion.h3>

          <motion.h1
            className="font-kaushan! font-semibold text-[160px] text-white hero-title"
            variants={fadeInUp}
          >
            The World
          </motion.h1>

          <motion.div className="mt-5 md:mt-10" variants={fadeInUp}>
            <p className="text-white pera-text">
              The Safety of our customers at all stages
            </p>

            <div className="mb-8">
              <Mainbtn text="Get in Touch" to="/contact" />
            </div>

            <motion.div
              className="flex items-start md:items-center flex-col md:gap-0 gap-4 md:flex-row text-gray-50"
              variants={fadeInUp}
            >
              <span className="follow-icons">
                Follow Us
              </span>

              <ul className="flex items-center space-x-3">
                <li>
                  <Link to="https://www.facebook.com" className="hover:text-prim hover:-translate-y-2 transition-all duration-300">
                    <Icon icon="ic:baseline-facebook" width={24} height={24} />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com" className="hover:text-prim hover:-translate-y-2 transition-all duration-300">
                    <Icon icon="lets-icons:insta" width={24} height={24} />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com" className="hover:text-prim hover:-translate-y-2 transition-all duration-300">
                    <Icon icon="ri:linkedin-fill" width={24} height={24} />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com" className="hover:text-prim hover:-translate-y-2 transition-all duration-300">
                    <Icon icon="mdi:youtube" width={24} height={24} />
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="hero-image w-full xl:w-1/2 relative xl:absolute flex justify-center items-center right-0 xl:right-35 xl:bottom-0 h-full">
          {/* Wrapper for Entry Animation (Rotate, Scale, Opacity) */}
          <motion.div
            variants={rotateIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="z-2 xl:translate-y-15 w-full h-full xl:w-auto flex justify-center items-center"
          >
            {/* Inner Image for Infinite Floating Animation */}
            <motion.img
              src={heroimg}
              alt="hero-img"
              className="w-full h-full xl:w-auto z-2"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5, // Total wait: Entry (0.6) + Entry duration (1.2) + buffer
              }}
            />
          </motion.div>

          <motion.div
            className="plan absolute w-120 h-auto top-50 -left-10 xl:block hidden"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <img
              src={plane}
              alt="plan"
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            className="offer flex flex-col"
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <span>Get Up To</span>
            <span>50% </span>
            <span>Discount</span>
          </motion.div>
        </div>

        <motion.div
          className="circle-area absolute top-0 left-0 bottom-0 right-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="circle1-wrap">
            <div className="rotate-center circle-bg circle1-bg">
              <span>
              </span>
            </div>
          </div>

          <div className="circle2-wrap">
            <div className="rotate-center-reverse circle-bg circle2-bg">
            </div>
          </div>

          <div className="circle3-wrap">
            <div className="rotate-center circle-bg circle3-bg">
              <span></span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="cloud1">
        <div className="cloud-image1 relative overflow-hidden z-0">
          <img src={cloud1} alt="cloud1" className="w-auto" />
        </div>
      </div>
      <div className="cloud2">
        <div className="cloud-image2 relative overflow-hidden z-0">
          <img src={cloud2} alt="cloud2" className="w-auto" />
        </div>
      </div>
    </div>
  )
}

export default Hero