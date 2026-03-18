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
import frming from "../../assets/PricingPage/frm-left.jpg"




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
    </>
  )
}

export default Pricing