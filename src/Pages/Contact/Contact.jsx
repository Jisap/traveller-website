import { Icon } from "@iconify/react";
import sectionbanner from "../../assets/section-banner.jpg"
import Mainbtn from "../../Components/Buttons/Mainbtn";
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import { motion } from "framer-motion";
import { containerVariants, fadeInUp, fadeInLeft, fadeInRight } from "../../Animations/variants";


const breadcrumbs = [
  { label: "Home", url: "/" },
  { label: "Contact", url: "/contact" },
];

const Contact = () => {
  return (
    <>
      <CommonBanner
        title="Contact"
        breadcrumbs={breadcrumbs}
        bgImage={sectionbanner}
      />

      <motion.div 
        className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[8%] bg-[#e6f1f3]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="bg-white p-5 md:p-10 rounded-3xl w-full overflow-hidden shadow-sm">
          <motion.div 
            variants={fadeInUp}
            className="w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331786942!2d73.09068539198522!3d22.32224063536357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1772012708310!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "20px",
              }}
              className="border-none"
              title="Our Location"
            ></iframe>
          </motion.div>

          <motion.div 
            className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 pt-10"
            variants={containerVariants(0.3, 0.4)}
          >
            <motion.div 
              className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl lg:flex-1"
              variants={fadeInRight}
            >
              <h1 className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
                <span className="text-yellow">Reach</span> & Get in Touch With Us!
              </h1>

              <p className="text-gray-500 pb-8">
                We'd love to hear from you. Our friendly team is always here to chat and help you with your plans.
              </p>

              <form method="post" className="space-y-6">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none transition duration-300"
                  required
                />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none transition duration-300"
                  required
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none transition duration-300"
                  required
                />

                <textarea
                  rows="5"
                  placeholder="Enter Your Message"
                  className="w-full rounded-[30px] px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none transition duration-300"
                  required
                />

                <Mainbtn text="Send Message" className="w-full" />
              </form>
            </motion.div>


            <motion.div 
              className="flex flex-col space-y-8 lg:w-[40%] shrink-0"
              variants={fadeInLeft}
            >
              <div className="flex flex-col w-full">
                <h4 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                  Get in Touch
                </h4>
                <p className="text-gray-500 max-w-sm">
                  We'd love to hear from you! Our friendly team is always here to chat and help you with your travel plans.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "line-md:phone-call",
                    title: "Contact Us",
                    content: "+91 1234567890",
                    outerBg: "bg-secondary",
                    innerIconColor: "text-secondary"
                  },
                  {
                    icon: "oui:email",
                    title: "Send Us a Mail",
                    content: "traveller@gmail.com",
                    outerBg: "bg-rose-400",
                    innerIconColor: "text-rose-400"
                  },
                  {
                    icon: "lsicon:house-outline",
                    title: "Our Address",
                    content: "123 Main St, Vadodara, Gujarat",
                    outerBg: "bg-teal-700",
                    innerIconColor: "text-teal-700"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-6 group transition-all duration-300 hover:translate-x-2"
                    variants={fadeInLeft}
                  >
                    <div className={`w-20 h-20 ${item.outerBg} rounded-full flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <Icon 
                          icon={item.icon} 
                          width="32" 
                          height="32" 
                          className={`${item.innerIconColor}`} 
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                        {item.title}
                      </p>
                      <p className="text-secondary text-2xl font-bold leading-tight">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 w-full">
                <motion.h4 
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-kaushan! text-gray-800 leading-tight"
                >
                  Let's <span className="text-yellow">Talk</span> About You
                </motion.h4>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Contact