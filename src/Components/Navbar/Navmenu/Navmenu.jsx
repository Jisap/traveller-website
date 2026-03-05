import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navmenu = () => {
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

            <li className='relative group/testimonial border-b border-gray-200'>
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
            </li>

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

      <div>

      </div>
    </>
 