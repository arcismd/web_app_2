import React from 'react'

import './footer.scss'

import alltime from '../../images/24-7.png'

export const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer'>
        <div className='left-item'>
                <img src={alltime} width={40} />
            </div>
            <div className='footer-centered-info'>
            © 2022 <span>Evacuatorul.MD</span>
            <p>Creat de <a href=''>sincArt</a></p>
            </div>
            <div className='right-item'>
            +373 60 125 601
            </div>
        </div>
    </div>
  )
}
