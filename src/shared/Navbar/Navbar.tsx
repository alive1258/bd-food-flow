// import { useState } from 'react'
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import { NavLink } from 'react-router-dom'

// const navLinks = [
//   {
//     path: '/',
//     display: 'Home',
//   },
//   {
//     path: '/about',
//     display: 'About',
//   },

//   {
//     path: '/contact',
//     display: 'Contact',
//   },
//   {
//     path: '/admin',
//     display: 'Dashboard',
//   },
// ]

// const Navbar = () => {
//   const [nav, setNav] = useState(false)

//   const topFunction = () => {
//     setNav(!nav)
//     document.body.scrollTop = 0
//     document.documentElement.scrollTop = 0
//   }
//   const menuMobile = `absolute z-50 transition-all duration-300 ${
//     nav
//       ? 'ease-out transform opacity-100 scale-100'
//       : 'ease-in transform opacity-0 scale-95 pointer-events-none'
//   } bg-[#ffffff] font-medium w-full h-screen md:hidden px-6 pt-4`

//   return (
//     <>
//       <header className="flex fixed bg-[#000] z-50 items-center w-full py-6 ">
//         <div className="container">
//           <div className="flex  justify-between items-center ">
//             <div className="flex items-center space-x-2 md:text-[32px] text-[25px] font-[900]">
//               <span className="text-[#000]">Event</span>
//               <span className="text-[#0B63E5]">360</span>
//             </div>

//             {/* nav item  */}
//             <div className="flex items-center gap-4">
//               <div>
//                 <ul className="hidden md:flex items-center text-[#000]  text-[16px] font-medium  gap-4">
//                   {navLinks.map((link, index) => (
//                     <li key={index}>
//                       <NavLink
//                         onClick={topFunction}
//                         to={link.path}
//                         className={navClass =>
//                           navClass.isActive
//                             ? 'text-[#0B63E5] '
//                             : ' hover:text-[#0B63E5]'
//                         }
//                       >
//                         {link.display}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div onClick={topFunction} className="md:hidden block z-50">
//                 {!nav ? (
//                   <AiOutlineMenu size={25} className="text-[#09adfe]" />
//                 ) : (
//                   <AiOutlineClose className="text-red-500" size={25} />
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* mobile menu  */}

//           <div className={menuMobile}>
//             <ul className="space-y-4 text-[#000] text-[16px] gap-4">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     onClick={topFunction}
//                     to={link.path}
//                     className={navClass =>
//                       navClass.isActive
//                         ? 'text-[#0B63E5] '
//                         : ' hover:text-[#0B63E5]'
//                     }
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }

// export default Navbar

import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import ffLogo from '../../assets/images/ffLogo.png'
import Logout from '../../components/pages/Login/LogOutForm'
import { useAuth } from '../../hooks/useAuth'
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { auth } = useAuth()

  const topFunction = () => {
    setOpen(!open)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div className="w-full z-50 fixed top-0 left-0 bg-[#000] text-white ">
      <div className="container ">
        <div className="md:flex items-center justify-between  py-4">
          {/* logo section */}
          <div className="cursor-pointer flex items-center gap-1">
            <NavLink
              onClick={topFunction}
              to="/"
              className=" text-white duration-500"
            >
              <img className="w-16" src={ffLogo} alt="logo" />
            </NavLink>
            <div className="flex space-x-2 text-3xl font-bold">
              <h1>
                <span className="">F</span>ood{' '}
              </h1>
              <h1>
                <span className="text-[#023e8a] font-bold">Flow</span>
              </h1>
            </div>
          </div>
          {/* Menu icon */}
          <div
            onClick={topFunction}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 "
          >
            {open ? (
              <AiOutlineClose className="text-white z-50" />
            ) : (
              <AiOutlineMenu className="text-white z-50" />
            )}
          </div>
          {/* linke items */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 fixed bg-[#000]  md:absolute lg:static  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-24' : 'left-[-100%]'
            }`}
          >
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <NavLink
                to="/"
                onClick={topFunction}
                className=" text-white duration-500 cursor-pointer"
              >
                Home
              </NavLink>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <NavLink
                onClick={topFunction}
                to="/all-supplies"
                className="text-white duration-500 z-50 cursor-pointer"
              >
                All Supplies
              </NavLink>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <NavLink
                onClick={topFunction}
                to="/contact"
                className="text-white duration-500 cursor-pointer"
              >
                Contact
              </NavLink>
            </li>
            {auth && (
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <NavLink
                  onClick={topFunction}
                  to="/dashboard"
                  className="text-white duration-500 cursor-pointer"
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            {/* 023e8a */}
            {auth ? (
              <Logout />
            ) : (
              <button className=" bg-[#023e8a] cursor-pointer text-white md:ml-8 font-semibold px-4 py-2 rounded duration-500 md:static">
                <Link to="/login">Login</Link>
              </button>
            )}
          </ul>
          {/* button */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
