import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from '../../Components/CommonBanner/CommonBanner';


const breadcrumbs = [
  { label: "Home", url: "/" },
  { label: "Destination", url: "/destination" },
];

const Destination = () => {
  return (
    <>
      <CommonBanner
        bgImage={sectionbanner}
        title="Destination"
        breadcrumbs={breadcrumbs}
      />
    </>
  )
}

export default Destination