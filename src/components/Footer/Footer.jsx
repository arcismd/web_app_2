import React from 'react'
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './footer.scss'

import alltime from '../../images/24-7.png'

export const Footer = () => {

const { t, i18n } = useTranslation();

function clickLanguage(lang) {
i18n.changeLanguage(lang);
}

return (
<div className='footer-wrapper'>
  <div className='footer'>
    <div className='left-item'>
      <img src={alltime} width={40} alt='24/24' />
    </div>
    <div className='footer-centered-info'>
      © 2022 <span>Evacuatorul.MD</span>
      <p>{t('info.20')} <a href='http://sincart.md/'>sincArt</a></p>
    </div>
    <a href="tel:+37360125601">
      <div className='right-item'>
        +373 601 25 601
      </div>
    </a>
  </div>
</div>
)
}
