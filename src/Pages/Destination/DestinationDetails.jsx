import React from 'react'
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import sectionbanner from "../../assets/section-banner.jpg"
import { Navigate, useParams } from 'react-router-dom';
import destinations from "../../Data/Destination.json"
import destination1 from "../../assets/Destination/DestinationDetailsPage/destinationdetails-image01.png"
import destination2 from "../../assets/Destination/DestinationDetailsPage/destinationdetails-image02.png"
import destination3 from "../../assets/Destination/DestinationDetailsPage/destinationdetails-image03.png"
import Mainbtn from '../../Components/Buttons/Mainbtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { fadeInUp, containerVariants, fadeInRight, scaleIn } from '../../Animations/variants';


const DestinationDetails = () => {

  const { id } = useParams();
  const destination = destinations.find(d => d.id === parseInt(id));
  
  if (!destination) {
    return (
      <div className="py-20 text-center bg-[#f4fbfc] min-h-screen">
        <h2 className="text-3xl font-bold text-secondary font-afacad">Destination Not Found</h2>
        <Mainbtn text="Back to Destinations" className="mt-6" onClick={() => window.history.back()} />
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Destination", url: "/destination" },
    { label: destination ? destination.name : "Destination Details", url: `/destination/${id}` },
  ];

  return (
    <>
      <CommonBanner
        title="Destination Details"
        breadcrumbs={breadcrumbs}
        bgImage={sectionbanner}
      />

      <div className='bg-[#f4fbfc] w-full px-[5%] lg:px-[10%] py-[6%] md:py-[10%] min-h-screen'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            
            {/* --- Left Column: Main Content (8 cols) --- */}
            <motion.div 
              className='lg:col-span-8 space-y-12'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants(0.1)}
            >
              
              {/* Image Carousel Section */}
              <div className='relative group'>
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
                        alt={destination.name}
                        className='w-full h-full object-cover select-none'
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Description Section */}
              <motion.div 
                className='bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-50'
                variants={fadeInUp}
              >
                <div className='mb-8'>
                  <span className='text-yellow font-bold uppercase tracking-widest text-sm mb-2 block font-afacad'>Discover</span>
                  <h2 className='text-4xl md:text-5xl font-bold text-secondary mb-6 font-afacad'>
                    Exploring {destination.name}
                  </h2>
                  <div className='w-20 h-1.5 bg-yellow rounded-full'></div>
                </div>

                <p className='text-lg text-gray-600 leading-relaxed font-figtree font-light'>
                  {destination.name} is a dynamic city where skyscrapers meet traditional markets and vibrant street life. 
                  Enjoy stunning harbor views, world-class shopping, and rich cultural experiences that blend the ancient with the futuristic. 
                  Whether you're exploring hidden temples or dining in Michelin-starred restaurants, this destination offers an unforgettable journey into the heart of its unique heritage.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div className='space-y-8' variants={fadeInUp}>
                <h3 className='text-3xl font-bold text-secondary font-afacad flex items-center gap-3'>
                  <Icon icon="lucide:sparkles" className="text-yellow" />
                  Destination Highlights
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {[
                    { title: "Historical Insights", desc: "Detailed explanations of local history and heritage landmarks." },
                    { title: "Cultural Immersion", desc: "Deep dive into local traditions, art, and daily lifestyle." },
                    { title: "Modern Logistics", desc: "Seamless hotel check-ins and efficient transport coordination." },
                    { title: "Local Gastronomy", desc: "Curated dining experiences from street food to fine dining." },
                    { title: "Safety First", desc: "Professional safety guidance and local etiquette tips." },
                    { title: "Customized Trips", desc: "Tailor-made itineraries based on your personal interests." }
                  ].map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className='flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 hover:border-yellow/30 hover:shadow-md transition-all group'
                      variants={scaleIn}
                    >
                      <div className='w-12 h-12 rounded-2xl bg-[#f0fefe] flex items-center justify-center text-yellow group-hover:bg-yellow group-hover:text-white transition-colors shrink-0'>
                        <Icon icon="ph:seal-check-fill" width="24" height="24" />
                      </div>
                      <div>
                        <h4 className='font-bold text-secondary text-lg mb-1 font-afacad'>{feature.title}</h4>
                        <p className='text-sm text-gray-500 font-figtree font-light'>{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Related Packages Placeholder */}
              <motion.div 
                className='bg-secondary p-10 rounded-[2.5rem] text-white overflow-hidden relative'
                variants={fadeInUp}
              >
                <div className='relative z-10'>
                   <h3 className='text-3xl font-bold font-afacad mb-4'>Ready for Adventure?</h3>
                   <p className='text-white/70 text-lg mb-0 font-figtree font-light'>
                     No specific tour packages found for this exact location yet, but we can create a custom one just for you!
                   </p>
                </div>
                <Icon icon="lucide:palmtree" className='absolute -right-10 -bottom-10 w-60 h-60 text-white/5 rotate-12' />
              </motion.div>
            </motion.div>

            {/* --- Right Column: Sidebar (4 cols) --- */}
            <aside className='lg:col-span-4 space-y-8'>
              <div className='sticky top-32 space-y-8'>
                
                {/* Contact Card */}
                <motion.div 
                  className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-yellow/10 relative overflow-hidden"
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className='absolute top-0 right-0 p-4'>
                    <Icon icon="lucide:send" className='text-yellow/20 w-12 h-12 -rotate-12' />
                  </div>

                  <h3 className="text-secondary text-3xl font-bold font-afacad mb-2">
                    Get a Quote
                  </h3>
                  <p className="text-gray-500 mb-8 font-figtree font-light">
                    Interested in visiting {destination.name}? Drop us a message!
                  </p>

                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-figtree">
                    <div className='space-y-1'>
                      <label className='text-xs font-bold text-secondary/40 uppercase ml-4'>Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-2xl px-6 py-4 bg-[#f4fbfc] text-secondary placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none font-figtree border border-transparent focus:border-yellow/20 transition-all"
                        required
                      />
                    </div>
                    <div className='space-y-1'>
                      <label className='text-xs font-bold text-secondary/40 uppercase ml-4'>Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-2xl px-6 py-4 bg-[#f4fbfc] text-secondary placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none font-figtree border border-transparent focus:border-yellow/20 transition-all"
                        required
                      />
                    </div>
                    <div className='space-y-1'>
                      <label className='text-xs font-bold text-secondary/40 uppercase ml-4'>Message</label>
                      <textarea
                        placeholder="Tell us about your trip..."
                        rows="4"
                        className="w-full rounded-2xl px-6 py-4 bg-[#f4fbfc] text-secondary placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none resize-none font-figtree border border-transparent focus:border-yellow/20 transition-all"
                        required
                      />
                    </div>
                    <div className='pt-2'>
                      <Mainbtn
                        type="submit"
                        text="Send Inquiry"
                        className="w-full justify-center py-4 rounded-2xl shadow-lg shadow-yellow/20 font-bold"
                      />
                    </div>
                  </form>
                </motion.div>

                {/* Quick Info Card */}
                <motion.div 
                  className='bg-secondary p-8 rounded-[2.5rem] text-white shadow-xl'
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                   <h4 className='text-xl font-bold mb-6 font-afacad pb-4 border-b border-white/10 italic'>Destination Details</h4>
                   <ul className='space-y-4 font-figtree'>
                      <li className='flex items-center justify-between'>
                        <span className='text-white/50 text-sm'>Country</span>
                        <span className='font-bold'>{destination.country || 'N/A'}</span>
                      </li>
                      <li className='flex items-center justify-between'>
                        <span className='text-white/50 text-sm'>Best Time</span>
                        <span className='font-bold'>All Year Round</span>
                      </li>
                      <li className='flex items-center justify-between'>
                        <span className='text-white/50 text-sm'>Category</span>
                        <span className='font-bold'>Adventure</span>
                      </li>
                   </ul>
                </motion.div>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationDetails