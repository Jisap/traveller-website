import React, { useState } from 'react'
import titleShape from '../../assets/Index/BookingSteps/Title-Shape.png'
import sectionBanner from '../../assets/section-banner.jpg'
import { Link, useParams } from 'react-router-dom'
import CommonBanner from '../../Components/CommonBanner/CommonBanner'
import { Icon } from '@iconify/react'
import gallery1 from "../../assets/ServicesPage/ServiceDetails/gallery-01.jpg"
import gallery2 from "../../assets/ServicesPage/ServiceDetails/gallery-02.jpg"
import gallery3 from "../../assets/ServicesPage/ServiceDetails/gallery-03.jpg"
import gallery4 from "../../assets/ServicesPage/ServiceDetails/gallery-04.jpg"
import gallery5 from "../../assets/ServicesPage/ServiceDetails/gallery-05.jpg"
import gallery6 from "../../assets/ServicesPage/ServiceDetails/gallery-06.jpg"
import Services from "../../Data/Services.json"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const ServicesDetails = () => {
  const { id } = useParams();
  const service = Services.find((service) => service.id === parseInt(id));
  if (!service) {
    return <h2 className='text-center mt-20'>Service not found</h2>
  }

  const gallery = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6
  ];

  const faqs = [
    { "id": 1, "question": "¿Qué incluye un tour guiado?", "answer": "Nuestros tours guiados incluyen la planificación completa del recorrido, un guía profesional, información histórica y cultural del destino, y recomendaciones locales para aprovechar al máximo la experiencia." },
    { "id": 2, "question": "¿Cómo puedo reservar un tour?", "answer": "Puedes reservar tu tour directamente desde nuestra web seleccionando el destino, la fecha y el número de participantes. Una vez completado el formulario, recibirás una confirmación por correo electrónico." },
    { "id": 3, "question": "¿Puedo cancelar o modificar mi reserva?", "answer": "Sí, puedes cancelar o modificar tu reserva desde tu cuenta o contactando con nuestro equipo de soporte. Las condiciones de cancelación pueden variar dependiendo del tour reservado." },
    { "id": 4, "question": "¿Los tours se realizan en varios idiomas?", "answer": "Sí, muchos de nuestros tours están disponibles en varios idiomas. Puedes consultar los idiomas disponibles en la página de cada tour antes de realizar la reserva." },
    { "id": 5, "question": "¿Cuánto duran normalmente los tours?", "answer": "La duración de los tours depende del recorrido elegido. La mayoría tienen una duración entre 2 y 6 horas, aunque también ofrecemos tours de día completo." },
    { "id": 6, "question": "¿Los tours son adecuados para niños?", "answer": "Sí, muchos de nuestros tours están diseñados para ser aptos para familias. En la descripción del tour indicamos si es especialmente recomendable para niños." },
    { "id": 7, "question": "¿Qué pasa si llego tarde al punto de encuentro?", "answer": "Te recomendamos llegar al menos 10 minutos antes de la hora programada. Si llegas tarde, el tour puede haber comenzado y no siempre será posible reincorporarse al grupo." },
    { "id": 8, "question": "¿Qué debo llevar a un tour guiado?", "answer": "Recomendamos llevar ropa y calzado cómodos, agua, protección solar y una cámara para capturar los mejores momentos del recorrido." },
    { "id": 9, "question": "¿Se pueden reservar tours privados?", "answer": "Sí, ofrecemos tours privados para grupos que prefieren una experiencia más personalizada. Puedes solicitarlo desde la página del tour o contactando con nuestro equipo." },
    { "id": 10, "question": "¿Los tours se cancelan por mal tiempo?", "answer": "En caso de condiciones meteorológicas extremas, el tour puede ser reprogramado o cancelado. En ese caso, te ofreceremos una nueva fecha o el reembolso correspondiente." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Service Details', url: `/services/${id}` },
  ];

  return (
    <>
      <CommonBanner
        title={service.name}
        bgImage={sectionBanner}
        breadcrumbs={breadcrumbs}
      />

      <div className='service-container px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#effefe] gap-10 flex justify-between items-start flex-col xl:flex-row'>
        <div className='service-left w-full xl:w-[70%] flex flex-col gap-10'>
          <div className='gallery-images h-50 sm:h-100 lg:h-150 bg-center bg-cover bg-no-repeat'>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className='rounded-3xl w-full h-full'
            >
              {[service.image, gallery1, gallery2, gallery3, gallery4, gallery5].map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt={service.name} className='rounded-3xl w-full h-full object-cover object-top' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='service-content bg-white p-5 md:p-8 rounded-3xl shadow-lg'>
            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>
              Tour guide who give you proper information about every destination
            </h3>

            <p className='text-sm md:text-lg text-gray-500 pb-8'>
              A tour guide service provides travelers with knowledgeable professionals who lead and enhance travel experiences. Tour guides offer insights into the history, culture, and significance of the places they visit, enriching the tourist's understanding They manage itineraries, transportation, and access to attractions, ensuring a smooth and organized tour
            </p>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>
              What Is a Tour Guide Service ?
            </h3>

            <ul className='space-y-5 pb-8'>
              <li className='flex items-center flex-wrap gap-2'>
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className='bg-prim text-white p-1 rounded-full'
                />

                <span className='text-secondary font-light tracking-wide'>
                  Explaining historical, cultural, and natural significance of place
                </span>
              </li>

              <li className='flex items-center flex-wrap gap-2'>
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className='bg-prim text-white p-1 rounded-full'
                />

                <span className='text-secondary font-light tracking-wide'>
                  Assisting with logistics like hotel check-ins, local transport, and dining
                </span>
              </li>

              <li className='flex items-center flex-wrap gap-2'>
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className='bg-prim text-white p-1 rounded-full'
                />

                <span className='text-secondary font-light tracking-wide'>
                  Offering safety tips and local etiquette guidance
                </span>
              </li>

              <li className='flex items-center flex-wrap gap-2'>
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className='bg-prim text-white p-1 rounded-full'
                />

                <span className='text-secondary font-light tracking-wide'>
                  Customizing itineraries based on traveler interests
                </span>
              </li>
            </ul>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>
              Types of Tour Guide Services
            </h3>

            <div className='service-table mb-8'>
              <ul>
                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Private Guide
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      One-on-one personalized tours, often tailored to specific interests
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Group Tours
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Shared tours with multiple travelers, often more budget-friendly
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      City Guide
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Local experts for urban exploration—museums, markets, monuments
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Cultural Guide
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Focus on traditions, festivals, cuisine, and heritage sites
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Tour Managers
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Oversee multi-day trips, handling logistics and group coordination
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap border-0!'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Nature & Wildlife Guides
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Specialists in safaris, trekking, and eco-tourism areas like sanctuaries
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>
              Key Features of Professional Tour Guides
            </h3>

            <ul className='space-y-5 pb-8'>
              <li className='flex items-center flex-wrap gap-2'>
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className='bg-prim text-white p-1 rounded-full'
                />

                <span className='text-secondary font-light tracking-wide'>
                  <strong>Certified by the Government of USA: </strong>
                  Licensed guides undergo rigorous training and exams
                </span>
              </li>

              <li className='flex items-center flex-wrap gap-2'>
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className='bg-prim text-white p-1 rounded-full'
                />

                <span className='text-secondary font-light tracking-wide'>
                  <strong>Multilingual: </strong>
                  Many guides speak English, Hindi, and regional languages
                </span>
              </li>

              <li className='flex items-center flex-wrap gap-2'>
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className='bg-prim text-white p-1 rounded-full'
                />

                <span className='text-secondary font-light tracking-wide'>
                  <strong> Local Expertise: </strong>
                  Deep knowledge of history, culture, and hidden gems
                </span>
              </li>

              <li className='flex items-center flex-wrap gap-2'>
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className='bg-prim text-white p-1 rounded-full'
                />

                <span className='text-secondary font-light tracking-wide'>
                  <strong>Flexible Engagement: </strong>
                  You can choose full-time guidance or occasional support
                </span>
              </li>

              <li className='flex items-center flex-wrap gap-2'>
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className='bg-prim text-white p-1 rounded-full'
                />

                <span className='text-secondary font-light tracking-wide'>
                  <strong>Safety & Support: </strong>
                  Guides help navigate unfamiliar areas and handle emergencies
                </span>
              </li>
            </ul>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>
              Frequently Ask Questions
            </h3>

            <div className='service-table2 mb-8'>
              {faqs.map((faq, index) => (
                <li key={faq.id} className='p-5 border-b border-gray-200 list-none!'>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className='w-full flex justify-between items-center cursor-pointer'
                  >
                    <span className='text-lg font-medium text-secondary text-start'>
                      {faq.question}
                    </span>

                    <Icon
                      icon="lsicon:right-outline"
                      width="35"
                      height="35"
                      className={`text-secondary transition-all duration-300 ${activeIndex === index ? 'rotate-90 text-yellow' : ''}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 pt-3' : 'max-h-0'}`}
                  >
                    <p className='text-sm md:text-lg font-light text-secondary'>
                      {faq.answer}
                    </p>
                  </div>
                </li>
              ))}
            </div>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>
              Our Scheduled Amenities
            </h3>

            <div className='bg-[#fff8eb]! service-table overflow-hidden border-0! mb-8'>
              <ul className='service-table3'>
                <li>
                  <div className='text-2xl font-medium font-afacad! pt-10 pe-7.5 pb-2.5 ps-7.5 w-full'>
                    For Travel
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Hotel
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Free Wi-Fi, toiletries, heated floors, in-room slippers, cable TV, room service
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Restaurants
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Free water & side dishes, call buttons, Wi-Fi, mobile ordering
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Public Facilities
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Clean restrooms, free Wi-Fi (Seoul), tourist information centers, lockers
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Transportations
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      High-speed KTX trains, T-money transportation cards, mobile apps
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap border-b-0!'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Shopping Area
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Tax refund counters, delivery services, foreign language staff (in major stores)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className='bg-[#fff8eb]! service-table overflow-hidden border-0! mb-8'>
              <ul className='service-table3'>
                <li>
                  <div className='text-2xl font-medium font-afacad! pt-10 pe-7.5 pb-2.5 ps-7.5 w-full'>
                    For Food
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Breakfast
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Korean breakfasts often include soup, rice, and side dishes; Western options
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Friendly Cafés
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Many offer English menus, desserts, Korean snacks, and unique drinks
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Delivery Apps
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Apps like Baemin, Yogiyo offer English support and deliver almost anywhere
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Veg/ Nonveg
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Growing availability, especially in Seoul; some apps help locate vegan food
                    </p>
                  </div>
                </li>

                <li className='flex flex-wrap border-b-0!'>
                  <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
                    <span className='block text-xl font-afacad! text-secondary font-medium'>
                      Free Side Dishes
                    </span>
                  </div>

                  <div className='content flex-1 py-3.75 px-7.5'>
                    <p className='text-md text-secondary font-light tracking-wide'>
                      Most Korean restaurants offer unlimited free side dishes with meals
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='service-right w-full xl:w-[38%] flex flex-col gap-10'>
          <div className='mb-8'>
            <h4 className='widget-title'>
              Recent Post
            </h4>
          </div>

          <div className='recent-post bg-white p-3 lg:p-5 xl:p-10 mb-10'>
            <div className='post1 relative flex py-5 border-b boder-dashed border-secondary/50'>
              <div className='post-date w-12 h-12 min-w-12 text-white bg-secondary flex flex-col justify-center items-center rounded-md'>
                <span className='text-xl font-semibold leading-none'>
                  14
                </span>

                <span className='text-xs leading-none'>
                  June
                </span>
              </div>

              <div className='post-info ps-4'>
                <div className='ctg text-yellow font-medium pb-1'>
                  Adam Butler
                </div>

                <div className='title'>
                  <h5 className='block text-secondary font-afacad! font-medium leading-7 text-xl hover:text-yellow transition-colors duration-300 cursor-pointer'>
                    Resources for your first trip to overseas vacation
                  </h5>
                </div>
              </div>
            </div>

            <div className='post2 relative flex py-5 border-b boder-dashed border-secondary/50'>
              <div className='post-date w-12 h-12 min-w-12 text-white bg-secondary flex flex-col justify-center items-center rounded-md'>
                <span className='text-xl font-semibold leading-none'>
                  21
                </span>

                <span className='text-xs leading-none'>
                  Sept
                </span>
              </div>

              <div className='post-info ps-4'>
                <div className='ctg text-yellow font-medium pb-1'>
                  Ricardo Bell
                </div>

                <div className='title'>
                  <h5 className='block text-secondary font-afacad! font-medium leading-7 text-xl hover:text-yellow transition-colors duration-300 cursor-pointer'>
                    How to get acquainted with natives in a strange land
                  </h5>
                </div>
              </div>
            </div>

            <div className='post3 relative flex py-5 border-b boder-dashed border-secondary/50'>
              <div className='post-date w-12 h-12 min-w-12 text-white bg-secondary flex flex-col justify-center items-center rounded-md'>
                <span className='text-xl font-semibold leading-none'>
                  12
                </span>

                <span className='text-xs leading-none'>
                  Oct
                </span>
              </div>

              <div className='post-info ps-4'>
                <div className='ctg text-yellow font-medium pb-1'>
                  Martin Hicksl
                </div>

                <div className='title'>
                  <h5 className='block text-secondary font-afacad! font-medium leading-7 text-xl hover:text-yellow transition-colors duration-300 cursor-pointer'>
                    Step by step guide to planning your ideal holiday
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className='mb-8'>
            <h4 className='widget-title'>
              Top Destinations
            </h4>
          </div>

          <div className='bg-white border border-secondary/20 rounded-3xl p-3 lg:p-5 xl:p-10 mb-10'>
            <ul className='space-y-3'>
              <li className='flex w-full justify-between items-center'>
                <span className='text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer'>
                  Thailand
                </span>

                <span className='text-sm text-gray-400'>
                  ( 05 Listing )
                </span>
              </li>

              <li className='flex w-full justify-between items-center'>
                <span className='text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer'>
                  Maldives
                </span>

                <span className='text-sm text-gray-400'>
                  ( 07 Listing )
                </span>
              </li>

              <li className='flex w-full justify-between items-center'>
                <span className='text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer'>
                  Bangkok
                </span>

                <span className='text-sm text-gray-400'>
                  ( 08 Listing )
                </span>
              </li>

              <li className='flex w-full justify-between items-center'>
                <span className='text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer'>
                  Paris
                </span>

                <span className='text-sm text-gray-400'>
                  ( 09 Listing )
                </span>
              </li>

              <li className='flex w-full justify-between items-center'>
                <span className='text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer'>
                  Spain
                </span>

                <span className='text-sm text-gray-400'>
                  ( 02 Listing )
                </span>
              </li>
            </ul>
          </div>

          <div className='mb-8'>
            <h4 className='widget-title'>
              Popular Tags
            </h4>
          </div>

          <div className='tag-cloud mb-10'>
            <span>Food</span>
            <span>Tour</span>
            <span>Pool</span>
            <span>Safari</span>
            <span>Sky</span>
            <span>Hotel</span>
            <span>Adventure</span>
            <span>Travel</span>
            <span>Desert</span>
            <span>Luxury</span>
            <span>WildLife</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesDetails