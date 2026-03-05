import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ className = "" }) => {
  return (
    <>
      <Link to="/" className={`logo cursor-pointer text-2xl md:text-4xl text-white font-kaushan`}>
        Travelle
        <span className='text-prim'>r.</span>
      </Link>
    </>
  )
}

export default Logo