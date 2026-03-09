"use client"

import titleShape from "../../../assets/Index/BookingSteps/Title-Shape.png"
import teamimg from "../../../assets/Index/TourGuide/Team-1.png"
import circleshape from "../../../assets/Index/TourGuide/CircleShape.png"
import team1 from "../../../assets/Index/TourGuide/pic1.jpg"
import team2 from "../../../assets/Index/TourGuide/pic2.jpg"
import team3 from "../../../assets/Index/TourGuide/pic3.jpg"
import team4 from "../../../assets/Index/TourGuide/pic4.jpg"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"


const teamMembers = [
  { id: 1, name: "Murphy", image: team1 },
  { id: 2, name: "Alexis Cox", image: team2 },
  { id: 3, name: "Murray", image: team3 },
  { id: 4, name: "Crawford", image: team4 },
];



const TourGuide = () => {
  return (
    <>
      <div className='flex flex-col bg-[#daeeef] sm:p-10 rounded-lg'>
        <div className='bg-white px-[2%] sm:px-[8%] py-[6%] md:py-[8%] rounded-2xl'>
          <div className='title flex flex-col justify-center items-center text-center relative mb-10'>
            <h1 className='text-secondary text-4xl md:text-6xl font-bold'>
              <span className='text-yellow'> Meet With </span> Tour Guide
            </h1>

            <p className='text-secondary my-2 text-lg'>
              Destinations worth exploring! Here are a few popular spots
            </p>

            <img src={titleShape} alt="titleShape" className="w-[35%] object-contain absolute -bottom-12" />
          </div>

          <div className="tour-guide-container bg-no-repeat bg-cover bg-center flex justify-between items-start flex-col xl:flex-row pt-10 gap-10">
            <div className="guid-image w-full xl:w-[50%] relative">
              <img src={circleshape} alt="circleShape" className="absolute top-0 left-0 w-full h-full rotate" />

              <div className="title relative text-center text-secondary text-3xl sm:text-4xl md:text-6xl font-kaushan font-medium py-8">
                Meet with <span className="text-white block text-4xl sm:text-5xl md:text-8xl font-medium [text-shadow:2px_5px_0px_rgba(14,137,145,0.2)]">
                  Expert Guide
                </span>
              </div>

              <img src={teamimg} alt="teamImg" className="w-full h-full z-1 relative" />
            </div>

            <div className="team-wrap grid grid-cols-1 md:grid-cols-2 gap-10 w-full xl:w-[50%]">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-item bg-wite [box-shadow:0px_18px_18px_rgba(0,106,114,0.1)] p-3.5 rounded-2xl">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourGuide