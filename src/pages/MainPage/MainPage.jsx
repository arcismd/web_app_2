import React from 'react'
import { AboutUs } from '../../components/AboutUs/AboutUs'
import { Footer } from '../../components/Footer/Footer'
import { useTranslation } from 'react-i18next';


import './mainpage.scss'

import phone from '../../images/phone.png'
import place from '../../images/place.png'

export const MainPage = () => {

const { t, i18n } = useTranslation();

function clickLanguage(lang) {
i18n.changeLanguage(lang);
}

return (
<>
    <div className='mainpage-wrapper'>
        <div className='mainpage'>
            <h1>{t('act.1')} <span>NON-STOP</span><br></br>
                <span id='subtext'><span>{t('act.2')}</span> {t('act.3')} <span>200 {t('act.4')}</span></span></h1>
            <a href="tel:+37360125601">
                <div className='call-us-element'>
                    <img className='phone' src={phone} width={100} alt='Phone' />
                </div>
            </a>
            <h2>{t('act.5')} <span>{t('act.6')}</span></h2>
            <div className='services-info'>
                <div className='left-item'>
                    <p> <span><img src={place} width={24} height={24} alt='Local' /></span> {t('info-bottom.1')} </p>
                    <p> <span><img src={place} width={24} height={24} alt='National' /></span> {t('info-bottom.2')} </p>
                    <p> <span><img src={place} width={24} height={24} alt='International' /></span> {t('info-bottom.3')}
                    </p>
                </div>
                <div className='right-item'>
                    <div>{t('info-bottom.6')} <span className='t'>{t('info-bottom.7')}</span> <span
                            className='p'>{t('info-bottom.8')}.</span></div>
                </div>
            </div>
        </div>
        <div className='mainp'>
            <div className='flex-header-element'>
                <div className='header-left-item'>
                    {t('info-top.1')} <span>"EVACUATORUL"</span>, {t('info-top.2')} <span
                        className='t'>{t('info-top.3')}</span> {t('info-top.4')}.
                    <p>{t('info-top.5')} <span>{t('info-top.6')}</span> {t('info-top.7')} -</p>
                    <p className='space-text-left'>{t('info-top.8')} <span>{t('info-top.9')}</span>.</p>
                </div>
                <div className='header-right-item'>
                    <h1>{t('act.1')} <span>NON-STOP</span><br></br>
                        <span id='subtext'><span>{t('act.2')}</span> {t('act.3')} <span>200 {t('act.4')}</span></span>
                    </h1>
                    <a href="tel:+37360125601">
                        <div className='call-us-element'>
                            <img className='phone' src={phone} width={100} alt='Phone' />
                        </div>
                    </a>
                    <h2>{t('act.5')} <span>{t('act.6')}</span></h2>
                </div>
            </div>
            <div className='services-info'>
                <div className='services-info-flex'>
                    <div className='left-item'>
                        <p> <span><img src={place} width={24} height={24} alt='Local' /></span> {t('info-bottom.1')}
                        </p>
                        <p> <span><img src={place} width={24} height={24} alt='National' /></span> {t('info-bottom.2')}
                        </p>
                        <p> <span><img src={place} width={24} height={24} alt='International' /></span>
                            {t('info-bottom.3')} </p>
                    </div>
                    <div className='center-item-2'>
                        {t('info-bottom.4')} <span className='t'><br></br>{t('info-bottom.5')}</span>
                    </div>
                    <div className='right-item'>
                        <div>{t('info-bottom.6')} <span className='t'>{t('info-bottom.7')}</span> <span
                                className='p'>{t('info-bottom.8')}.</span></div>
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
