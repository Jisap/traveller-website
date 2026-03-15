import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from "../../Components/CommonBanner/CommonBanner"
import services from "../../Data/Services.json"
import cloud from "../../assets/AboutPage/Cloud-bg.png"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp, scaleIn, fadeInRight, fadeInLeft, floatingAnimation } from "../../Animations/variants"
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { useRef, useState } from "react"
import DestinationCtgCard from "../../Components/DestinationCtgCard/DestinationCtgCard"
import { Icon } from "@iconify/react"
import ballonLeft from "../../assets/hotballon-Left.png"
import ballonRight from "../../assets/hotballon-right.png"
import destinations from "../../Data/Destination.json"
import Testimonials from "../../Components/Index/Testimonials/Testimonials"


const Services = () => {

  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Mapeo de iconos para los servicios (actualizado con iconos más modernos y fiables)
  const iconMapping = {
    "Tour Guide": "solar:flag-2-bold",
    "Entertainment": "solar:clapperboard-play-bold",
    "Safe Flight": "solar:airplane-bold",
    "Texi & Metro": "solar:bus-bold",
    "Delicious Food": "solar:tea-cup-bold",
    "Spa & Massages": "solar:leaf-bold",
    "Interesting Rest": "solar:bed-bold",
    "Pickup & Drop": "solar:map-point-wave-bold"
  };

  // Filtrar duplicados por ID para el renderizado
  const uniqueServices = Array.from(new Map(services.map(item => [item.id, item])).values());

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
  ];
  return (
    <>
      <CommonBanner
        title="Services"
        bgImage={sectionbanner}
        breadcrumbs={breadcrumbs}
      />

      {/* --- NUEVA SECCIÓN DE SERVICIOS CREATIVA --- */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/5 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants(0.2, 0.1)}
          >
            <motion.span 
              className="text-yellow font-bold uppercase tracking-widest text-sm mb-4"
              variants={fadeInUp}
            >
              Our Experience
            </motion.span>
            <motion.h2 
              className="text-secondary text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              variants={fadeInUp}
            >
              High Quality Travel <span className="text-primary italic">Services</span>
            </motion.h2>
            <motion.p 
              className="max-w-2xl text-secondary/70 text-lg mx-auto"
              variants={fadeInUp}
            >
              We provide professional and personalized services to ensure your travel experience is 
              nothing short of extraordinary. From start to finish, we've got you covered.
            </motion.p>
            <motion.img
              src={titleShape}
              alt="titleShape"
              className="w-48 mt-4"
              variants={scaleIn}
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants(0.1, 0.2)}
          >
            {uniqueServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="group relative h-[350px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Imagen de Fondo */}
                <div className="absolute inset-0 scale-110 group-hover:scale-100 transition-transform duration-700">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Contenido de la Card */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                  <div className="mb-4 transform group-hover:-translate-y-4 transition-transform duration-500 delay-75">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 group-hover:bg-yellow group-hover:border-yellow transition-all duration-500">
                      <Icon 
                        icon={iconMapping[service.name] || "solar:star-bold"} 
                        className="text-white text-3xl group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-yellow transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <div className="h-1 w-0 bg-yellow group-hover:w-16 transition-all duration-500 rounded-full" />
                  
                  {/* Texto extra que aparece al hover (simulado para creatividad) */}
                  <p className="text-white/0 group-hover:text-white/80 text-sm mt-4 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                    Experience the best {service.name.toLowerCase()} with our expert team and premium facilities.
                  </p>
                </div>
                
                {/* Número decorativo */}
                <span className="absolute top-4 right-6 text-white/10 text-6xl font-black italic group-hover:text-white/20 transition-colors duration-500">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Puente de transición */}
      <div className="h-24 bg-linear-to-b from-white to-[#effefe]" />

      {/* Popular Destinations Section */}
      <div className="services bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-no-repeat bg-cover bg-center relative overflow-hidden"
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

      <div className="relative">
        {/* Puente: tapa el corte con el color del tope del gradiente de Testimonials */}
        <div
          className="absolute -top-16 left-0 w-full h-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #e8fafa)' }}
        />
        <Testimonials />
      </div>
    </>
  )
}

export default Services