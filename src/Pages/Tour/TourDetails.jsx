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

      <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#efffff] flex justify-between items-start gap-10 flex-wrap lg:flex-nowrap">
        <div className="tour-left bg-white rounded-3xl w-full lg:w-[70%]">
          <div className='p-5 md:p-10'>
            <div className='flex items-center gap-2 text-secondary text-sm pb-5'>
              ({tour.review})
              <div className='flex items-center'>
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon
                    key={index}
                    icon="material-symbols:star-rounded"
                    width="16"
                    height="16"
                    className="text-yellow"
                  />
                ))}

              </div>
            </div>
            <h3 className='text-4xl font-semibold text-secondary pb-3'>
              {tour.title}
            </h3>

            <p className='text-sm text-secondary'>
              {tour.Places}
            </p>

            <div className='relative pt-8 group'>
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
                      alt={item.name}
                      className='w-full h-full object-cover select-none'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <h3 className='text-4xl font-medium text-secondary pb-5 pt-8'>
              Package Overview
            </h3>

            <p className='text-secondary text-md'>
              Experience Phuket, Krabi, and Phi Phi Islands with turquoise waters and scenic beaches. A perfect blend of island tours, snorkeling, and leisure time.
            </p>

            <ul className='space-y-5 pt-5'>
              <li className='flex items-center gap-2 text-secondary font-normal'>
                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className='text-prim' />
                <span className=''>
                  Phuket, Krabi & Phi Phi Island stays
                </span>
              </li>
              <li className='flex items-center gap-2 text-secondary font-normal'>
                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className='text-prim' />
                <span className=''>
                  Snorkeling and island-hopping tours
                </span>
              </li>
              <li className='flex items-center gap-2 text-secondary font-normal'>
                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className='text-prim' />
                <span className=''>
                  Sunset viewpoints & beach activities
                </span>
              </li>
              <li className='flex items-center gap-2 text-secondary font-normal'>
                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className='text-prim' />
                <span className=''>
                  Great for couples & friends
                </span>
              </li>
            </ul>

            <h3 className='text-4xl font-medium text-secondary pb-5 pt-8'>
              Additional Easemytrip Delights
            </h3>

            <ul className='space-y-5 pt-5'>
              <li className='flex items-center gap-2 text-secondary font-normal'>
                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className='text-prim' />
                <span className=''>
                  Local Thailand travel assistance.
                </span>
              </li>
              <li className='flex items-center gap-2 text-secondary font-normal'>
                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className='text-prim' />
                <span className=''>
                  Island tour upgrades available.
                </span>
              </li>
            </ul>

            <h3 className='text-4xl font-medium text-secondary pb-5 pt-8'>
              Day Wise Itinerary
            </h3>

            <div className='bg-yellow-light p-5 md:p-10 rounded-3xl'>
              {Object.entries(tour.DaysDescription).map(([dayKey, dayData], index) => (
                <div key={dayKey} className='list-count flex items-start flex-col md:flex-row mb-8 gap-3'>
                  <div className='duration text-center min-w-12'>
                    <div className='media w-11.5 h-11.5 bg-yellow rounded-full flex items-center justify-center mt-1.25'>
                      <div className='green-bg w-9.5 h-9.5 bg-secondary rounded-full flex justify-center items-center font-afacad text-2xl font-bold text-white'>
                        {index + 1}
                      </div>
                    </div>

                    <span className='text-lg inline-block text-secondary uppercase font-medium'>
                      Day
                    </span>
                  </div>

                  <div className='info md:ps-10 flex-1'>
                    <h4 className='text-2xl font-medium text-secondary font-figtree pb-5'>
                      Day {index + 1}: {dayData.title}
                    </h4>

                    <ul className='space-y-3'>
                      {dayData.list.map((item, i) => (
                        <li key={i} className='flex items-start flex-wrap gap-2'>
                          <Icon icon="material-symbols:check-circle-rounded" width="18" height="18" className='text-yellow-500 mt-1 min-h-5' />
                          <span className='text-secondary text-sm'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='tour-right w-full lg:w-[30%]'>
          <div className='content bg-white p-5 md:p-10 border border-gray-200 rounded-3xl'>
            <span className='block text-secondary text-sm font-medium pb-2'>
              Starting from
            </span>

            <span className='text-secondary text-5xl font-semibold font-figtree'>
              {tour.price}
            </span>

            <span className='text-secondary text-sm font-normal'>
              / Per Person
            </span>

            <Mainbtn
              text="Enquire Now"
              className='block! w-fit! mt-6!'
            />
          </div>

          <div className='content bg-white p-5 md:p-10 border border-gray-200 rounded-3xl mt-8'>
            <div className='flex flex-col gap-6'>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-full bg-[#f4fbfc] flex items-center justify-center shrink-0'>
                  <Icon icon="lucide:clock" className='text-yellow' width="20" />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] font-bold text-secondary/40 uppercase tracking-widest'>Duration</span>
                  <span className='text-secondary font-bold font-figtree'>{tour.Duration}</span>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-full bg-[#f4fbfc] flex items-center justify-center shrink-0'>
                  <Icon icon="lucide:map-pin" className='text-yellow' width="20" />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] font-bold text-secondary/40 uppercase tracking-widest'>Places to Visit</span>
                  <span className='text-secondary font-bold font-figtree leading-relaxed'>{tour.Places}</span>
                </div>
              </div>
            </div>

            <div className='relative my-10 border-t border-gray-100 pt-8'>
              <span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 text-xs font-bold text-secondary/40 uppercase tracking-widest'>
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
                  <div className='w-16 h-16 rounded-2xl bg-[#f4fbfc] flex items-center justify-center p-3 group-hover:bg-yellow/10 transition-colors duration-300'>
                    <img 
                      src={item.icon} 
                      alt={item.label} 
                      className='w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300' 
                    />
                  </div>
                  <span className='text-xs font-bold text-secondary/60 uppercase group-hover:text-yellow transition-colors duration-300'>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourDetails