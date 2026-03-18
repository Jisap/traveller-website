import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Mainbtn = ({ className = "", text, to, type = "button", onClick }) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {to ? (
        <Link to={to} className={`main-btn ${className}`}>
          {text}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={`main-btn ${className}`}>
          {text}
        </button>
      )}
    </motion.div>
  )

  return content;
}

export default Mainbtn