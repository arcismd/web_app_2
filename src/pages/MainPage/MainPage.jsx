import React from 'react'
import { AboutUs } from '../../components/AboutUs/AboutUs'
import { Footer } from '../../components/Footer/Footer'

import './mainpage.scss'

import phone from '../../images/phone.png'
import place from '../../images/place.png'

export const MainPage = () => {
  return (
    <>
    <div className='mainpage-wrapper'>
        <div className='mainpage'>
            <h1>ACTIVĂM <span>NON-STOP</span><br></br>
            <span id='subtext'><span>Doar</span> de la <span>200 lei</span></span></h1>
            <div className='call-us-element'>
                <img className='phone' src={phone} width={100} alt='Phone' />
            </div>
            <h2>Apelează <span>acum!</span></h2>
            <div className='services-info'>
                <div className='left-item'>
                <p> <span><img src={place} width={24} height={24} /></span> Local </p>
                <p> <span><img src={place} width={24} height={24} /></span> Național </p>
                <p> <span><img src={place} width={24} height={24} /></span> Internațional </p>
                </div>
                <div className='right-item'>
                    <div>Partener de <span className='t'>încredere</span> <span className='p'>pe piaţa de profil</span></div>
                </div>
            </div>
        </div>
        <div className='mainp'>
            <div className='flex-header-element'>
            <div className='header-left-item'>
            Noi, cei de la <span>"EVACUATORUL"</span>, vă oferim un serviciu de <span className='t'>remorcare 24 de ore pe zi</span> și asistență rutieră 24 de ore pe zi.
            <p>Garantat la <span>cel mai mic preț</span> de pe piață -</p>
            <p className='space-text-left'>În raport cu cea mai bună <span>calitate</span>.</p>
            </div>
            <div className='header-right-item'>
        <h1>ACTIVĂM <span>NON-STOP</span><br></br>
            <span id='subtext'><span>Doar</span> de la <span>200 lei</span></span></h1>
            <div className='call-us-element'>
                <img className='phone' src={phone} width={100} alt='Phone' />
            </div>
            <h2>Apelează <span>acum!</span></h2>
            </div>
            </div>
            <div className='services-info'>
                <div className='services-info-flex'>
                <div className='left-item'>
                <p> <span><img src={place} width={24} height={24} /></span> Local </p>
                <p> <span><img src={place} width={24} height={24} /></span> Național </p>
                <p> <span><img src={place} width={24} height={24} /></span> Internațional </p>
                </div>
                <div className='center-item-2'>
                    Evacuăm automobilul dvs. <span className='t'>în 15 minute</span>.
                </div>
                <div className='right-item'>
                    <div>Partener de <span className='t'>încredere</span> <span className='p'>pe piaţa de profil</span></div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <AboutUs />
    <Footer />
    </>
  )
}
