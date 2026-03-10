import CountUp from "react-countup"
import counter1 from "../../../assets/Index/Counter/count-icon1.png"
import counter2 from "../../../assets/Index/Counter/count-icon2.png"
import counter3 from "../../../assets/Index/Counter/count-icon3.png"
import counter4 from "../../../assets/Index/Counter/count-icon4.png"

const counters = [
  { id: 1, title: "Awards Winning", value: 3600, suffix: "+", image: counter1 },
  { id: 2, title: "Happy Traveler", value: 7634, suffix: "+", image: counter2 },
  { id: 3, title: "Tours Success", value: 2.5, suffix: "K", image: counter3, decimals: 1 },
  { id: 4, title: "Our Experience", value: 25, suffix: "+", image: counter4 },
];

const Counter = () => {
  return (
    <>
      <div className='counter-wrap bg-secondary px-[2%] sm:px-[8%] lg:px-[12%] py-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10'>
        {counters.map((item) => (
          <div key={item.id} className="counter-item flex items-center border border-dashed border-gray-50/20 rounded-lg px-5 py-8 gap-8">
            <img src={item.image} alt="counter" className="w-14 h-14" />

            <div className="counter-content">
              <h4 className="text-white text-2xl font-medium">
                {item.title}
              </h4>

              <span className="text-yellow text-5xl font-bold font-afacad">
                <CountUp
                  end={item.value}
                  duration={2.5}
                  decimals={item.decimals || 0}
                />
                {item.suffix}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Counter