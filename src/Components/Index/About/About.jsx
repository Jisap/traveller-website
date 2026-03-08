

import icon1 from "../../../assets/Index/About/travel-guide.png"
import icon2 from "../../../assets/Index/About/mission-icon.png"
import Mainbtn from "../../Buttons/Mainbtn"
import author1 from "../../../assets/Index/About/pic1.jpg"
import author2 from "../../../assets/Index/About/pic2.jpg"
import author3 from "../../../assets/Index/About/pic3.jpg"
import airplane from "../../../assets/Index/About/airplane.png"
import aboutimg1 from "../../../assets/Index/About/about-image01.jpg"
import aboutimg2 from "../../../assets/Index/About/about-image02.jpg"
import aboutimg3 from "../../../assets/Index/About/about-image03.jpg"



const About = () => {
  return (
    <div className="px-[2%] ms:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-250 bg-yellow-light">
      <div className="w-full xl:w-[50%] title relative h-full">
        <h1 className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
          We <span className="text-yellow"> Recommend</span>
          Beautiful Destinations Every Month
        </h1>

        <p className="text-gray-500 pb-5">
          Traveller is a multi-award-winning strategy and content creation agency that specializes in travel marketing. They have one of the world's largest and most influential online travel communities, helping brands and tourism.
        </p>

        <ul className="space-y-5">
          <li className="flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl">
            <img src={icon1} alt="icon1" className="w-14 h-14" />

            <div>
              <span className="text-xl font-semibold">Trusted travel guide</span>

              <p>
                Provides reliable information to help travelers plan their trips efficiently and safely.
              </p>
            </div>
          </li>

          <li className="flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl">
            <img src={icon2} alt="icon2" className="w-14 h-14" />

            <div>
              <span className="text-xl font-semibold">Mission & Vision</span>

              <p>Aims to connect people to positive experience through travel, helping them see the world differently.
                Provides reliable information to help travelers plan their trips efficiently and safely.
              </p>
            </div>
          </li>
        </ul>

        <div className="flex items-center flex-wrap gap-10 pt-8">
          <Mainbtn text={"Discover More"} to="/about" />

          <div className="flex items-center gap-5">
            <div className="author-img flex items-center">
              <img src={author1} alt="authore1" className="w-10 rounded-full" />
              <img src={author2} alt="authore2" className="w-10 rounded-full -mx-3" />
              <img src={author3} alt="authore3" className="w-10 rounded-full " />
            </div>

            <p className="text-md">
              <span className="block text-2xl font-bold">
                3.5k
              </span>
              Happy Customer
            </p>
          </div>
        </div>
      </div>

      <div className="about-image w-full xl:w-[50%] relative hidden xl:flex justify-center items-center h-full">
        <div className="airplane absolute transition-all duration-500 -top-1 right-0">
          <img src={airplane} alt="airplane" />
        </div>

        <div className="about-image1">
          <img src={aboutimg1} alt="aboutimg1" className="rounded-full w-full" />
        </div>

        <div className="about-image2">
          <img src={aboutimg2} alt="aboutimg2" className="h-full w-full" />
        </div>

        <div className="about-image3">
          <img src={aboutimg3} alt="aboutimg2" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;