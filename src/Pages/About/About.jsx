import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from "../../Components/CommonBanner/CommonBanner"
import PageTransition from "../../Components/Transition/PageTransition"

/**
 * About Page
 * Uses the reusable CommonBanner and wraps content in PageTransition.
 */
const About = () => {

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" }
  ];

  return (
    <PageTransition>
      <CommonBanner
        title="About Us"
        bgImage={sectionbanner}
        breadcrumbs={breadcrumbs}
      />
      {/* Additional content for the About page will go here */}

    </PageTransition>
  )
}

export default About