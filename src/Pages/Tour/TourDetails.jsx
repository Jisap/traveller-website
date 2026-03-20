import React from 'react'
import { useParams } from 'react-router-dom'
import tourData from "../../Data/PopularTour.json"
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import sectionbanner from "../../assets/section-banner.jpg"
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import destination1 from "../../assets/Destination/DestinationDetailsPage/destinationdetails-image01.png"
import destination2 from "../../assets/Destination/DestinationDetailsPage/destinationdetails-image02.png"
import destination3 from "../../assets/Destination/DestinationDetailsPage/destinationdetails-image03.png"
import Mainbtn from '../../Components/Buttons/Mainbtn';
import icon1 from "../../assets/PopularToursPage/hotels.png"
import icon2 from "../../assets/PopularToursPage/sightseeing.png"
import icon3 from "../../assets/PopularToursPage/car.png"
import icon4 from "../../assets/PopularToursPage/meal.png"


import { motion } from 'framer-motion';
import { fadeInUp, containerVariants, fadeInRight, scaleIn, rotateIn } from "../../Animations/variants"


const TourDetails = () => {

  const { id } = useParams();
  const tour = tourData.find(d => d.id === parseInt(id));

  if (!tour) {
    return (
      <div className="py-20 text-center bg-[#f4fbfc] min-h-screen font-afacad">
        <h2 className="text-3xl font-bold text-secondary">Tour Not Found</h2>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Tours", url: "/tours" },
    { label: tour.title || "Tour Details", url: `/tours/${id}` },
  ];

  return (
    <>
      <CommonBanner
        bgImage={sectionbanner}
        title="Tour Details"
        breadcrumbs={breadcrumbs}
      />

      <motion.div
        className="px-[5%] lg:px-[10%] py-[6%] md:py-[10%] bg-[#efffff] flex justify-between items-start gap-10 flex-wrap lg:flex-nowrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants(0.1)}
      >
        <motion.div
          className="tour-left bg-white rounded-[2.5rem] w-full lg:w-[70%] shadow-xl shadow-secondary/5 overflow-hidden"
          variants={fadeInUp}
        >
          <div className='p-6 md:p-12'>
            <div className='flex items-center gap-2 text-secondary text-sm pb-5 font-figtree'>
              <span className='font-bold text-yellow'>({tour.review})</span>
              <div className='flex items-center'>
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon
                    key={index}
                    icon="material-symbols:star-rounded"
                    width="18"
                    height="18"
                    className="text-yellow"
                  />
                ))}
              </div>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-secondary pb-4 font-afacad'>
              {tour.title}
            </h1>

            <p className='text-md text-secondary/60 font-figtree mb-8 italic flex items-center gap-2'>
              <Icon icon="lucide:map-pin" className="text-yellow" />
              {tour.Places}
            </p>

            <motion.div className='relative group mb-12' variants={scaleIn}>
              <button className="des-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-secondary hover:bg-yellow hover:text-white transition-all duration-300 shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center">
                <Icon icon="lucide:chevron-left" width="20" height="20" />
              </button>

              <button className="des-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-secondary hover:bg-yellow hover:text-white transition-all duration-300 shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center">
                <Icon icon="lucide:chevron-right" width="20" height="20" />
              </button>

              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true
                }}
                navigation={{
                  prevEl: ".des-prev",
                  nextEl: ".des-next",
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className='rounded-[2.5rem] w-full aspect-video shadow-2xl overflow-hidden'
              >
                {[destination1, destination2, destination3].map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={item}
                      alt="tour-slide"
                      className='w-full h-full object-cover select-none'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className='text-3xl font-bold text-secondary mb-6 font-afacad flex items-center gap-3'>
                <Icon icon="lucide:info" className="text-yellow" />
                Package Overview
              </h3>
              <p className='text-secondary/70 text-lg font-figtree leading-relaxed font-light'>
                Experience Phuket, Krabi, and Phi Phi Islands with turquoise waters and scenic beaches. A perfect blend of island tours, snorkeling, and leisure time.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                {[
                  "Phuket, Krabi & Phi Phi Island stays",
                  "Snorkeling and island-hopping tours",
                  "Sunset viewpoints & beach activities",
                  "Great for couples & friends",
                  "Local Thailand travel assistance",
                  "Island tour upgrades available"
                ].map((item, i) => (
                  <div key={i} className='flex items-center gap-3 p-4 bg-[#f4fbfc] rounded-2xl border border-secondary/5'>
                    <Icon icon="material-symbols:check-circle-rounded" width="22" height="22" className='text-yellow shrink-0' />
                    <span className='text-secondary font-medium font-figtree text-sm'>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className='text-3xl font-bold text-secondary mb-8 font-afacad flex items-center gap-3'>
                <Icon icon="lucide:calendar-days" className="text-yellow" />
                Day Wise Itinerary
              </h3>

              <div className='space-y-6'>
                {Object.entries(tour.DaysDescription).map(([dayKey, dayData], index) => (
                  <motion.div
                    key={dayKey}
                    className='group'
                    variants={fadeInUp}
                  >
                    <div className='flex gap-6'>
                      <div className='flex flex-col items-center shrink-0 w-12'>
                        <div className='w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white font-bold font-afacad text-xl shadow-lg group-hover:bg-yellow group-hover:rotate-6 transition-all duration-300'>
                          {index + 1}
                        </div>
                        <div className='w-0.5 h-full bg-secondary/10 mt-2 rounded-full'></div>
                      </div>

                      <div className='flex-1 pb-10 bg-white group-hover:translate-x-2 transition-transform duration-300'>
                        <h4 className='text-2xl font-bold text-secondary font-afacad mb-4'>
                          Day {index + 1}: {dayData.title}
                        </h4>
                        <ul className='space-y-3 bg-[#f4fbfc] p-6 rounded-4xl border border-secondary/5'>
                          {dayData.list.map((item, i) => (
                            <li key={i} className='flex items-start gap-3'>
                              <Icon icon="lucide:check" width="18" height="18" className='text-yellow mt-1 shrink-0' />
                              <span className='text-secondary/70 text-sm font-figtree font-light leading-relaxed'>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.aside
          className='tour-right w-full lg:w-[30%] space-y-8'
          variants={fadeInRight}
        >
          <div className='sticky top-32 space-y-8'>
            <motion.div
              className='content bg-white p-8 md:p-10 border border-secondary/5 rounded-[2.5rem] shadow-2xl shadow-secondary/5 relative overflow-hidden'
              variants={fadeInRight}
            >
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-yellow/5 rounded-full'></div>
              <span className='block text-secondary/40 text-[10px] font-bold uppercase tracking-widest pb-2 font-figtree'>
                Starting from
              </span>

              <div className='flex items-baseline gap-1'>
                <span className='text-secondary text-5xl font-bold font-afacad tracking-tight'>
                  {tour.price}
                </span>
                <span className='text-secondary/40 text-sm font-medium font-figtree'>
                  / Per Person
                </span>
              </div>

              <Mainbtn
                text="Enquire Now"
                to="/contact"
                className='w-full justify-center mt-8 py-4 rounded-2xl shadow-xl shadow-yellow/20 font-bold'
              />
            </motion.div>

            <motion.div
              className='content bg-white p-8 md:p-10 border border-secondary/5 rounded-[2.5rem] shadow-2xl shadow-secondary/5'
              variants={fadeInRight}
            >
              <div className='flex flex-col gap-8'>
                <div className='flex items-start gap-4 group'>
                  <div className='w-12 h-12 rounded-2xl bg-[#f4fbfc] flex items-center justify-center shrink-0 group-hover:bg-yellow/10 group-hover:rotate-12 transition-all duration-300'>
                    <Icon icon="lucide:clock" className='text-yellow' width="24" />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-[10px] font-bold text-secondary/40 uppercase tracking-widest'>Duration</span>
                    <span className='text-secondary font-bold font-afacad text-lg'>{tour.Duration}</span>
                  </div>
                </div>

                <div className='flex items-start gap-4 group'>
                  <div className='w-12 h-12 rounded-2xl bg-[#f4fbfc] flex items-center justify-center shrink-0 group-hover:bg-yellow/10 group-hover:rotate-12 transition-all duration-300'>
                    <Icon icon="lucide:map-pin" className='text-yellow' width="24" />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-[10px] font-bold text-secondary/40 uppercase tracking-widest'>Places to Visit</span>
                    <span className='text-secondary font-bold font-afacad text-lg leading-tight'>{tour.Places}</span>
                  </div>
                </div>
              </div>

              <div className='relative my-10 border-t border-gray-100 pt-8'>
                <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-[10px] font-bold text-secondary/40 uppercase tracking-widest'>
                  Package Includes
                </span>
              </div>

              <div className='grid grid-cols-3 gap-4'>
                {[
                  { icon: icon1, label: "Hotels" },
                  { icon: icon3, label: "Transfer" },
                  { icon: icon4, label: "Meal" }
                ].map((item, idx) => (
                  <div key={idx} className='flex flex-col items-center gap-3 group'>
                    <div className='w-14 h-14 rounded-2xl bg-[#f4fbfc] flex items-center justify-center p-3 group-hover:bg-yellow/10 transition-colors duration-300'>
                      <img
                        src={item.icon}
                        alt={item.label}
                        className='w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300'
                      />
                    </div>
                    <span className='text-[10px] font-bold text-secondary/60 uppercase group-hover:text-yellow transition-colors duration-300'>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust Badges section */}
            <motion.div
              className='bg-white p-8 rounded-[2.5rem] border border-secondary/5 shadow-2xl shadow-secondary/5'
              variants={fadeInRight}
            >
              <h4 className='text-xl font-bold font-afacad mb-6 text-secondary'>Why book with us?</h4>
              <ul className='space-y-4 font-figtree'>
                {[
                  { icon: "lucide:shield-check", text: "Safe & Secure Payments", color: "text-green-500" },
                  { icon: "lucide:zap", text: "Instant Confirmation", color: "text-blue-500" },
                  { icon: "lucide:thumbs-up", text: "Best Price Guaranteed", color: "text-yellow" }
                ].map((item, i) => (
                  <li key={i} className='flex items-center gap-3'>
                    <Icon icon={item.icon} className={item.color} width="18" />
                    <span className='text-xs font-semibold text-secondary/70'>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Added Need Help section */}
            <motion.div
              className='bg-secondary p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group'
              variants={fadeInRight}
            >
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700'></div>
              <Icon icon="lucide:headset" className='absolute top-6 right-6 text-white/10 w-12 h-12 -rotate-12' />

              <h4 className='text-2xl font-bold font-afacad mb-2 relative z-10'>Need Help?</h4>
              <p className='text-white/60 text-sm font-figtree mb-6 relative z-10'>Our travel experts are ready to assist you 24/7.</p>

              <a href="tel:+1234567890" className='flex items-center gap-4 group/btn'>
                <div className='w-12 h-12 rounded-xl bg-yellow flex items-center justify-center shrink-0 group-hover/btn:scale-110 transition-transform'>
                  <Icon icon="lucide:phone-call" className='text-secondary' width="20" />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] uppercase font-bold text-white/40 tracking-widest'>Call us now</span>
                  <span className='text-lg font-bold font-afacad'>+1 234 567 890</span>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.aside>
      </motion.div>
    </>
  )
}

export default TourDetails