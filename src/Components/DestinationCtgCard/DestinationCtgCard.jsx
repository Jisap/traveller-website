import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCtgCard = ({ item }) => {
  return (
    <>
      <Link
        to={`/destination/${item.id}`}
        className='destination-item w-full'
      >
        <div className='destination-image h-full w-full relative group overflow-hidden rounded-4xl'>
          <img
            src={item.image}
            alt={item.name}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />

          <span className='bg-white w-full absolute text-xl text-center py-3 rounded-2xl bottom-0 left-0 shadow-xl font-medium group-hover:bg-secondary group-hover:text-white transition-colors duration-300'>
            {item.name}
          </span>
        </div>
      </Link>
    </>
  )
}

export default DestinationCtgCard