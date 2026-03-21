import sectionbanner from "../../assets/section-banner.jpg"
import Mainbtn from "../../Components/Buttons/Mainbtn";
import CommonBanner from '../../Components/CommonBanner/CommonBanner';


const breadcrumbs = [
  { label: "Home", url: "/" },
  { label: "Contact", url: "/contact" },
];

const Contact = () => {
  return (
    <>
      <CommonBanner
        title="Contact"
        breadcrumbs={breadcrumbs}
        bgImage={sectionbanner}
      />

      <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[8%] bg-[#e6f1f3]">
        <div className="bg-white p-5 md:p-10 rounded-3xl w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331786942!2d73.09068539198522!3d22.32224063536357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1772012708310!5m2!1sen!2sin"
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "20px",
            }}
          ></iframe>

          <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-10 pt-10">
            <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl">
              <h1 className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
                <span className="text-yellow">Reach</span> & Get in Touch With Us!
              </h1>

              <p className="text-gray-500 pb-8">
                We'd love to hear frp, you. Our friendly team is always here to chat
              </p>

              <form method="post" className="space-y-6">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none transition duration-300"
                  required
                />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none transition duration-300"
                  required
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none transition duration-300"
                  required
                />

                <textarea
                  type="text"
                  rows="5"
                  placeholder="Enter Your Message"
                  className="w-full rounded-[30px] px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none transition duration-300"
                  required
                />

                <Mainbtn text="Send Message" className="w-full" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact