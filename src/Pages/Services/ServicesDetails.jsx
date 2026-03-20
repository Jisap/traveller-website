import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { containerVariants, fadeInUp } from '../../Animations/variants'
import sectionBanner from '../../assets/section-banner.jpg'
import { useParams } from 'react-router-dom'
import CommonBanner from '../../Components/CommonBanner/CommonBanner'
import { Icon } from '@iconify/react'
import gallery1 from "../../assets/ServicesPage/ServiceDetails/gallery-01.jpg"
import gallery2 from "../../assets/ServicesPage/ServiceDetails/gallery-02.jpg"
import gallery3 from "../../assets/ServicesPage/ServiceDetails/gallery-03.jpg"
import gallery4 from "../../assets/ServicesPage/ServiceDetails/gallery-04.jpg"
import gallery5 from "../../assets/ServicesPage/ServiceDetails/gallery-05.jpg"
import Services from "../../Data/Services.json"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const CheckItem = ({ children }) => (
  <li className='flex items-center flex-wrap gap-2'>
    <Icon
      icon="ic:baseline-check"
      width="24"
      height="24"
      className='bg-prim text-white p-1 rounded-full'
    />
    <span className='text-secondary font-light tracking-wide'>
      {children}
    </span>
  </li>
)

const TableRow = ({ title, content, isLast }) => (
  <li className={`flex flex-wrap ${isLast ? 'border-0!' : ''}`}>
    <div className='title min-w-48.75 w-48.75 py-3.75 px-7.5'>
      <span className='block text-xl font-afacad! text-secondary font-medium'>
        {title}
      </span>
    </div>
    <div className='content flex-1 py-3.75 px-7.5'>
      <p className='text-md text-secondary font-light tracking-wide'>
        {content}
      </p>
    </div>
  </li>
)

const SidebarWidget = ({ title, children, className = "" }) => (
  <div className={className}>
    <div className='mb-8'>
      <h4 className='widget-title text-secondary'>{title}</h4>
    </div>
    {children}
  </div>
)

const ServicesDetails = () => {
  const { id } = useParams();
  const service = Services.find((s) => s.id === parseInt(id));
  const [activeIndex, setActiveIndex] = useState(null);

  if (!service) return <h2 className='text-center mt-20'>Service not found</h2>;

  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const faqs = [
    { id: 1, question: "¿Qué incluye un tour guiado?", answer: "Nuestros tours guiados incluyen la planificación completa del recorrido, un guía profesional, información histórica y cultural del destino, y recomendaciones locales para aprovechar al máximo la experiencia." },
    { id: 2, question: "¿Cómo puedo reservar un tour?", answer: "Puedes reservar tu tour directamente desde nuestra web seleccionando el destino, la fecha y el número de participantes. Una vez completado el formulario, recibirás una confirmación por correo electrónico." },
    { id: 3, question: "¿Puedo cancelar o modificar mi reserva?", answer: "Sí, puedes cancelar o modificar mi reserva desde tu cuenta o contactando con nuestro equipo de soporte. Las condiciones de cancelación pueden variar dependiendo del tour reservado." },
    { id: 4, question: "¿Los tours se realizan en varios idiomas?", answer: "Sí, muchos de nuestros tours están disponibles en varios idiomas. Puedes consultar los idiomas disponibles en la página de cada tour antes de realizar la reserva." },
    { id: 5, question: "¿Cuánto duran normalmente los tours?", answer: "La duración de los tours depende del recorrido elegido. La mayoría tienen una duración entre 2 y 6 horas, aunque también ofrecemos tours de día completo." },
    { id: 6, question: "¿Los tours son adecuados para niños?", answer: "Sí, muchos de nuestros tours están diseñados para ser aptos para familias. En la descripción del tour indicamos si es especialmente recomendable para niños." },
    { id: 7, question: "¿Qué pasa si llego tarde al punto de encuentro?", answer: "Te recomendamos llegar al menos 10 minutos antes de la hora programada. Si llegas tarde, el tour puede haber comenzado y no siempre será posible reincorporarse al grupo." },
    { id: 8, question: "¿Qué debo llevar a un tour guiado?", answer: "Recomendamos llevar ropa y calzado cómodos, agua, protección solar y una cámara para capturar los mejores momentos del recorrido." },
    { id: 9, question: "¿Se pueden reservar tours privados?", answer: "Sí, ofrecemos tours privados para grupos que prefieren una experiencia más personalizada. Puedes solicitarlo desde la página del tour o contactando con nuestro equipo." },
    { id: 10, question: "¿Los tours se cancelan por mal tiempo?", answer: "En caso de condiciones meteorológicas extremas, el tour puede ser reprogramado o cancelado. En ese caso, te ofreceremos una nueva fecha o el reembolso correspondiente." }
  ];

  const tourGuideFeatures = [
    "Explaining historical, cultural, and natural significance of place",
    "Assisting with logistics like hotel check-ins, local transport, and dining",
    "Offering safety tips and local etiquette guidance",
    "Customizing itineraries based on traveler interests"
  ];

  const tourGuideTypes = [
    { title: "Private Guide", content: "One-on-one personalized tours, often tailored to specific interests" },
    { title: "Group Tours", content: "Shared tours with multiple travelers, often more budget-friendly" },
    { title: "City Guide", content: "Local experts for urban exploration—museums, markets, monuments" },
    { title: "Cultural Guide", content: "Focus on traditions, festivals, cuisine, and heritage sites" },
    { title: "Tour Managers", content: "Oversee multi-day trips, handling logistics and group coordination" },
    { title: "Nature & Wildlife Guides", content: "Specialists in safaris, trekking, and eco-tourism areas like sanctuaries" }
  ];

  const professionalFeatures = [
    { title: "Certified by the Government of USA: ", content: "Licensed guides undergo rigorous training and exams" },
    { title: "Multilingual: ", content: "Many guides speak English, Hindi, and regional languages" },
    { title: "Local Expertise: ", content: "Deep knowledge of history, culture, and hidden gems" },
    { title: "Flexible Engagement: ", content: "You can choose full-time guidance or occasional support" },
    { title: "Safety & Support: ", content: "Guides help navigate unfamiliar areas and handle emergencies" }
  ];

  const amenitiesTravel = [
    { title: "Hotel", content: "Free Wi-Fi, toiletries, heated floors, in-room slippers, cable TV, room service" },
    { title: "Restaurants", content: "Free water & side dishes, call buttons, Wi-Fi, mobile ordering" },
    { title: "Public Facilities", content: "Clean restrooms, free Wi-Fi (Seoul), tourist information centers, lockers" },
    { title: "Transportations", content: "High-speed KTX trains, T-money transportation cards, mobile apps" },
    { title: "Shopping Area", content: "Tax refund counters, delivery services, foreign language staff (in major stores)" }
  ];

  const amenitiesFood = [
    { title: "Breakfast", content: "Korean breakfasts often include soup, rice, and side dishes; Western options" },
    { title: "Friendly Cafés", content: "Many offer English menus, desserts, Korean snacks, and unique drinks" },
    { title: "Delivery Apps", content: "Apps like Baemin, Yogiyo offer English support and deliver almost anywhere" },
    { title: "Veg/ Nonveg", content: "Growing availability, especially in Seoul; some apps help locate vegan food" },
    { title: "Free Side Dishes", content: "Most Korean restaurants offer unlimited free side dishes with meals" }
  ];

  const recentPosts = [
    { date: "14", month: "June", author: "Adam Butler", title: "Resources for your first trip to overseas vacation" },
    { date: "21", month: "Sept", author: "Ricardo Bell", title: "How to get acquainted with natives in a strange land" },
    { date: "12", month: "Oct", author: "Martin Hicksl", title: "Step by step guide to planning your ideal holiday" }
  ];

  const topDestinations = [
    { name: "Thailand", listings: 5 },
    { name: "Maldives", listings: 7 },
    { name: "Bangkok", listings: 8 },
    { name: "Paris", listings: 9 },
    { name: "Spain", listings: 2 }
  ];

  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

  const tags = ["Food", "Tour", "Pool", "Safari", "Sky", "Hotel", "Adventure", "Travel", "Desert", "Luxury", "WildLife"];

  return (
    <>
      <CommonBanner
        title={service.name}
        bgImage={sectionBanner}
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Services', url: '/services' },
          { label: service ? service.name : 'Service Details', url: `/services/${id}` },
        ]}
      />

      <div className='service-container px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#effefe] gap-10 flex justify-between items-start flex-col xl:flex-row overflow-hidden'>
        <motion.div
          className='service-left w-full xl:w-[70%] flex flex-col gap-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants(0.1)}
        >
          <motion.div
            className='gallery-images h-50 sm:h-100 lg:h-150 bg-center bg-cover bg-no-repeat'
            variants={fadeInUp}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className='rounded-3xl w-full h-full'
            >
              {[service.image, ...galleryImages].map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item}
                    alt={service.name}
                    className='rounded-3xl w-full h-full object-cover object-top'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            className='service-content bg-white p-5 md:p-8 rounded-3xl shadow-lg'
            variants={fadeInUp}
          >
            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>
              Tour guide who give you proper information about every destination
            </h3>
            <p className='text-sm md:text-lg text-gray-500 pb-8'>
              A tour guide service provides travelers with knowledgeable professionals who lead and enhance travel experiences. Tour guides offer insights into the history, culture, and significance of the places they visit, enriching the tourist's understanding They manage itineraries, transportation, and access to attractions, ensuring a smooth and organized tour
            </p>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>What Is a Tour Guide Service ?</h3>
            <ul className='space-y-5 pb-8'>
              {tourGuideFeatures.map((feature, i) => (
                <CheckItem key={i}>{feature}</CheckItem>
              ))}
            </ul>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>Types of Tour Guide Services</h3>
            <div className='service-table mb-8'>
              <ul>
                {tourGuideTypes.map((type, i) => (
                  <TableRow
                    key={i}
                    title={type.title}
                    content={type.content}
                    isLast={i === tourGuideTypes.length - 1} />
                ))}
              </ul>
            </div>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>Key Features of Professional Tour Guides</h3>
            <ul className='space-y-5 pb-8'>
              {professionalFeatures.map((f, i) => (
                <CheckItem key={i}>
                  <strong>{f.title}</strong>{f.content}
                </CheckItem>
              ))}
            </ul>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>Frequently Ask Questions</h3>
            <div className='service-table2 mb-8'>
              {faqs.map((faq, index) => (
                <li key={faq.id} className='p-5 border-b border-gray-200 list-none!'>
                  <button onClick={() => toggleFAQ(index)} className='w-full flex justify-between items-center cursor-pointer'>
                    <span className='text-lg font-medium text-secondary text-start'>{faq.question}</span>
                    <Icon
                      icon="lsicon:right-outline"
                      width="35"
                      height="35"
                      className={`text-secondary transition-all duration-300 ${activeIndex === index ? 'rotate-90 text-yellow' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 pt-3' : 'max-h-0'}`}>
                    <p className='text-sm md:text-lg font-light text-secondary'>{faq.answer}</p>
                  </div>
                </li>
              ))}
            </div>

            <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>Our Scheduled Amenities</h3>
            {[
              { label: "Travel", items: amenitiesTravel },
              { label: "Food", items: amenitiesFood }
            ].map((section, idx) => (
              <div key={idx} className='bg-[#fff8eb]! service-table overflow-hidden border-0! mb-8'>
                <ul className='service-table3'>
                  <li>
                    <div className='text-2xl font-medium font-afacad! pt-10 pe-7.5 pb-2.5 ps-7.5 w-full'>For {section.label}</div>
                  </li>
                  {section.items.map((item, i) => (
                    <TableRow
                      key={i}
                      title={item.title}
                      content={item.content}
                      isLast={i === section.items.length - 1}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className='service-right w-full xl:w-[38%] flex flex-col gap-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants(0.1)}
        >
          <motion.div variants={fadeInUp}>
            <SidebarWidget title="Recent Post" className="recent-post bg-white p-3 lg:p-5 xl:p-10 mb-10">
              {recentPosts.map((post, i) => (
                <div key={i} className='relative flex py-5 border-b boder-dashed border-secondary/50'>
                  <div className='post-date w-12 h-12 min-w-12 text-white bg-secondary flex flex-col justify-center items-center rounded-md'>
                    <span className='text-xl font-semibold leading-none'>{post.date}</span>
                    <span className='text-xs leading-none'>{post.month}</span>
                  </div>
                  <div className='post-info ps-4'>
                    <div className='ctg text-yellow font-medium pb-1'>{post.author}</div>
                    <h5 className='block text-secondary font-afacad! font-medium leading-7 text-xl hover:text-yellow transition-colors duration-300 cursor-pointer'>
                      {post.title}
                    </h5>
                  </div>
                </div>
              ))}
            </SidebarWidget>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SidebarWidget title="Top Destinations" className="bg-white border border-secondary/20 rounded-3xl p-3 lg:p-5 xl:p-10 mb-10">
              <ul className='space-y-3'>
                {topDestinations.map((dest, i) => (
                  <li key={i} className='flex w-full justify-between items-center'>
                    <span className='text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer'>{dest.name}</span>
                    <span className='text-sm text-gray-400'>( {dest.listings < 10 ? `0${dest.listings}` : dest.listings} Listing )</span>
                  </li>
                ))}
              </ul>
            </SidebarWidget>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SidebarWidget title="Popular Tags" className="bg-white border border-secondary/20 rounded-3xl p-3 lg:p-5 xl:p-10 mb-10">
              <div className='tag-cloud'>
                {tags.map((tag, i) => <span key={tag}>{tag}</span>)}
              </div>
            </SidebarWidget>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SidebarWidget title="Gallery" className="bg-white border border-secondary/20 rounded-3xl p-3 lg:p-5 xl:p-10 mb-10">
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                {galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="gallery"
                    className='w-full h-25! object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer'
                  />
                ))}
              </div>
            </SidebarWidget>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default ServicesDetails