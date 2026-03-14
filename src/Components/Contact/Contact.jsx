import contactBanner from "../../assets/con-sec-bg.jpg";
import CommonBanner from "../CommonBanner/CommonBanner";
import PageTransition from "../Transition/PageTransition";

/**
 * Contact Page
 * Demonstrates the reusability of CommonBanner and uses PageTransition.
 */
const Contact = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <PageTransition>
      <CommonBanner 
        title="Get in Touch"
        bgImage={contactBanner}
        breadcrumbs={breadcrumbs}
      />
      
      <div className="py-20 bg-gray-50 flex items-center justify-center text-gray-800">
        <div className="text-center max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to hear from you. Our team is always here to help you plan your next adventure.
          </p>
          <div className="mt-10">
            <button className="main-btn">Send Message</button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
