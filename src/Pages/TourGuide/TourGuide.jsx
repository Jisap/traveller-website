import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from '../../Components/CommonBanner/CommonBanner';

import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png"
import teamimg from "../../assets/Index/TourGuide/Team-1.png"
import circleshape from "../../assets/Index/TourGuide/CircleShape.png"
import team1 from "../../assets/Index/TourGuide/pic1.jpg"
import team2 from "../../assets/Index/TourGuide/pic2.jpg"
import team3 from "../../assets/Index/TourGuide/pic3.jpg"
import team4 from "../../assets/Index/TourGuide/pic4.jpg"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp, scaleIn } from "../../Animations/variants"
import teamMembers from "../../Data/Team.json"




const TourGuide = () => {

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Tour Guide", url: "/tourguide" },
  ];

  return (
    <>
      <CommonBanner
        title="Tour Guide"
        bgImage={sectionbanner}
        breadcrumbs={breadcrumbs}
      />

      <div className='flex flex-col bg-[#daeeef] sm:p-10 rounded-lg overflow-hidden'>
        <motion.div
          className='bg-white px-[2%] sm:px-[8%] py-[6%] md:py-[8%] rounded-2xl'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants(0.15, 0.2)}
        >
          <div className='title flex flex-col justify-center items-center text-center relative mb-10'>
            <motion.h1 className='text-secondary text-4xl md:text-6xl font-bold' variants={fadeInUp}>
              <span className='text-yellow'> Meet With </span> Tour Guide
            </motion.h1>

            <motion.p className='text-secondary my-2 text-lg' variants={fadeInUp}>
              Destinations worth exploring! Here are a few popular spots
            </motion.p>

            <motion.img
              src={titleShape}
              alt="titleShape"
              className="w-[35%] object-contain absolute -bottom-12"
              variants={scaleIn}
            />
          </div>



          <motion.div
            className="team-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-10 w-full "
            variants={containerVariants(0.2, 0.4)}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="team-item bg-wite [box-shadow:0px_18px_18px_rgba(0,106,114,0.1)] p-3.5 rounded-2xl"
                variants={fadeInUp}
              >
                <div className="team-img rounded-2xl overflow-hidden group">
                  <img
                    src={member.image}
                    alt="team-img"
                    className="group-hover:scale-110 transition-all duration-300"
                  />
                </div>

                <div className="team-content text-center pt-5">
                  <ul className="flex justify-center mb-2">
                    <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                      <Link to="https://x.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                        <Icon
                          icon="codicon:twitter"
                          width="16"
                          height="16"
                        />
                      </Link>
                    </li>

                    <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                      <Link to="https://facebook.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                        <Icon
                          icon="ic:outline-facebook"
                          width="16"
                          height="16"
                        />
                      </Link>
                    </li>

                    <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                      <Link to="https://instagram.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                        <Icon
                          icon="mingcute-instagram-line"
                          width="16"
                          height="16"
                        />
                      </Link>
                    </li>

                    <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                      <Link to="https://youtube.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                        <Icon
                          icon="line-md:youtube"
                          width="16"
                          height="16"
                        />
                      </Link>
                    </li>
                  </ul>

                  <Link to={`/tourguide/${member.id}`}>
                    <h3 className="text-secondary text-3xl pt-2 pb-1 font-medium hover:text-yellow transition-colors duration-300">
                      {member.name}
                    </h3>
                  </Link>

                <span className="text-yellow">
                  Tourist Guide
                </span>
              </div>
              </motion.div>
            ))}
        </motion.div>

      </motion.div>
    </div >
    </>
  )
}

export default TourGuide