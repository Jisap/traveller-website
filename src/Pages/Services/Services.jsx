import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from "../../Components/CommonBanner/CommonBanner"

const Services = () => {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
  ];
  return (
    <>
      <CommonBanner
        title="Services"
        bgImage={sectionbanner}
        breadcrumbs={breadcrumbs}
      />
    </>
  )
}

export default Services