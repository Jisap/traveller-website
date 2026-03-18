import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import pricingplan from '../../assets/PricingPage/pricebg.png'
import tour1 from '../../assets/PricingPage/tour-01.jpg'
import tour2 from '../../assets/PricingPage/tour-02.jpg'
import tour3 from '../../assets/PricingPage/tour-03.jpg'
import { Icon } from '@iconify/react';
import Mainbtn from '../../Components/Buttons/Mainbtn';
import step1img from '../../assets/PricingPage/destination-01.png'
import step2img from '../../assets/PricingPage/destination-02.png'
import step3img from '../../assets/PricingPage/destination-03.png'
import des1 from "../../assets/PricingPage/choose-destination.png"
import des2 from "../../assets/PricingPage/make-payment-1.png"
import des3 from "../../assets/PricingPage/ready-for-travelling.png"
import bag from "../../assets/PricingPage/bag.png"
import tent from "../../assets/PricingPage/tent.png"
import frmimg from "../../assets/PricingPage/frm-left.jpg"

// Framer Motion Imports
import { motion } from 'framer-motion';
import { 
  containerVariants, 
  fadeInUp, 
  fadeInRight, 
  fadeInLeft, 
  scaleIn 
} from '../../Animations/variants';

// --- Data Constants ---
const breadcrumbs = [
  { label: "Home", url: "/" },
  { label: "Pricing", url: "/pricing" },
];

const pricingPlans = [
  {
    title: "Budget Travel",
    price: "49",
    image: tour1,
    features: [
      "3 star hotel (4 nights)",
      "Local taxis",
      "Sightseeing, tickets",
      "Tourist visa",
      "Meal & snacks"
    ]
  },
  {
    title: "Mid-Range-Travel",
    price: "79",
    image: tour2,
    features: [
      "3 star hotel (4 nights)",
      "Local taxis",
      "Sightseeing, tickets",
      "Tourist visa",
      "Meal & snacks"
    ]
  },
  {
    title: "Luxury Travel",
    price: "99",
    image: tour3,
    features: [
      "3 star hotel (4 nights)",
      "Local taxis",
      "Sightseeing, tickets",
      "Tourist visa",
      "Meal & snacks"
    ]
  }
];

const bookingSteps = [
  {
    id: "01",
    stepClass: "step-1",
    imgClass: "step1-image",
    title: "Choose Destination",
    description: "All you have to do is, first select your preferred destination and proceed",
    image: step1img,
    media: des1,
    bgColor: "bg-[#45869d]"
  },
  {
    id: "02",
    stepClass: "step-2",
    imgClass: "step2-image",
    title: "Make payment",
    description: "You are important to us. We pay attention to the quality of every service we provide to you.",
    image: step2img,
    media: des2,
    bgColor: "bg-[#ce8594]"
  },
  {
    id: "03",
    stepClass: "step-3",
    imgClass: "step3-image",
    title: "Ready For Travelling",
    description: "We have seen that you have fulfilled all the requirements, now you are ready to travel.",
    image: step3img,
    media: des3,
    bgColor: "bg-[#047881]"
  }
];

// --- Sub-components ---

const PricingCard = ({ title, price, image, features }) => (
  <motion.div 
    variants={fadeInUp}
    className="tour-price-card relative z-9 group"
  >
    <div className="tour-image w-full mb-10 overflow-hidden rounded-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="content">
      <div className="price-head flex justify-between items-center w-full pb-5">
        <h4 className="text-secondary text-3xl font-medium">
          {title}
        </h4>

        <div className="plan-price text-center">
          <span className="block text-4xl font-semibold text-secondary">
            ${price}
          </span>
          <span className="text-secondary">
            Per Day
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-secondary font-medium">
            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center">
        <Mainbtn to="/contact" text="Shop Now" />
      </div>
    </div>
  </motion.div>
);

const BookingStep = ({ id, title, description, image, media, bgColor, stepClass, imgClass }) => (
  <motion.div 
    variants={fadeInUp}
    className={`step ${stepClass} relative group`}
  >
    <div className="step-icon mb-5 text-center">
      <div className={`icon-black w-30 h-30 ${bgColor} rounded-full inline-flex justify-center items-center`}>
        <div className="icon-front w-22.5 h-22.5 rounded-full bg-white inline-flex justify-center items-center shadow-2xl">
          <img
            src={image}
            alt={title}
            className={`step-img ${imgClass}`}
          />
        </div>
      </div>
    </div>

    <div className="step-content">
      <h4 className="text-3xl font-medium text-white pb-2">
        {title}
      </h4>

      <p className="text-white">
        {description}
      </p>

      <div className="flex items-end justify-between">
        <div className="media">
          <img src={media} alt={title} />
        </div>

        <span className="bld-num">
          {id}
        </span>
      </div>
    </div>
  </motion.div>
);

// --- Main Page Component ---
const Pricing = () => {
  return (
    <>
      <CommonBanner
        bgImage={sectionbanner}
        title="Pricing Plan"
        breadcrumbs={breadcrumbs}
      />

      {/* Pricing Section */}
      <div
        className="pricing-plan px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#effefe] bg-no-repeat relative bg-cover"
        style={{ backgroundImage: `url(${pricingplan})` }}
      >
        <motion.div 
          className="title flex flex-col justify-center items-center text-center relative pb-18"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h1 className="text-secondary text-4xl md:text-6xl font-bold font-afacad">
            Find <span className="text-yellow"> Price For </span> Travel The World
          </h1>

          <p className="text-secondary my-6 text-lg font-figtree">
            Destinations worth exploring! Here are a few popular spots
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants(0.3)}
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </motion.div>
      </div>

      {/* Easy Booking Section */}
      <div className="booking px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] relative overflow-hidden">
        <motion.div 
          className="booking-content w-full flex justify-between items-center flex-wrap lg:flex-nowrap gap-5 lg:gap-10 pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col">
            <h1 className="text-secondary text-4xl md:text-6xl font-bold font-afacad">
              Easy Step <span className="text-yellow"> For Booking </span>
            </h1>

            <p className="text-secondary my-6 text-lg lg:w-lg font-figtree">
              Maybe for a travel blog, wildlife site, or web development project here are a few sample templates you can use to simulate real-time news updates
            </p>
          </div>
          <motion.div variants={fadeInRight}>
            <Mainbtn to="/about" text="View More" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants(0.4)}
        >
          {bookingSteps.map((step) => (
            <BookingStep key={step.id} {...step} />
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="left-bag absolute left-0 bottom-0 md:block hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          transition={{ duration: 1.5 }}
        >
          <img src={bag} alt="leftbag" className="-z-1" />
        </motion.div>

        <motion.div 
          className="left-tent absolute right-0 bottom-0 md:block hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img src={tent} alt="leftbag" className="-z-1" />
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="pricing-content py-[6%] md:py-[10%] ring-offset-sky-50 flex flex-col lg:flex-row bg-yellow-light/40 overflow-hidden">
        <motion.div 
          className="relative w-full lg:w-1/2 min-h-100 lg:min-h-auto overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInLeft}
        >
          <img
            src={frmimg}
            alt="bg-img"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-secondary/50 flex items-end p-8 lg:p-12">
            <h4 className="text-white text-3xl md:text-4xl font-medium font-kaushan!">
              Hi there!
              <span className="block text-lg md:text-xl font-medium mt-2 font-afacad">
                What can I do for you today?
              </span>
            </h4>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 p-6 md:p-10 flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInRight}
        >
          <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl">
            <h1 className="text-secondary text-4xl md:text-6xl font-bold font-afacad">
              <span className="text-yellow">Reach </span> & Get in Touch With Us!
            </h1>

            <p className="text-secondary my-6 text-lg lg:w-lg font-figtree">
              We’d love to hear from you. Our friendly team is always here to chat
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none font-figtree"
                required
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none font-figtree"
                required
              />
              <input
                type="text"
                placeholder="Enter Your Subject"
                className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none font-figtree"
                required
              />
              <textarea
                placeholder="Enter Your Message"
                rows="5"
                className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none resize-none font-figtree"
                required
              />
              <Mainbtn
                type="submit"
                text="Send Message"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Pricing;