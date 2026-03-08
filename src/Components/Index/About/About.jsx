import icon1 from "../../../assets/Index/About/travel-guide.png"
import icon2 from "../../../assets/Index/About/mission-icon.png"
import Mainbtn from "../../Buttons/Mainbtn"
import author1 from "../../../assets/Index/About/pic1.jpg"
import author2 from "../../../assets/Index/About/pic2.jpg"
import author3 from "../../../assets/Index/About/pic3.jpg"
import airplane from "../../../assets/Index/About/airplane.png"
import aboutimg1 from "../../../assets/Index/About/about-image01.jpg"
import aboutimg2 from "../../../assets/Index/About/about-image02.jpg"
import aboutimg3 from "../../../assets/Index/About/about-image03.jpg"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp, scaleIn, fadeInRight, fadeInLeft } from "../../../Animations/variants"


const About = () => {
  return (
    <div className="px-[2%] ms:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-250 bg-yellow-light overflow-hidden">
      <motion.div
        className="w-full xl:w-[50%] title relative h-full"
        variants={containerVariants(0.15, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h1
          className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3"
          variants={fadeInUp}
        >
          We <span className="text-yellow"> Recommend</span>
          Beautiful Destinations Every Month
        </motion.h1>

        <motion.p className="text-gray-500 pb-5" variants={fadeInUp}>
          Traveller is a multi-award-winning strategy and content creation agency that specializes in travel marketing. They have one of the world's largest and most influential online travel communities, helping brands and tourism.
        </motion.p>

        <ul className="space-y-5">
          <motion.li
            className="flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl bg-white/50 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <img src={icon1} alt="icon1" className="w-14 h-14" />

            <div>
              <span className="text-xl font-semibold">Trusted travel guide</span>

              <p>
                Provides reliable information to help travelers plan their trips efficiently and safely.
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl bg-white/50 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <img src={icon2} alt="icon2" className="w-14 h-14" />

            <div>
              <span className="text-xl font-semibold">Mission & Vision</span>

              <p>Aims to connect people to positive experience through travel, helping them see the world differently.
                Provides reliable information to help travelers plan their trips efficiently and safely.
              </p>
            </div>
          </motion.li>
        </ul>

        <motion.div className="flex items-center flex-wrap gap-10 pt-8" variants={fadeInUp}>
          <Mainbtn text={"Discover More"} to="/about" />

          <div className="flex items-center gap-5">
            <div className="author-img flex items-center">
              <img src={author1} alt="authore1" className="w-10 rounded-full border-2 border-white" />
              <img src={author2} alt="authore2" className="w-10 rounded-full -mx-3 border-2 border-white" />
              <img src={author3} alt="authore3" className="w-10 rounded-full border-2 border-white" />
            </div>

            <p className="text-md">
              <span className="block text-2xl font-bold">
                3.5k
              </span>
              Happy Customer
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="about-image w-full xl:w-[50%] relative hidden xl:flex justify-center items-center h-full">
        {/* Avión con entrada y luego flotación */}
        <motion.div
          className="airplane absolute z-10 -top-1 right-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={airplane}
            alt="airplane"
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Imagen Central 1 - Manteniendo translate(-50%, -50%) del CSS */}
        <motion.div
          className="about-image1 "
          initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
          whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={aboutimg1} alt="aboutimg1" className="rounded-full w-full" />
        </motion.div>

        {/* Imagen 2 (Arriba Izquierda) */}
        <motion.div
          className="about-image2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={aboutimg2} alt="aboutimg2" className="h-full w-full" />
        </motion.div>

        {/* Imagen 3 (Abajo Derecha) */}
        <motion.div
          className="about-image3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img src={aboutimg3} alt="aboutimg3" className="h-full w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;