
import Logo from './Logo/Logo'
import Navmenu from './Navmenu/Navmenu'

const Navbar = () => {
  return (
    <>
      <div>
        <div className='flex justify-between relative z-2 w-full h-22 items-center px-4 bg-black'>
          <Logo />
          <Navmenu />
        </div>
      </div>
    </>
  )
}

export default Navbar