import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import CountUp from 'react-countup'
import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from '../../Components/CommonBanner/CommonBanner';

import tst1 from "../../assets/Index/Testimonials/testimonials-01.jpg"
import tst2 from "../../assets/Index/Testimonials/testimonials-02.jpg"
import tst3 from "../../assets/Index/Testimonials/testimonials-03.jpg"
import tst4 from "../../assets/Index/Testimonials/testimonials-04.jpg"
import tst5 from "../../assets/Index/Testimonials/testimonials-05.jpg"
import tst6 from "../../assets/Index/Testimonials/testimonials-06.jpg"

const testimonialsData = [
  {
    id: 1,
    name: "Kavin Martin",
    image: tst1,
    role: "Adventure Enthusiast",
    rating: 5,
    text: "The trip was absolutely incredible. Everything from the logistics to the breathtaking destinations exceeded my expectations. I can't wait for my next journey with Antigravity!",
    date: "2 months ago",
    featured: true
  },
  {
    id: 2,
    name: "Alex Morgan",
    image: tst2,
    role: "Solo Traveller",
    rating: 5,
    text: "As a solo traveller, I felt safe and well-informed throughout. The guides were local experts who shared hidden gems that you won't find in any guidebook.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "John Carter",
    image: tst3,
    role: "Family Vacation",
    rating: 4,
    text: "Perfect planning for our family of four. The activities were well-balanced for both kids and adults. Truly a memorable experience for all of us.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Sophia Lee",
    image: tst4,
    role: "Luxury Seeker",
    rating: 5,
    text: "Top-tier service. The luxury resorts they recommended were stunning. If you want a premium travel experience, look no further.",
    date: "5 days ago"
  },
  {
    id: 5,
    name: "Daniel Smith",
    image: tst5,
    role: "Nature Lover",
    rating: 5,
    text: "Hiking original trails and waking up to mountain views... this agency knows exactly what nature lovers are looking for. 10/10 recommendation!",
    date: "1 week ago"
  },
  {
    id: 6,
    name: "Emma Watson",
    image: tst6,
    role: "Cultural Explorer",
    rating: 5,
    text: "The cultural immersion was deep and authentic. I've learned so much and met amazing people. It wasn't just a tour; it was a life lesson.",
    date: "2 months ago"
  }
];

const TestimonialsPage = () => {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Testimonials", url: "/testimonials" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-white">
      <CommonBanner
        title="What Our Travellers Say"
        bgImage={sectionbanner}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 px-[5%] lg:px-[10%] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-prim/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header & Stats Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 italic">
                Real Stories from <span className="text-yellow italic">Real People</span>
              </h2>

              <p className="text-lg text-secondary/70 leading-relaxed mb-8">
                Join thousands of satisfied travellers who have discovered the world with our expert guidance. Every opinion matters to us, and we're proud to share these experiences with you.
              </p>

              <div className="flex flex-wrap gap-8 text-secondary">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold flex items-center">
                    <CountUp
                      end={4.9}
                      decimals={1}
                      duration={3.5}
                      autoAnimate
                      autoAnimateOnce />/5
                  </span>

                  <div className="flex text-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon="material-symbols:star-rounded" width="20" />
                    ))}
                  </div>

                  <span className="text-sm text-secondary/50 uppercase tracking-widest mt-2">Avg Rating</span>
                </div>

                <div className="flex flex-col border-l border-secondary/10 pl-8">
                  <span className="text-4xl font-bold flex items-center">
                    <CountUp
                      end={15}
                      duration={3.5}
                      autoAnimate
                      autoAnimateOnce />K+
                  </span>

                  <span className="text-yellow font-semibold">Happy Travellers</span>

                  <span className="text-sm text-secondary/50 uppercase tracking-widest mt-2">Worldwide</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-[40px] text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon icon="bi:quote" width="120" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon icon="mdi:camera-plus" className="text-yellow" /> Share Your Journey
              </h3>
              <p className="text-white/80 mb-6 font-figtree">
                Did you recently travel with us? We'd love to hear your story! Your feedback helps other travellers make better choices.
              </p>
              <button className="bg-yellow text-secondary font-bold py-4 px-8 rounded-full hover:bg-white transition-colors flex items-center gap-2 cursor-pointer font-poppins">
                Write a Review <Icon icon="material-symbols:arrow-right-alt-rounded" width="24" />
              </button>
            </motion.div>
          </div>

          {/* Regular Grid (Equal Height) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonialsData.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                className={`flex flex-col h-full bg-white border border-secondary/10 p-7 rounded-3xl shadow-sm hover:shadow-xl hover:border-yellow/30 transition-all duration-300 group ${review.featured ? 'ring-2 ring-yellow/20' : ''}`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow/30 shrink-0">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-secondary truncate">{review.name}</h4>
                    <p className="text-xs text-yellow font-semibold uppercase tracking-wider truncate">{review.role}</p>
                  </div>
                </div>

                <div className="flex text-yellow mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} icon="material-symbols:star-rounded" width="18" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Icon key={i} icon="material-symbols:star-outline-rounded" width="18" className="opacity-30" />
                  ))}
                </div>

                <div className="grow">
                  <p className="text-secondary/75 leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex justify-between items-center text-xs text-secondary/40 font-medium pt-5 border-t border-secondary/5 mt-auto">
                  <span className="flex items-center gap-1">
                    <Icon icon="mdi:check-decagram" className="text-prim" /> Verified Traveller
                  </span>
                  <span>{review.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="pb-20 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
          <Icon icon="logos:tripadvisor" width="140" />
          <Icon icon="logos:trustpilot" width="140" />
          <Icon icon="logos:google" width="100" />
          <Icon icon="logos:booking-com" width="140" />
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage
