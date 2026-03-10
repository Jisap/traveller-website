import titleShape from "../../../assets/Index/BookingSteps/Title-Shape.png"
import StepsIcon1 from "../../../assets/Index/BookingSteps/Steps-Icon1.png"
import StepsIcon2 from "../../../assets/Index/BookingSteps/Steps-Icon2.png"
import StepsIcon3 from "../../../assets/Index/BookingSteps/Steps-Icon3.png"
import Mainbtn from "../../Buttons/Mainbtn"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp, scaleIn } from "../../../Animations/variants"


const stepsData = [
  {
    id: 1,
    number: "01",
    title: "Choose Destination",
    description:
      "All you have to do is, first select your preferred destination and proceed",
    icon: StepsIcon1,
  },
  {
    id: 2,
    number: "02",
    title: "Make Payment",
    description:
      "You are important to us. We pay attention to the quality of  service we provide to you.",
    icon: StepsIcon2,
  },
  {
    id: 3,
    number: "03",
    title: "Ready For Travelling",
    description:
      "We have seen that you have fulfilled all the requirements, now you are ready to travel.",
    icon: StepsIcon3,
  },
];


const BookingSteps = () => {
  return (
    <>
      <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] overflow-hidden bg-white">
        <motion.div
          className="title flex flex-col justify-center items-center text-center relative pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants(0.18, 0.4)}
        >
          <motion.h1
            className="text-secondary text-4xl md:text-6xl font-bold"
            variants={fadeInUp}
          >
            Easy Steps <span className="text-yellow">For Bookings</span>
          </motion.h1>

          <motion.p
            className="text-secondary my-2 text-lg"
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
        </motion.div>

        <div className="pb-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants(0.2, 0.6)}
          >
            {stepsData.map((step) => (
              <motion.div
                key={step.id}
                className="steps-card p-10 pb-7 border border-secondary/10 rounded-lg bg-white shadow-sm hover:shadow-xl transform-gpu"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="flex justify-between items-center gap-3">
                  <span className="text-5xl font-bold bg-secondary w-20 h-20 rounded-lg flex items-center justify-center text-white">
                    {step.number}
                  </span>

                  <div className="steps-icon border-4 border-yellow rounded-full p-4">
                    <img src={step.icon} alt="icon" />
                  </div>
                </div>

                <div className="mt-5">
                  <h2 className="text-secondary font-semibold text-2xl">
                    {step.title}
                  </h2>

                  <p className="text-gray-500 text-md tracking-wide">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="SpecialOfferBanner bg-yellow flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-start px-5 py-7 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-end relative z-1"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-9xl font-bold text-white ">
              48
            </h1>

            <div className="text-3xl font-extrabold text-secondary">
              <h5>%</h5>
              <h5>OFF</h5>
            </div>
          </motion.div>

          <motion.div
            className="relative z-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="text-white font-semibold text-2xl">
              Get Special Offer
            </h5>

            <h1 className="text-5xl md:text-6xl text-title mt-5 text-secondary">
              Tours and Trip Packages, Globally
            </h1>
          </motion.div>

          <motion.div
            className="mt-5 relative z-1"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Mainbtn
              text="Discover More"
              className="discover-btn"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default BookingSteps;