import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Navmenu = ({ menuOpen, toggleMenu }) => {

  const [pagesOpen, setPagesOpen] = useState(false)
  const [testimonialOpen, setTestimonialOpen] = useState(false)
  const [tourGuideOpen, setTourGuideOpen] = useState(false)

  return (
    <>
      <ul className='lg:flex hidden items-start gap-10 text-white'>
        <li>
          <Link to="/" className='font-semibold text-lg hover:text-prim transition-colors duration-300'>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className='font-semibold text-lg hover:text-prim transition-colors duration-300'>
            About Us
          </Link>
        </li>
        <li className='relative group'>
          <div className='cursor-pointer rounded-sm flex items-center font-figtree text-lg hover:text-prim transition-colors duration-300'>
            Pages
            <Icon
              icon="ep:arrow-down-bold"
              width="16"
              height="16"
              className='ms-2 transition-transform duration-300 group-hover:rotate-180'
            />
          </div>

          <ul className='absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-xl invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 text-black'>
            <li className='border-b border-gray-200 text-secondary font-medium'>
              <Link to="/services" className='block px-4 py-2 hover:translate-x-1 transition'>
                Services
              </Link>
            </li>

            <li className='border-b border-gray-200 text-secondary font-medium'>
              <Link to="/services/1" className='block px-4 py-2 hover:translate-x-1 transition'>
                Services Details
              </Link>
            </li>

            <li className='border-b border-gray-200 text-secondary font-medium'>
              <Link to="/testimonials" className='block px-4 py-2 hover:translate-x-1 transition'>
                Testimonials
              </Link>
            </li>

            {/* <li className='relative group/testimonial border-b border-gray-200'>
              <div className='flex justify-between items-center px-4 py-2 cursor-pointer text-secondary'>
                <span className='hover:translate-x-1 transition'>
                  Testimonials
                </span>
                <Icon
                  icon="ri:arrow-right-s-line"
                  width="20"
                  height="20"
                />
              </div>

              <ul className='absolute top-0 left-full min-w-52 bg-white rounded-e-xl invisible opacity-0 translate-y-2 group-hover/testimonial:visible group-hover/testimonial:opacity-100 group-hover/testimonial:translate-y-0 transition-all duration-300 ease-out'>
                <li className='border-b border-gray-200 text-secondary font-medium'>
                  <Link to="/testimonials" className='block px-4 py-2 hover:translate-x-1 transition'>
                    Testimonials
                  </Link>
                </li>

                <li className='text-secondary font-medium'>
                  <Link to="/testimonials/1" className='block px-4 py-2 hover:translate-x-1 transition'>
                    Testimonial Details
                  </Link>
                </li>
              </ul>
            </li> */}

            <li className='relative group/tourguide border-b border-gray-200'>
              <div className='flex justify-between items-center px-4 py-2 cursor-pointer text-secondary'>
                <span className='hover:translate-x-1 transition'>
                  Tour Guide
                </span>
                <Icon
                  icon="ri:arrow-right-s-line"
                  width="20"
                  height="20"
                />
              </div>

              <ul className='absolute top-0 left-full min-w-52 bg-white rounded-e-xl invisible opacity-0 translate-y-2 group-hover/tourguide:visible group-hover/tourguide:opacity-100 group-hover/tourguide:translate-y-0 transition-all duration-300 ease-out'>
                <li className='border-b border-gray-200 text-secondary font-medium'>
                  <Link to="/tourguide" className='block px-4 py-2 hover:translate-x-1 transition'>
                    Tour Guide
                  </Link>
                </li>

                <li className='text-secondary font-medium'>
                  <Link to="/tourguide/1" className='block px-4 py-2 hover:translate-x-1 transition'>
                    Tour Guide Details
                  </Link>
                </li>
              </ul>
            </li>

            <li className='border-b border-gray-200 text-secondary font-medium'>
              <Link to="/faqs" className='block px-4 py-2 hover:translate-x-1 transition'>
                Faqs
              </Link>
            </li>

            <li className='border-b border-gray-200 text-secondary font-medium'>
              <Link to="/pricing" className='block px-4 py-2 hover:translate-x-1 transition'>
                Pricing
              </Link>
            </li>

            <li className='text-secondary font-medium'>
              <Link to="/error" className='block px-4 py-2 hover:translate-x-1 transition'>
                Error-404
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/destination" className='font-medium text-lg hover:text-prim transition-colors duration-300'>
            Destination
          </Link>
        </li>
        <li>
          <Link to="/tours" className='font-medium text-lg hover:text-prim transition-colors duration-300'>
            Tours
          </Link>
        </li>
        <li>
          <Link to="/blogs" className='font-medium text-lg hover:text-prim transition-colors duration-300'>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/contact" className='font-medium text-lg hover:text-prim transition-colors duration-300'>
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={toggleMenu}
        className={`
          fixed inset-0 bg-black/40 z-30 transition-opacity duration-500
          ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />

      <div
        className={`
          fixed top-0 left-0 h-screen w-full lg:w-1/2 xl:w-[35%] bg-black/95 backdrop-blur-xl text-white z-40 px-8 md:px-16 py-12 transform transition-transform duration-700 ease-in-out overflow-y-auto custom-scrollbar
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-prim/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div
          onClick={toggleMenu}
          className={`close-btn cursor-pointer absolute bg-white/10 hover:bg-prim hover:text-black transition-all duration-300 top-8 right-8 p-2 rounded-full text-white z-50`}
        >
          <Icon
            icon="material-symbols-light:close"
            width="28"
            height="28"
          />
        </div>

        <div className='lg:block hidden'>
          <Logo />

          <h3 className='pt-12 text-3xl pb-8'>
            It's time to be a traveler
          </h3>

          <h3 className='text-prim text-4xl font-semibold pb-3'>
            Plan your next adventure
          </h3>

          <p className='text-gray-400'>
            Traveller is a multi-award-winning strategy and content creation agency that specializes in travel marketing.
          </p>

          <div>
            <h3 className='pt-12 text-3xl pb-10'>
              Don't miss out this offers!
            </h3>

            <ul className='w-full grid grid-cols-3 gap-8'>
              <li className='text-center'>
                <span className='text-prim text-2xl'>$199</span>
                <p className='text-xl font-medium'>Basic Plan</p>
              </li>

              <li className='text-center'>
                <span className='text-prim text-2xl'>$299</span>
                <p className='text-xl font-medium'>Pro Plan</p>
              </li>

              <li className='text-center'>
                <span className='text-prim text-2xl'>$399</span>
                <p className='text-xl font-medium'>Full Plan</p>
              </li>
            </ul>
          </div>

          <ul className='pt-20 flex items-center gap-6'>
            <li className='social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg'>
              <Link to="https://x.com" className='h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]'>
                <Icon
                  icon="codicon:twitter"
                  width="16"
                  height="16"
                />
              </Link>
            </li>

            <li className='social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg'>
              <Link to="https://www.facebook.com" className='h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]'>
                <Icon
                  icon="ic:outline-facebook"
                  width="26"
                  height="26"
                />
              </Link>
            </li>

            <li className='social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg'>
              <Link to="https://www.instagram.com" className='h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]'>
                <Icon
                  icon="mingcute:instagram-line"
                  width="26"
                  height="26"
                />
              </Link>
            </li>

            <li className='social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg'>
              <Link to="https://www.youtube.com" className='h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]'>
                <Icon
                  icon="mingcute:youtube-line"
                  width="26"
                  height="26"
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className='lg:hidden block pt-4'>
          <div className='mb-12'>
            <Logo />
            <p className='text-gray-400 text-sm mt-4 font-figtree'>
              Explore the world with style and comfort.
            </p>
          </div>

          <div className='mb-6'>
            <span className='text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold'>Main Menu</span>
          </div>

          <ul className='space-y-1'>
            <li>
              <Link to="/" className='flex items-center gap-4 py-3 group'>
                <div className='w-10 h-10 rounded-xl bg-white/5 flex justify-center items-center group-hover:bg-prim group-hover:text-black transition-all duration-300'>
                  <Icon icon="solar:home-2-linear" width="20" />
                </div>
                <span className='font-medium text-lg group-hover:text-prim transition-colors duration-300'>Home</span>
              </Link>
            </li>

            <li>
              <Link to="/about" className='flex items-center gap-4 py-3 group'>
                <div className='w-10 h-10 rounded-xl bg-white/5 flex justify-center items-center group-hover:bg-prim group-hover:text-black transition-all duration-300'>
                  <Icon icon="solar:user-speak-linear" width="20" />
                </div>
                <span className='font-medium text-lg group-hover:text-prim transition-colors duration-300'>About</span>
              </Link>
            </li>

            <li>
              <Link to="/Destination" className='flex items-center gap-4 py-3 group'>
                <div className='w-10 h-10 rounded-xl bg-white/5 flex justify-center items-center group-hover:bg-prim group-hover:text-black transition-all duration-300'>
                  <Icon icon="solar:map-point-linear" width="20" />
                </div>
                <span className='font-medium text-lg group-hover:text-prim transition-colors duration-300'>Destination</span>
              </Link>
            </li>

            <li>
              <div className=''>
                <div
                  onClick={() => {
                    setPagesOpen(!pagesOpen)
                    setTourGuideOpen(false)
                  }}
                  className='flex items-center gap-4 py-3 cursor-pointer group'
                >
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex justify-center items-center transition-all duration-300 ${pagesOpen ? 'bg-prim text-black' : 'group-hover:bg-prim group-hover:text-black'}`}>
                    <Icon icon="solar:layers-linear" width="20" />
                  </div>
                  <div className='flex flex-1 justify-between items-center'>
                    <span className={`font-medium text-lg transition-colors duration-300 ${pagesOpen ? 'text-prim' : 'group-hover:text-prim'}`}>Pages</span>
                    <Icon
                      icon="ep:arrow-down-bold"
                      width="14"
                      className={`transition-transform duration-300 ${pagesOpen ? 'rotate-180 text-prim' : ''}`}
                    />
                  </div>
                </div>

                <ul
                  className={`
                    ml-14 border-l border-white/10 transition-all duration-500 ease-in-out overflow-hidden
                    ${pagesOpen ? 'max-h-[600px] opacity-100 mt-2 pb-4' : 'max-h-0 opacity-0'}
                  `}
                >
                  <li className='py-2 pl-4'>
                    <Link to="/services" className='text-gray-400 hover:text-prim transition-colors'>Services</Link>
                  </li>
                  <li className='py-2 pl-4'>
                    <Link to="/testimonials" className='text-gray-400 hover:text-prim transition-colors'>Testimonials</Link>
                  </li>
                  <li className='py-2 pl-4'>
                    <Link to="/Faqs" className='text-gray-400 hover:text-prim transition-colors'>FAQs</Link>
                  </li>
                  <li className='py-2 pl-4'>
                    <Link to="/Pricing" className='text-gray-400 hover:text-prim transition-colors'>Pricing</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/Tours" className='flex items-center gap-4 py-3 group'>
                <div className='w-10 h-10 rounded-xl bg-white/5 flex justify-center items-center group-hover:bg-prim group-hover:text-black transition-all duration-300'>
                  <Icon icon="solar:re-routing-linear" width="20" />
                </div>
                <span className='font-medium text-lg group-hover:text-prim transition-colors duration-300'>Tours</span>
              </Link>
            </li>

            <li>
              <Link to="/Blogs" className='flex items-center gap-4 py-3 group'>
                <div className='w-10 h-10 rounded-xl bg-white/5 flex justify-center items-center group-hover:bg-prim group-hover:text-black transition-all duration-300'>
                  <Icon icon="solar:unread-linear" width="20" />
                </div>
                <span className='font-medium text-lg group-hover:text-prim transition-colors duration-300'>Blogs</span>
              </Link>
            </li>

            <li>
              <Link to="/Contact" className='flex items-center gap-4 py-3 group'>
                <div className='w-10 h-10 rounded-xl bg-white/5 flex justify-center items-center group-hover:bg-prim group-hover:text-black transition-all duration-300'>
                  <Icon icon="solar:letter-linear" width="20" />
                </div>
                <span className='font-medium text-lg group-hover:text-prim transition-colors duration-300'>Contact</span>
              </Link>
            </li>
          </ul>

          <div className='mt-12 pt-10 border-t border-white/5'>
            <h4 className='text-sm text-gray-400 mb-6'>Join our community</h4>
            <ul className='flex items-center gap-4'>
              <li className='w-10 h-10 rounded-full bg-white/5 flex justify-center items-center hover:bg-prim hover:text-black transition-all duration-300 cursor-pointer'>
                <Icon icon="ri:facebook-fill" width="18" />
              </li>
              <li className='w-10 h-10 rounded-full bg-white/5 flex justify-center items-center hover:bg-prim hover:text-black transition-all duration-300 cursor-pointer'>
                <Icon icon="ri:twitter-x-fill" width="18" />
              </li>
              <li className='w-10 h-10 rounded-full bg-white/5 flex justify-center items-center hover:bg-prim hover:text-black transition-all duration-300 cursor-pointer'>
                <Icon icon="ri:instagram-line" width="18" />
              </li>
              <li className='w-10 h-10 rounded-full bg-white/5 flex justify-center items-center hover:bg-prim hover:text-black transition-all duration-300 cursor-pointer'>
                <Icon icon="ri:youtube-fill" width="18" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navmenu