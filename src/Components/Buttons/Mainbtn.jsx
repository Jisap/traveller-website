import React from 'react'
import { Link } from 'react-router-dom'

const Mainbtn = ({ className = "", text, to = "#" }) => {
  return (
    <>
      <Link
        to={to}
        className={`main-btn ${className}`}
      >
        {text}
      </Link>
    </>
  )
}

export default Mainbtn