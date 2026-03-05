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

          <ul className='absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-xl invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:transalate-y-0 transition-all duration-300 z-50 text-black'>
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
          fixed top-0 left-0 h-screen w-full lg:-[45%] xl:w-[35%] bg-black text-white z-40 px-8 py-30 transform transition-trnasform duration-700 ease-in-out
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div
          onClick={toggleMenu}
          className={`close-btn cursor-pointer absolute bg-yellow top-8 right-8 rounded-sm text-black`}
        >
          <Icon
            icon="material-symbols-light:close"
            width="24"
            height="24"
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

        <ul className='space-y-5 lg:hidden block'>
          <li>
            <Link to="/" className='font-medium text-lg hover:text-prim transition-colors duration-300'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className='font-medium text-lg hover:text-prim transition-colors duration-300'>
              About
            </Link>
          </li>
          <li>
            <div className='relative'>
              <span
                onClick={() => {
                  setPagesOpen(!pagesOpen)
                  setTourGuideOpen(false)
                }}
                className='cursor-pointer flex items-center text-lg font-medium hover:text-prim transition-colors duration-300'
              >
                Pages
                <Icon
                  icon="ep:arrow-down-bold"
                  width="16"
                  height="16"
                  className={`ms-2 transition-transform duration-300 ${pagesOpen ? 'rotate-180' : ''}`}
                />
              </span>

              <ul
                className={`
                  mt-2 text-white border border-gray-50/10 shadow-lg rounded-xl transition-all duration-300 z-50 w-fit lg:min-w-full min-w-50
                  ${pagesOpen ? 'opacity-100 visible translate-y-0 h-auto' : 'opacity-0 invisible'}
                `}
              >
                <li>
                  <Link to="/services" className='block px-4 py-2 hover:translate-x-1 transition'>
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/services/1" className='block px-4 py-2 hover:translate-x-1 transition'>
                    Services Details
                  </Link>
                </li>

                <li>
                  <Link to="/testimonials" className='block px-4 py-2 hover:translate-x-1 transition'>
                    Testimonials
                  </Link>
                </li>

                <li className='relative'>
                  <div
                    onClick={() => {
                      setTourGuideOpen(!tourGuideOpen)
                    }}
                    className='flex justify-between items-center px-4 py-2 cursor-pointer'
                  >
                    <span className=''>Tour Guide</span>
                    <Icon
                      icon="ri:arrow-right-s-line"
                      width="20"
                      height="20"
                      className={`transition-transform ${tourGuideOpen ? 'rotate-90' : ''}`}
                    />
                  </div>

                  <ul className={`
                    min-w-52 bg-white/20 text-white overflow-hidden transition-all duration-300 ease-in-out rounded-b-2xl
                    ${tourGuideOpen ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1'}
                    `}
                  >
                    <li className='border-b border-gray-50/20'>
                      <Link to="/tour-guide" className='block px-4 py-2 hover:translate-x-1 transition'>
                        Tour Guide
                      </Link>
                    </li>

                    <li>
                      <Link to="/tour-guide/1" className='block px-4 py-2 hover:translate-x-1 transition'>
                        Tour Guide Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>

                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navmenu