import React from 'react'
import { Link } from 'react-router-dom'

const Mainbtn = ({ className = "", text }) => {
  return (
    <>
      <Link
        className={`main-btn ${className}`}
      >
        {text}
      </Link>
    </>
  )
}

export default Mainbtn