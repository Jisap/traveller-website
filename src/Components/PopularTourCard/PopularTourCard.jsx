import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { fadeInUp } from "../../Animations/variants"
import Mainbtn from "../Buttons/Mainbtn"

const PopularTourCard = ({ tour }) => {
  return (
    <>
      <motion.div
        variants={fadeInUp}
        className="tour-card transition-all duration-300 cursor-pointer"
      >
        <div className="popular-tour-image flex-shrink-0">
          <img src={tour.image} alt="popular-tour-image" className="w-full h-full object-cover block" />
        </div>

        <div className="popular-tour-content flex-grow">
          {/* Group title and info to allow alignment */}
          <div className="flex flex-col grow">
            <h4 className="text-lg text-secondary font-medium pb-3 hover:text-yellow transition-colors duration-300">
              {tour.title}
            </h4>

            {/* mt-auto ensures this row is pushed down if the title is short */}
            <ul className="flex justify-between items-center gap-1 pb-5 mt-auto">
              <li className="flex gap-1 text-[10px] sm:text-xs text-secondary font-medium items-center shrink-0">
                <span className="whitespace-nowrap">({tour.review})</span>

                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Icon
                      key={index}
                      icon="material-symbols:star-rounded"
                      width="16"
                      height="16"
                      className="text-yellow"
                    />
                  ))}
                </div>
              </li>

              <li className="flex items-center gap-1.5 text-xs sm:text-sm text-secondary font-medium shrink-0">
                <Icon
                  icon="simple-line-icons:calendar"
                  width="18"
                  height="18"
                />
                <span className="whitespace-nowrap">{tour.days}</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between border-t border-secondary/5 pt-3">
            <Mainbtn
              to={`/tours/${tour.id}`}
              text="Book Now"
              className="py-2! px-4! text-sm!"
            />

            <div className="tour-price flex items-center gap-1 text-secondary">
              <span className="text-2xl font-bold">{tour.price}</span>
              <span className="text-sm">Per Day</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default PopularTourCard