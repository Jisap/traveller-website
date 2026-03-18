import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png"
import pricingplan from '../../assets/PricingPage/pricebg.png'
import tour1 from '../../assets/PricingPage/tour-01.jpg'
import tour2 from '../../assets/PricingPage/tour-02.jpg'
import tour3 from '../../assets/PricingPage/tour-03.jpg'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { containerVariants, fadeInUp, fadeInRight, fadeInLeft } from '../../Animations/variants';
import { useState } from 'react';
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




const breadcrumbs = [
  { label: "Home", url: "/" },
  { label: "Pricing", url: "/pricing" },
];

const Pricing = () => {
  return (
    <>
      <CommonBanner
        bgImage={sectionbanner}
        title="Pricing Plan"
        breadcrumbs={breadcrumbs}
      />

      <div
        className="pricing-plan px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#effefe] bg-no-repeat relative bg-cover"
        style={{ backgroundImage: `url(${pricingplan})` }}
      >
        <div className="title flex flex-col justify-center items-center text-center relative pb-18">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            Find <span className="text-yellow"> Price For </span> Travel The World
          </h1>

          <p className="text-secondary my-6 text-lg">
            Destinations worth exploring! Here are a few popular spots
          </p>

          {/* <img
            src={titleShape} alt="titleShape" className="w-[35%] object-contain absolute -bottom-12"
          /> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="tour-price-card relative z-9">
            <div className="tour-image w-full mb-10">
              <img src={tour1} alt="tour1" className="bg-center rounded-full w-full" />
            </div>

            <div className="content">
              <div className="price-head flex justify-between items-centerw-full pb-5">
                <h4 className="text-secondary text-3xl font-medium">
                  Budget Travel
                </h4>

                <div className="plan-price text-center">
                  <span className="block text-4xl font-semibold text-secondary">
                    $49
                  </span>

                  <span className="text-secondary">
                    Per Day
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  3 star hotel (4 nights)
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Local taxis
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Sightseeing, tickets
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Tourist visa
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Meal & snacks
                </li>
              </ul>

              <div className="flex justify-center items-center">
                <Mainbtn
                  to="/contact"
                  text={"Shop Now"}
                />
              </div>
            </div>
          </div>

          <div className="tour-price-card relative z-9">
            <div className="tour-image w-full mb-10">
              <img src={tour2} alt="tour1" className="bg-center rounded-full w-full" />
            </div>

            <div className="content">
              <div className="price-head flex justify-between items-centerw-full pb-5">
                <h4 className="text-secondary text-3xl font-medium">
                  Mid-Range-Travel
                </h4>

                <div className="plan-price text-center">
                  <span className="block text-4xl font-semibold text-secondary">
                    $79
                  </span>

                  <span className="text-secondary">
                    Per Day
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  3 star hotel (4 nights)
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Local taxis
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Sightseeing, tickets
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Tourist visa
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Meal & snacks
                </li>
              </ul>

              <div className="flex justify-center items-center">
                <Mainbtn
                  to="/contact"
                  text={"Shop Now"}
                />
              </div>
            </div>
          </div>

          <div className="tour-price-card relative z-9">
            <div className="tour-image w-full mb-10">
              <img src={tour3} alt="tour1" className="bg-center rounded-full w-full" />
            </div>

            <div className="content">
              <div className="price-head flex justify-between items-centerw-full pb-5">
                <h4 className="text-secondary text-3xl font-medium">
                  Luxury Travel
                </h4>

                <div className="plan-price text-center">
                  <span className="block text-4xl font-semibold text-secondary">
                    $99
                  </span>

                  <span className="text-secondary">
                    Per Day
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  3 star hotel (4 nights)
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Local taxis
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Sightseeing, tickets
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Tourist visa
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className="text-yellow" />
                  Meal & snacks
                </li>
              </ul>

              <div className="flex justify-center items-center">
                <Mainbtn
                  to="/contact"
                  text={"Shop Now"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="booking px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] relative">
        <div className="booking-content w-full flex justify-between items-center flex-wrap lg:flex-nowrap gap-5 lg:gap-10 pb-10">
          <div className="flex flex-col">
            <h1 className="text-secondary text-4xl md:text-6xl font-bold">
              Easy Step <span className="text-yellow"> For Booking </span>
            </h1>

            <p className="text-secondary my-6 text-lg lg:w-lg">
              Maybe for a travel blog, wildlife site, or web development project here are a few sample templates you can use to simulate real-time news updates
            </p>
          </div>
          <Mainbtn
            to="/about" text={"View More"}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="step step-1 relative">
            <div className="step-icon mb-5 text-center">
              <div className="icon-black w-30 h-30 bg-[#45869d] rounded-full inline-flex justify-center items-center">
                <div className="icon-front w-22.5 h-22.5 rounded-full bg-white inline-flex justify-center items-center shadow-2xl">
                  <img
                    src={step1img}
                    alt="step1img"
                    className="step-img step1-image"
                  />
                </div>
              </div>
            </div>

            <div className="step-content">
              <h4 className="text-3xl font-medium text-white pb-2">
                Choose Destination
              </h4>

              <p className="">
                All you have to do is, first select your preferred destination and proceed
              </p>

              <div className="flex items-end justify-between">
                <div className="media">
                  <img src={des1} alt="des1" />
                </div>

                <span className="bld-num">
                  01
                </span>
              </div>
            </div>
          </div>

          <div className="step step-2 relative">
            <div className="step-icon mb-5 text-center">
              <div className="icon-black w-30 h-30 bg-[#ce8594] rounded-full inline-flex justify-center items-center">
                <div className="icon-front w-22.5 h-22.5 rounded-full bg-white inline-flex justify-center items-center shadow-2xl">
                  <img
                    src={step2img}
                    alt="step2img"
                    className="step-img step1-image"
                  />
                </div>
              </div>
            </div>

            <div className="step-content">
              <h4 className="text-3xl font-medium text-white pb-2">
                Make payment
              </h4>

              <p className="">
                You are important to us. We pay attention to the quality of every service we provide to you.
              </p>

              <div className="flex items-end justify-between">
                <div className="media">
                  <img src={des2} alt="des2" />
                </div>

                <span className="bld-num">
                  02
                </span>
              </div>
            </div>
          </div>

          <div className="step step-3 relative">
            <div className="step-icon mb-5 text-center">
              <div className="icon-black w-30 h-30 bg-[#047881] rounded-full inline-flex justify-center items-center">
                <div className="icon-front w-22.5 h-22.5 rounded-full bg-white inline-flex justify-center items-center shadow-2xl">
                  <img
                    src={step3img}
                    alt="step3img"
                    className="step-img step1-image"
                  />
                </div>
              </div>
            </div>

            <div className="step-content">
              <h4 className="text-3xl font-medium text-white pb-2">
                Ready For Travelling
              </h4>

              <p className="">
                We have seen that you have fulfilled all the requirements, now you are ready to travel.
              </p>

              <div className="flex items-end justify-between">
                <div className="media">
                  <img src={des3} alt="des3" />
                </div>

                <span className="bld-num">
                  02
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="left-bag absolute left-0 bottom-0 md:block hidden">
          <img src={bag} alt="leftbag" className="-z-1" />
        </div>

        <div className="left-tent absolute right-0 bottom-0 md:block hidden">
          <img src={tent} alt="leftbag" className="-z-1" />
        </div>
      </div>

      <div className="pricing-content py-[6%] md:py-[10%] ring-offset-sky-50 flex flex-col lg:flex-row bg-yellow-light/40">
        <div className="relative w-full lg:w-1/2 min-h-100 lg:min-h-auto overflow-hidden">
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
        </div>

        <div className="w-full lg:w-1/2 p-6 md:p-10 flex items-center">
          <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl">
            <h1 className="text-secondary text-4xl md:text-6xl font-bold">
              <span className="text-yellow">Reach </span> & Get in Touch With Us!
            </h1>

            <p className="text-secondary my-6 text-lg lg:w-lg">
              We’d love to hear from you. Our friendly team is always here to chat
            </p>

            <form method="post" className="space-y-6">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Enter Your Subject"
                className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none"
                required
              />
              <textarea
                placeholder="Enter Your Message"
                rows="5"
                className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none resize-none"
                required
              />
              <Mainbtn
                to="/about"
                text="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing