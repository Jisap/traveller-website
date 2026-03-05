
import Logo from './Logo/Logo'
import Navmenu from './Navmenu/Navmenu'
import Toggle from '../Buttons/Toggle'
import { useState } from 'react'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleFancyClick = () => {
    setScrolled(!scrolled)
  }

  return (
    <>
      <div>
        <div className='flex justify-between relative z-2 w-full h-22 items-center px-4 bg-black'>
          <Logo />
          <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Toggle toggleMenu={toggleMenu} handleFancyClick={handleFancyClick} />
        </div>
      </div>
    </>
  )
}

export default Navbar