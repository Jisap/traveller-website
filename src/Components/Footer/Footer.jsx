import { Link } from 'react-router-dom'
import pic1 from '../../assets/Footer/pic1.jpg'
import pic2 from '../../assets/Footer/pic2.jpg'
import pic3 from '../../assets/Footer/pic3.jpg'
import pic4 from '../../assets/Footer/pic4.jpg'
import pic5 from '../../assets/Footer/pic5.jpg'
import pic6 from '../../assets/Footer/pic6.jpg'
import pic7 from '../../assets/Footer/pic7.jpg'
import pic8 from '../../assets/Footer/pic8.jpg'
import pic9 from '../../assets/Footer/pic9.jpg'
import { Icon } from '@iconify/react'
import car from '../../assets/Footer/Left-Car.png'
import tyre from '../../assets/Footer/Left-Car-tyre.png'
import tree from "../../assets/Footer/Righttreepic.png"
import Logo from '../Navbar/Logo/Logo'




const Footer = () => {
  return (
    <>
      <div className='bg-yellow-light w-full py-[6%] md:py-[10%] relative text-center overflow-hidden'>
        <div className='px-[2%] sm:px-[8%] lg:px-[10%] mb-10%'>
          <h4 className='pb-8 text-2xl md:text-4xl text-secondary font-medium'>
            Follow Instagram
          </h4>

          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 gap-4 sm:gap-5 max-w-full mx-auto'>
            <div className='w-full h-full gallery-item'>
              <Link to="https://www.instagram.com" className='relative block w-full overflow-hidden rounded-xl group'>
                <img
                  src={pic1}
                  alt="gallery"
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <Icon
                      icon="lets-icons:insta"
                      width="28"
                      height="28"
                    />
                  </span>
                </div>
              </Link>
            </div>

            <div className='w-full h-full gallery-item'>
              <Link to="https://www.instagram.com" className='relative block w-full overflow-hidden rounded-xl group'>
                <img
                  src={pic2}
                  alt="gallery"
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <Icon
                      icon="lets-icons:insta"
                      width="28"
                      height="28"
                    />
                  </span>
                </div>
              </Link>
            </div>

            <div className='w-full h-full gallery-item'>
              <Link to="https://www.instagram.com" className='relative block w-full overflow-hidden rounded-xl group'>
                <img
                  src={pic3}
                  alt="gallery"
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <Icon
                      icon="lets-icons:insta"
                      width="28"
                      height="28"
                    />
                  </span>
                </div>
              </Link>
            </div>

            <div className='w-full h-full gallery-item'>
              <Link to="https://www.instagram.com" className='relative block w-full overflow-hidden rounded-xl group'>
                <img
                  src={pic4}
                  alt="gallery"
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <Icon
                      icon="lets-icons:insta"
                      width="28"
                      height="28"
                    />
                  </span>
                </div>
              </Link>
            </div>

            <div className='w-full h-full gallery-item'>
              <Link to="https://www.instagram.com" className='relative block w-full overflow-hidden rounded-xl group'>
                <img
                  src={pic5}
                  alt="gallery"
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <Icon
                      icon="lets-icons:insta"
                      width="28"
                      height="28"
                    />
                  </span>
                </div>
              </Link>
            </div>

            <div className='w-full h-full gallery-item'>
              <Link to="https://www.instagram.com" className='relative block w-full overflow-hidden rounded-xl group'>
                <img
                  src={pic6}
                  alt="gallery"
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <Icon
                      icon="lets-icons:insta"
                      width="28"
                      height="28"
                    />
                  </span>
                </div>
              </Link>
            </div>

            <div className='w-full h-full gallery-item'>
              <Link to="https://www.instagram.com" className='relative block w-full overflow-hidden rounded-xl group'>
                <img
                  src={pic7}
                  alt="gallery"
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <Icon
                      icon="lets-icons:insta"
                      width="28"
                      height="28"
                    />
                  </span>
                </div>
              </Link>
            </div>

            <div className='w-full h-full gallery-item'>
              <Link to="https://www.instagram.com" className='relative block w-full overflow-hidden rounded-xl group'>
                <img
                  src={pic8}
                  alt="gallery"
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <Icon
                      icon="lets-icons:insta"
                      width="28"
                      height="28"
                    />
                  </span>
                </div>
              </Link>
            </div>

            <div className='w-full h-full gallery-item'>
              <Link to="https://www.instagram.com" className='relative block w-full overflow-hidden rounded-xl group'>
                <img
                  src={pic9}
                  alt="gallery"
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <Icon
                      icon="lets-icons:insta"
                      width="28"
                      height="28"
                    />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='md:absolute left-0 bottom-0 z-1 w-full border-b-4 border-secondary'>
          <div className='marq-car z-10'>
            <img src={car} alt="cart-img" />

            <span className='tyre-1'>
              <img src={tyre} alt="tyre1-img" className='spin-tyres' />
            </span>

            <span className='tyre-2'>
              <img src={tyre} alt="tyre2-img" className='spin-tyres' />
            </span>
          </div>

          <div className='right-tree md:block hidden'>
            <img src={tree} alt="tree-img" />
          </div>
        </div>
      </div>

      <div className='footer-menu flex flex-col justify-between xl:flex-row gap-10 xl:gap-16 px-5 sm:px-[8%] lg:px-[10%] bg-yellow-light py-[6%]'>
        <div className='footer-item text-start xl:max-w-70'>
          <Logo className='text-black!' />
          <p className='pt-5 text-gray-500/60'>
            Traveller is a mult-award-winning strategy and content creation agency that specializes in travel marketing.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer