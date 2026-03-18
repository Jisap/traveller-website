import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import DestinationCtgCard from "../../Components/DestinationCtgCard/DestinationCtgCard";
import destinations from "../../Data/Destination.json"


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

      <div className="destination px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 bg-[#e6f1f3]">
        {destinations.map((item) => (
          <DestinationCtgCard key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default Destination