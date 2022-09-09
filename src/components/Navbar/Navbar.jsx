import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <div className='navbar'>
            <div className='head-info'>
                <div className='header-title'>Evacuator 24/24</div>
                <div className='phone-number'>+373 60 125601</div>

                <div className='menu'>
                  <div className='navbar-grid-1'>
                    <div className='left-menu'>
                    <NavLink
                    to={'keka'}>Avantajele
                    </NavLink></div>
                    <NavLink
                    to={'/'}>
                    <div className='left-menu'>Servicii</div>
                    </NavLink>
                    <NavLink
                    to={'/'}>
                    <div className='left-menu'>Despre Noi</div>
                    </NavLink>
                  </div>
                  <div className='navbar-grid-2'>
                    <NavLink
                    to={'/'}>
                      Evacuator <span>24/24</span>
                    </NavLink>
                  </div>
                  <div className='navbar-grid-3'>
                    +373 60 125 601
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
