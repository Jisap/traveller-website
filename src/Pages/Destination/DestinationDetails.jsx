import React from 'react'
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import sectionbanner from "../../assets/section-banner.jpg"
import { useParams } from 'react-router-dom';
import destinations from "../../Data/Destination.json"




const DestinationDetails = () => {

  const { id } = useParams();
  const destination = destinations.find(d => d.id === parseInt(id));

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Destination", url: "/destination" },
    { label: destination ? destination.name : "Destination Details", url: `/destination/${id}` },
  ];

  return (
    <>
      <CommonBanner
        title="Destination Details"
        breadcrumbs={breadcrumbs}
        bgImage={sectionbanner}
      />

    </>
  )
}

export default DestinationDetails