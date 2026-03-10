
import { motion } from "framer-motion"
import { containerVariants, fadeInUp, scaleIn } from "../../../Animations/variants"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import titleShape from "../../../assets/Index/BookingSteps/Title-Shape.png"
import tst1 from "../../../assets/Index/Testimonials/testimonials-01.jpg"
import tst2 from "../../../assets/Index/Testimonials/testimonials-02.jpg"
import tst3 from "../../../assets/Index/Testimonials/testimonials-03.jpg"
import tst4 from "../../../assets/Index/Testimonials/testimonials-04.jpg"
import tst5 from "../../../assets/Index/Testimonials/testimonials-05.jpg"
import tst6 from "../../../assets/Index/Testimonials/testimonials-06.jpg"
import quote from "../../../assets/Index/Testimonials/Quote.png"
import { Icon } from "@iconify/react"

const testimonials = [
  { id: 1, name: "Kavin Martin", image: tst1 },
  { id: 2, name: "Alex Morgan", image: tst2 },
  { id: 3, name: "John Carter", image: tst3 },
  { id: 4, name: "Sophia Lee", image: tst4 },
  { id: 5, name: "Daniel Smith", image: tst5 },
  { id: 6, name: "Emma Watson", image: tst6 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const Testimonials = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants(0.15, 0.2)}
      className="relative bg-gradient-to-br from-[#e8fafa] via-[#f0fefe] to-[#dff6f6] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="title flex flex-col justify-center items-center text-center relative mb-14">
        <motion.h1
          className="text-secondary text-4xl md:text-6xl font-bold"
          variants={fadeInUp}
        >
          <span className="text-yellow"> Our Clients </span> Says!
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
          className="w-[35%] object-contain absolute -bottom-12"
          variants={scaleIn}
        />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={28}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={item.id} className="py-4">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="
                group relative
                bg-white/65 backdrop-blur-md
                border border-white/90
                rounded-3xl
                shadow-xl shadow-teal-100/50
                hover:shadow-2xl hover:shadow-teal-200/60
                transition-shadow duration-300
                p-5 md:p-8
                flex flex-col items-center
                lg:flex-row lg:items-start
                gap-5 lg:gap-6
                w-full max-w-md sm:max-w-full mx-auto
              "
            >
              {/* Quote icon */}
              <motion.img
                src={quote}
                alt="quote"
                initial={{ opacity: 0.15, rotate: -10 }}
                whileHover={{ opacity: 0.45, rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 lg:top-5 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 pointer-events-none"
              />

              {/* Avatar */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 lg:gap-3">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="
                    w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-36 lg:h-36
                    rounded-2xl overflow-hidden
                    ring-4 ring-yellow/50
                    shadow-lg shadow-yellow/25
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, type: "spring", stiffness: 300 }}
                    >
                      <Icon
                        icon="material-symbols:star-rounded"
                        width="22"
                        height="22"
                        className="text-yellow"
                      />
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col text-center lg:text-left w-full">
                <motion.h2
                  className="text-2xl md:text-3xl font-kaushan! text-secondary leading-tight"
                  variants={fadeInUp}
                >
                  {item.name}
                </motion.h2>

                <span className="text-yellow text-sm font-semibold tracking-widest uppercase mb-3 lg:mb-4 mt-1">
                  Traveller
                </span>

                <p className="text-[15px] md:text-[16px] leading-relaxed text-secondary/70 line-clamp-4 lg:line-clamp-none">
                  I Was Very Impressed Lorem posuere in miss drana en the nisan
                  semere sceriun amiss etiam ornare in the miss drana is lorem
                  fermen nunta mauris.
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default Testimonials