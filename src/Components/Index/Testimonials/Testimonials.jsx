
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

const Testimonials = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants(0.15, 0.2)}
        className="bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]"
      >
        <div className='title flex flex-col justify-center items-center text-center relative mb-10'>
          <motion.h1 className='text-secondary text-4xl md:text-6xl font-bold' variants={fadeInUp}>
            <span className='text-yellow'> Our Clients </span> Says!
          </motion.h1>

          <motion.p className='text-secondary my-2 text-lg' variants={fadeInUp}>
            Destinations worth exploring! Here are a few popular spots
          </motion.p>

          <motion.img
            src={titleShape}
            alt="titleShape"
            className="w-[35%] object-contain absolute -bottom-12"
            variants={scaleIn}
          />
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 }
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="tst-item">
                <div className="tst-img w-60 h-60 md:w-70 md:h-70 rounded-2xl overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="flex p-1 bg-black absolute bottom-0 left-0 rounded-2xl rounded-tl-none">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        icon="material-symbols:star-rounded"
                        width="20"
                        height="20"
                        className="text-yellow"
                      />
                    ))}
                  </div>
                </div>

                <div className="tst-content pt-2 relative">
                  <img src={quote} alt="quote" className="w-16 h-16 absolute right-0 top-0" />

                  <h2 className="text-4xl font-kaushan! text-secondary">
                    {item.name}
                  </h2>

                  <span className="text-yellow text-lg font-semibold">
                    Traveller
                  </span>

                  <p className="pt-5 text-[20px] font-medium text-secondary/80">
                    I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  )
}

export default Testimonials