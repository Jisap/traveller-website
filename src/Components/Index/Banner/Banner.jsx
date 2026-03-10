import { Link } from "react-router-dom";
import vdo from "../../../assets/Index/banner-video.mp4";
import { Icon } from "@iconify/react";



const Banner = () => {
  return (
    <>
      <div className='banner h-100 md:h-200 w-full relative'>
        <video muted autoPlay playsInline loop className="w-full h-full object-cover">
          <source src={vdo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex justify-center items-center">
          <Link to="/" className="relative w-35 h-35 border border-white rounded-full flex justify-center items-center">
            <Icon
              icon="line-md:play-filled"
              className="w-20 h-20 bg-[rgba(255,255,255,0.3)] [box-shadow:0_5px_10px_rgba(255,255,255,0.5)] text-white rounded-full p-5 z-10"
            />

            <span className="ripple"></span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Banner