import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <>
      <div className='w-full bg-white/10 h-16 flex items-center justify-center gap-3'>
        <p className='text-orange-400 text-2xl'>Logo</p>
        <NavLink to="/about" className={({isActive}) => {
          return `${isActive? "text-orange-400" : "text-white"}`
        }}>About</NavLink>
        <NavLink
          to="contact"
              className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
              }
          >
              Contact
          </NavLink>
        <NavLink to="pricing" className={({isActive}) => `${isActive? "text-orange-400": "text-white"}`}>
          Price
        </NavLink>
      </div>
    </>
  )
}

export default Header