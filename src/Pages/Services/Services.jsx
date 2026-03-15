import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from "../../Components/CommonBanner/CommonBanner"

const Services = () => {
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