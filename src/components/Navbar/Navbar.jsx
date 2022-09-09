import React from 'react'
import './navbar.scss'
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const Navbar = () => {

Link = Scroll.Link;
let Button = Scroll.Button;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

const { t, i18n } = useTranslation();

function clickLanguage(lang) {
i18n.changeLanguage(lang);
}

return (
<div className='navbar-wrapper'>
  <div className='navbar'>
    <div className='languages-m'>
      <button onClick={()=> clickLanguage('ro')}>RO</button>
      <button onClick={()=> clickLanguage('ru')}>RU</button>
    </div>
    <div className='head-info'>
      <div className='header-title'>{t('Evacuator.1')} 24/24</div>
      <a href="tel:+37360125601">
        <div className='phone-number'>+373 601 25 601</div>
      </a>

      <div className='menu'>
        <div className='navbar-grid-1'>
          <div className='left-menu'>
            <Link to="avantajele" spy={true} smooth={true} duration={500}>
            {t('Evacuator.2')}
            </Link>
          </div>
          <div className='left-menu'>
            <Link to="servicii" spy={true} smooth={true} duration={500}>
            {t('Evacuator.3')}
            </Link>
          </div>

          <div className='left-menu'>
            <Link to="despre-noi" spy={true} smooth={true} duration={500}>
            {t('Evacuator.4')}
            </Link>
          </div>

        </div>
        <div className='navbar-grid-2'>
          <NavLink to={'/'}> {t('Evacuator.1')} <span>24/24</span>
          </NavLink>
          <div className='languages'>
            <button onClick={()=> clickLanguage('ro')}>RO</button>
            <button onClick={()=> clickLanguage('ru')}>RU</button>
          </div>
        </div>
        <a href="tel:+37360125601">
          <div className='navbar-grid-3'>
            +373 601 25 601
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
)
}
