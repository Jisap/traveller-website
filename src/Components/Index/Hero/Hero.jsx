

import headerbg from "../../../assets/Index/Hero/slider-bg.jpg"
import heroimg from "../../../assets/Index/Hero/right-pic.png"
import plane from "../../../assets/Index/Hero/Plane-With-Line.png"
import cloud1 from "../../../assets/Index/Hero/Cloud1.png"
import cloud2 from "../../../assets/Index/Hero/Cloud2.png"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"


const Hero = () => {
  return (
    <div
      className='hero relative bg-cover bg-center min-h-screen xl:min-h-0 overflow-hidden'
      style={{ backgroundImage: `url(${headerbg})` }}
    >
      <div className="bg-overlay mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-25 xl:h-screen flex items-center xl:flex-row flex-col xl:gap-0 gap-20">
        <div className="hero-content w-full xl:ps-12.5 z-1">
          <h3 className="text-5xl text-white font-kaushan!">
            Discover
          </h3>

          <h1 className="font-kaushan! font-semibold text-[160px] text-white hero-title">
            The World
          </h1>

          <div className="mt-5 md:mt-10">
            <p className="text-white pera-text">
              The Safety of our customers at all stages
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero