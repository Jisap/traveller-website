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

          <ul className="pt-6 flex justify-start items-center flex-wrap">
            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <Link to="https://x.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                <Icon
                  icon="codicon:twitter"
                  width="16"
                  height="16"
                />
              </Link>
            </li>

            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <Link to="https://facebook.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                <Icon
                  icon="ic:outline-facebook"
                  width="16"
                  height="16"
                />
              </Link>
            </li>

            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <Link to="https://instagram.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                <Icon
                  icon="mingcute-instagram-line"
                  width="16"
                  height="16"
                />
              </Link>
            </li>

            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <Link to="https://youtube.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                <Icon
                  icon="line-md:youtube"
                  width="16"
                  height="16"
                />
              </Link>
            </li>
          </ul>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-24 w-full xl:w-auto'>
          {/* first column */}
          <div className='footer-item'>
            <h4 className='text-2xl sm:text-3xl text-secondary mb-5'>
              Explore
            </h4>

            <ul className='space-y-3'>
              <li>
                <Link to="/about" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Faqs
                </Link>
              </li>
              <li>
                <Link to="/services" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/news" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  News & Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* second column */}
          <div className='footer-item'>
            <h4 className='text-2xl sm:text-3xl text-secondary mb-5'>
              Destinations
            </h4>

            <ul className='space-y-3'>
              <li>
                <Link to="/" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Tokio
                </Link>
              </li>
              <li>
                <Link to="/" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  France
                </Link>
              </li>
              <li>
                <Link to="/" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Dubay
                </Link>
              </li>
              <li>
                <Link to="/" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Kenya
                </Link>
              </li>
              <li>
                <Link to="/news" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Vietnam
                </Link>
              </li>
            </ul>
          </div>

          {/* third column */}
          <div className='footer-item'>
            <h4 className='text-2xl sm:text-3xl text-secondary mb-5'>
              Legal
            </h4>

            <ul className='space-y-3'>
              <li>
                <Link to="/" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className='hover:text-yellow transition-colos duration-300 text-secondary font-medium'>
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer-item'>
          <ul className='space-y-5'>
            <li className='flex items-center'>
              <Icon
                icon="famicons:call-outline"
                className='bg-secondary/20 text-secondary w-12 h-12 p-2 rounded-full me-2'
              />

              <Link to="/contact" className='hover:text-yellow transition-colors duration-300 text-secondary font-medium font-kaushan! text-xl'>
                +91 234 567 890
              </Link>
            </li>

            <li className='flex items-center'>
              <Icon
                icon="clarity:email-line"
                className='bg-secondary/20 text-secondary w-12 h-12 p-2 rounded-full me-2'
              />

              <Link to="/contact" className='hover:text-yellow transition-colors duration-300 text-secondary font-medium font-kaushan! text-xl'>
                traveller@email.com
              </Link>
            </li>

            <li className='flex items-center'>
              <Icon
                icon="material-symbols-light:home-outline"
                className='bg-secondary/20 text-secondary w-12 h-12 p-2 rounded-full me-2'
              />

              <Link to="/contact" className='hover:text-yellow transition-colors duration-300 text-secondary font-medium font-kaushan! text-xl'>
                123 Main St, Anytown, USA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer