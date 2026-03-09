import React from 'react'





const DestinationCard = ({ title, listing, image }) => {
  return (
    <>
      <div className='destination-item hover:bg-white group border border-gray-50/20 rounded-xl p-3.75 transition-all duration-500 ease-in-out'>
        <div className='destination-image h-80 w-full rounded-xl overflow-hidden relative'>
          <img src={image} alt="destination" className='w-full h-full! object-cover' />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className='destination-content text-center pt-5 absolute bottom-0 left-0 right-0 pb-5'>
            <h4 className='text-2xl text-white font-medium pb-1 group-hover:text-yellow transition-colors duration-500'>
              {title}
            </h4>

            <span className='text-md text-white group-hover:text-yellow transition-colors duration-500'>
              {listing} Listing
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default DestinationCard