import React from 'react'
import { MobileNavigation } from './constant/Navigation'
import { NavLink } from 'react-router-dom'

const MobileNav = () => {
  return (
    <section className='lg:hidden h-14 bg-black/75 backdrop-blur-3xl fixed bottom-0 w-full
    z-40'>
      <div className='flex items-center justify-between h-full text-neutral-400'>
        {
          MobileNavigation.map((nav, index) => {
            return (
              <NavLink 
                key={nav.label + 'MobileNavigation'} 
                to={nav.href} 
                className={({ isActive }) => `px-3 flex items-center justify-center h-full flex-col ${isActive ? "text-neutral-100" : ""}`}
              >
                <div className='text-2xl'>
                  {nav.icon}
                </div>
                <p className='text-sm'>{nav.label}</p>
              </NavLink>
            )
          })
        }
      </div>
    </section>
  )
}

export default MobileNav