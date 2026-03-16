import React from 'react'
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


    </>
  )
}

export default ServicesDetails