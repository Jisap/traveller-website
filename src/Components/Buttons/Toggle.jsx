import { Icon } from '@iconify/react'
import React from 'react'

const Toggle = ({ onFAncyClick, toggleMenu }) => {
  return (
    <>
      <Icon
        icon="healthicons:ui-menu"
        width="30"
        height="30"
        className="text-white cursor-pointer"
        onClick={toggleMenu}
      />
    </>
  )
}

export default Toggle