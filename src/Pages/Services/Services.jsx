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

      <div className="absolute right-40 bottom-8 hidden lg:flex flex-col text-white font-kaushan! text-2xl text-end xl:text-5xl z-1">
        Wonderful Services For You
        <h2 className="uppercase font-afacad! font-extrabold text-4xl lg:text-6xl xl:text-8xl text-yellow">
          Services We Offer
        </h2>
      </div>
    </>
  )
}

export default Services