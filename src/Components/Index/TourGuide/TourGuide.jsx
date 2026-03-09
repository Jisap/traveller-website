"use client"

import titleShape from "../../../assets/Index/BookingSteps/Title-Shape.png"
import teaming from "../../../assets/Index/TourGuide/Team-1.png"
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
          </div>
        </div>
      </div>
    </>
  )
}

export default TourGuide