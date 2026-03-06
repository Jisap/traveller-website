
import Logo from './Logo/Logo'
import Navmenu from './Navmenu/Navmenu'
import Toggle from '../Buttons/Toggle'
import { useState, useEffect } from 'react'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleFancyClick = () => {
    setScrolled(!scrolled)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className={`
        w-full z-20 flex justify-between items-center fixed top-0 left-0 transition-all duration-300 px-[2%] sm:px-[8%]
        ${scrolled ? "bg-black" : "bg-transparent"}
        `}
      >
        <div className='flex justify-between relative z-2 w-full h-22 items-center px-4'>
          <Logo />
          <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Toggle toggleMenu={toggleMenu} handleFancyClick={handleFancyClick} />
        </div>
      </div>
    </>
  )
}

export default Navbar