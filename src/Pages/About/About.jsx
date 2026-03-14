import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from "../../Components/CommonBanner/CommonBanner"
import PageTransition from "../../Components/Transition/PageTransition"
import icon1 from "../../assets/Index/About/travel-guide.png"
import icon2 from "../../assets/Index/About/mission-icon.png"
import Mainbtn from "../../Components/Buttons/Mainbtn"
import author1 from "../../assets/Index/About/pic1.jpg"
import author2 from "../../assets/Index/About/pic2.jpg"
import author3 from "../../assets/Index/About/pic3.jpg"
import airplane from "../../assets/Index/About/airplane.png"
import aboutimg from "../../assets/AboutPage/abt-pic1.png"
import aboutimg1 from "../../assets/Index/About/about-image01.jpg"
import aboutimg2 from "../../assets/Index/About/about-image02.jpg"
import aboutimg3 from "../../assets/Index/About/about-image03.jpg"
import cloud from "../../assets/AboutPage/Cloud-bg.png"
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png"
import StepsIcon1 from "../../assets/Index/BookingSteps/Steps-Icon1.png"
import StepsIcon2 from "../../assets/Index/BookingSteps/Steps-Icon2.png"
import StepsIcon3 from "../../assets/Index/BookingSteps/Steps-Icon3.png"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp, scaleIn, fadeInRight, fadeInLeft, floatingAnimation } from "../../Animations/variants"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import ballonLeft from "../../assets/hotballon-Left.png"
import ballonRight from "../../assets/hotballon-right.png"
import { Icon } from "@iconify/react"
import { useRef, useState } from "react"
import destinations from "../../Data/Destination.json"
import DestinationCtgCard from "../../Components/DestinationCtgCard/DestinationCtgCard"


/**
 * About Page
 * Uses the reusable CommonBanner and wraps content in PageTransition.
 */
const About = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" }
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <PageTransition>
      <CommonBanner
        title="About Us"
        bgImage={sectionbanner}
        breadcrumbs={breadcrumbs}
      />

      {/* Main About Section */}
      <div className="px-[2%] ms:px-[8%] lg:px-[12%] py-[8%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-[800px] bg-yellow-light overflow-hidden">
        
        {/* Left Side: Content (Title and List) */}
        <motion.div
          className="w-full xl:w-[50%] title relative h-full flex flex-col justify-center"
          variants={containerVariants(0.15, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3 leading-tight"
            variants={fadeInUp}
          >
            We <span className="text-yellow"> Recommend</span>
            <br /> Beautiful Destinations Every Month
          </motion.h1>

          <motion.p className="text-gray-500 pb-5 text-lg" variants={fadeInUp}>
            Traveller is a multi-award-winning strategy and content creation agency that specializes in travel marketing. They have one of the world's largest and most influential online travel communities, helping brands and tourism.
          </motion.p>

          <motion.ul className="space-y-4" variants={containerVariants(0.1, 0.1)}>
            <motion.li
              className="flex items-center flex-wrap md:flex-nowrap border border-secondary/10 p-5 gap-5 rounded-2xl bg-white/40 backdrop-blur-md shadow-sm"
              variants={fadeInUp}
            >
              <img src={icon1} alt="icon1" className="w-14 h-14 object-contain" />
              <div>
                <span className="text-xl font-bold text-secondary">Trusted travel guide</span>
                <p className="text-gray-600">Provides reliable information to help travelers plan their trips efficiently and safely.</p>
              </div>
            </motion.li>

            <motion.li
              className="flex items-center flex-wrap md:flex-nowrap border border-secondary/10 p-5 gap-5 rounded-2xl bg-white/40 backdrop-blur-md shadow-sm"
              variants={fadeInUp}
            >
              <img src={icon2} alt="icon2" className="w-14 h-14 object-contain" />
              <div>
                <span className="text-xl font-bold text-secondary">Mission & Vision</span>
                <p className="text-gray-600">Aims to connect people to positive experiences through travel, helping them see the world differently.</p>
              </div>
            </motion.li>
          </motion.ul>

          <motion.div className="flex items-center flex-wrap gap-10 pt-10" variants={fadeInUp}>
            <Mainbtn text={"Discover More"} to="/about" />
            <div className="flex items-center gap-5">
              <motion.div
                className="author-img flex items-center"
                variants={containerVariants(0.1, 0.2)}
              >
                <motion.img src={author1} alt="authore1" className="w-11 h-11 rounded-full border-2 border-white shadow-sm" variants={scaleIn} />
                <motion.img src={author2} alt="authore2" className="w-11 h-11 rounded-full -mx-4 border-2 border-white shadow-sm z-1" variants={scaleIn} />
                <motion.img src={author3} alt="authore3" className="w-11 h-11 rounded-full border-2 border-white shadow-sm" variants={scaleIn} />
              </motion.div>
              <div className="text-md">
                <span className="block text-2xl font-black text-secondary leading-none">3.5k</span>
                <span className="text-gray-500 font-medium">Happy Customers</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Illustration with animation from the left */}
        <motion.div 
          className="about-image w-full xl:w-[45%] relative flex justify-center items-center h-full min-h-[400px]"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full h-full top-0 left-0 flex justify-center items-center absolute z-0">
            <span className="lg:h-120 h-80 w-80 lg:w-120 bg-[#fff1da] rounded-full"></span>
          </div>
          <img
            src={aboutimg}
            alt="aboutimg"
            className="w-auto z-1"
          />
        </motion.div>

      </div>

      {/* Popular Destinations Section */}
      <div className="popular-destination bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-no-repeat bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${cloud})` }}
      >
        <motion.div
          className="title flex flex-col justify-center items-center text-center relative pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants(0.2, 0.1)}
        >
          <motion.h1 className="text-secondary text-4xl md:text-6xl font-bold" variants={fadeInUp}>
            Popular <span className="text-yellow">Destinations</span>
          </motion.h1>

          <motion.p className="text-secondary my-2 text-lg" variants={fadeInUp}>
            Destinations worth exploring! Here are a few popular spots
          </motion.p>

          <motion.img
            src={titleShape}
            alt="titleShape"
            className="w-[35%] object-contain absolute -bottom-12"
            variants={scaleIn}
          />
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={setSwiperInstance}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="destination-swiper mt-10"
          >
            {destinations.map((item) => (
              <SwiperSlide key={item.id}>
                <DestinationCtgCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg hover:bg-yellow transition duration-300 cursor-pointer"
          >
            <Icon icon="lsicon:left-filled" width="35" height="35" />
          </button>

          <button
            ref={nextRef}
            onClick={() => swiperInstance?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg hover:bg-yellow transition duration-300 cursor-pointer"
          >
            <Icon icon="lsicon:right-outline" width="35" height="35" />
          </button>
        </motion.div>

        {/* Hot Air Balloons with floating effects */}
        <motion.div
          className="left-hot-ballon"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={ballonLeft}
            alt="ballonleft"
            animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="right-hot-ballon"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={ballonRight}
            alt="ballonright"
            animate={{ y: [0, -40, 0], x: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default About