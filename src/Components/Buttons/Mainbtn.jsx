import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Mainbtn = ({ className = "", text, to = "#" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link
        to={to}
        className={`main-btn ${className}`}
      >
        {text}
      </Link>
    </motion.div>
  )
}

export default Mainbtn