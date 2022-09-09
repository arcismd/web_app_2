import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from 'react-i18next';

import price from '../../images/price.png'
import time from '../../images/time.png'
import every from '../../images/24.png'
import care from '../../images/care.png'

import phone from '../../images/phone-1.png'
import phone2 from '../../images/phone-2.png'

import img1 from '../../images/carousel/c-1.jpeg'
import img2 from '../../images/carousel/c-2.jpeg'
import img3 from '../../images/carousel/c-3.jpeg'
import img4 from '../../images/carousel/c-4.jpeg'

import './aboutus.scss'

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const AboutUs = () => {
const responsive = {
superLargeDesktop: {
// the naming can be any, depends on you.
breakpoint: { max: 4000, min: 3000 },
items: 5
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 3
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 2
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1
}

};

const { t, i18n } = useTranslation();

function clickLanguage(lang) {
i18n.changeLanguage(lang);
}

return (
<>
    <div className='about-us-wrapper'>
        <div className='what-to-do'>
            <h1><span className='top-line'>{t('what-to-do.1')}</span> {t('what-to-do.2')}. <span
                    className='bottom-line'>{t('what-to-do.3')}</span></h1>
            <div className='info-1'>
                <p>1. {t('what-to-do.4')}</p>
                <span className='info-item'>{t('what-to-do.8')} <strong>{t('what-to-do.9')}</strong>.
                    {t('what-to-do.10')} <strong className='phone-number-next-line'>+373 60 125 601.</strong></span>
            </div>
            <div className='info-1'>
                <p>2. {t('what-to-do.5')}</p>
                <span className='info-item'>{t('what-to-do.11')} <strong>{t('what-to-do.12')}</strong>,
                    {t('what-to-do.13')}</span>
            </div>
            <div className='info-1'>
                <p>3. {t('what-to-do.6')}</p>
                <span className='info-item'>{t('what-to-do.14')} <strong>{t('what-to-do.15')}</strong>
                    {t('what-to-do.16')}. </span>
            </div>
            <div className='info-1'>
                <p>4. {t('what-to-do.7')}</p>
                <span className='info-item'>{t('what-to-do.17')} <strong>{t('what-to-do.18')}</strong>
                    {t('what-to-do.19')}. </span>
            </div>
        </div>
        <div className='about-us'>
            <div className='dashed-line'></div>
            <h2>{t('about-us.1')},</h2>
            <h3>{t('about-us.2')}</h3>
            <div>
                <img src={price} width={120} alt='Price' />
                <p>{t('about-us.3')}
                    <span>m{t('about-us.7')}</span>
                </p>
            </div>
            <div>
                <img src={time} width={120} alt='Fast' />
                <p>{t('about-us.4')}
                    <span>{t('about-us.8')}</span>
                </p>
            </div>
            <div>
                <img src={every} width={120} alt='24/7' />
                <p>{t('about-us.5')}
                    <span>{t('about-us.9')}</span>
                </p>
            </div>
            <div>
                <img src={care} width={120} alt='Care' />
                <p>{t('about-us.6')}
                    <span>{t('about-us.10')}</span>
                </p>
            </div>
        </div>
        <div className='warranties'>
            <h2>{t('warranties.1')}</h2>
            <h3>{t('warranties.2')}.</h3>
        </div>
        <div className='call-us'>
            <h2>{t('warranties.3')}</h2>
            <div className='btn'>
                <a href="tel:+37360125601"><button className='call-btn'> <img src={phone} width={40} alt='Phone' />+373
                        601 25 601</button></a>
            </div>
            <h3>{t('warranties.4')}.</h3>
        </div>
        <div className='pricelist'>
            <div className='flex'>
                <div className='line'></div>
                <h2><strong>{t('price.1')}</strong></h2>
                <div className='line'></div>
            </div>
            <div className='text'>{t('price.2')} <span>200 {t('price.3')}</span>
                <div className='info-text'>
                    *{t('price.4')}
                </div>
            </div>
        </div>
        <div className='info'>
            <h2>{t('info.1')} <strong>24/24</strong>, {t('info.2')} <strong>{t('info.3')}</strong>, {t('info.4')}
                <strong>{t('info.5')}</strong>.</h2>
        </div>
        <div className='locations'>
            <h2>{t('info.6')} <span>{t('info.15')}:</span></h2>
            <ul>
                <div>
                    <li>{t('info.8')}</li>
                    <li>{t('info.9')}</li>
                    <li>{t('info.10')}</li>
                    <li>{t('info.11')}</li>
                </div>
                <div>
                    <li>{t('info.12')}</li>
                    <li>{t('info.13')}</li>
                    <li>{t('info.14')}</li>
                </div>
            </ul>
            <div className='show-text'>
                <h3>{t('info.7')}. <span>{t('info.16')}.</span></h3>
            </div>
            <div className='locations-b'></div>
        </div>
        <div className='call-us-2'>
            <h2>{t('warranties.3')}</h2>
            <div className='btn'>
                <a href="tel:+37360125601"><button className='call-btn'> <img src={phone2} width={40} alt='Phone' />+373
                        601 25 601</button></a>
            </div>
            <div className='space'></div>
        </div>
        <h1 className='info-2-title'>{t('info.19')}</h1>
        <div className='info-2'>
            <h2>
                <p>{t('info.21')} <strong>{t('info.22')}</strong> {t('info.23')} <strong>{t('info.24')}</strong>
                    {t('info.25')}</p>

                <p>{t('info.26')} <strong>{t('info.27')}</strong>. {t('info.28')}.</p>

                <p>{t('info.29')} <strong>{t('info.30')}</strong> {t('info.31')} <strong>{t('info.32')}.</strong></p>
            </h2>
        </div>

        <h1 className='info-3-title'>{t('info.18')}</h1>
        <Carousel responsive={responsive}>
            <div className='carousel'><img src={img1} alt='Transport' /></div>
            <div className='carousel'><img src={img2} alt='Transport' /></div>
            <div><img src={img3} alt='Transport' /></div>
            <div className='carousel'><img src={img4} alt='Transport' /></div>
        </Carousel>


        <div className='call-us'>
            <h2>{t('warranties.3')}</h2>
            <div className='btn'>
                <a href="tel:+37360125601"><button className='call-btn'> <img src={phone} width={40} alt='Phone' />601
                        25 601</button></a>
            </div>
            <h3>Pentru a obține sprijin instantaneu.</h3>
        </div>
    </div>













    <div className='content-wrapper'>
        <div className='content'>
            <div className='what-to-do'>
                <h1><span className='top-line'>{t('what-to-do.1')}</span> {t('what-to-do.2')}. <span
                        className='bottom-line'>{t('what-to-do.3')}</span></h1>
                <div className='flex-what-to-do'>
                    <div className='info-1'>
                        <p>1. {t('what-to-do.4')}</p>
                        <span className='info-item'>{t('what-to-do.8')} <strong>{t('what-to-do.9')}</strong>.
                            {t('what-to-do.10')} <strong className='phone-number-next-line'>+373 60 125
                                601.</strong></span>
                    </div>
                    <div className='info-1'>
                        <p>2. {t('what-to-do.5')}</p>
                        <span className='info-item'>{t('what-to-do.11')} <strong>{t('what-to-do.12')}</strong>,
                            {t('what-to-do.13')}</span>
                    </div>
                    <div className='info-1'>
                        <p>3. {t('what-to-do.6')}</p>
                        <span className='info-item'>{t('what-to-do.14')} <strong>{t('what-to-do.15')}</strong>
                            {t('what-to-do.16')}. </span>
                    </div>
                    <div className='info-1'>
                        <p>4. {t('what-to-do.7')}</p>
                        <span className='info-item'>{t('what-to-do.17')} <strong>{t('what-to-do.18')}</strong>
                            {t('what-to-do.19')}. </span>
                    </div>
                </div>
            </div>
            <div className='about-us'>
                <div className='dashed-line'></div>
                <Element name="avantajele">
                </Element>
                <h2>{t('about-us.1')},</h2>
                <h3>{t('about-us.2')}</h3>
                <div className='flex-about-us'>
                    <div>
                        <img src={price} width={130} height={120} alt='Price' />
                        <p>{t('about-us.3')}
                            <span>{t('about-us.7')}</span>
                        </p>
                    </div>
                    <div>
                        <img src={time} width={125} height={120} alt='Fast' />
                        <p>{t('about-us.4')}
                            <span>{t('about-us.8')}</span>
                        </p>
                    </div>
                    <div>
                        <img src={every} width={120} height={120} alt='24/7' />
                        <p>{t('about-us.5')}
                            <span>{t('about-us.9')}</span>
                        </p>
                    </div>
                    <div>
                        <img src={care} width={120} height={120} alt='Care' />
                        <p>{t('about-us.6')}
                            <span>{t('about-us.10')}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex-warranties'>
            <div className='warranties'>
                <h2>{t('warranties.1')}</h2>
                <h3>{t('warranties.2')}.</h3>
            </div>
            <div className='call-us'>
                <h2>{t('warranties.3')}</h2>
                <div className='btn'>
                    <a href="tel:+37360125601"><button className='call-btn'> <img src={phone} width={40}
                                alt='Phone' />+373 601 25 601</button></a>
                </div>
                <h3>{t('warranties.4')}.</h3>
            </div>
        </div>

        <div className='content'>
            <div className='pricelist'>
                <div className='flex'>
                    <div className='line'></div>
                    <h2><strong>{t('price.1')}</strong></h2>
                    <div className='line'></div>
                </div>
                <div className='text'>{t('price.2')} <span>200 {t('price.3')}</span>
                    <div className='info-text'>
                        *{t('price.4')}
                        <Element name="servicii">
                        </Element>
                    </div>
                </div>
            </div>
            <div className='info'>
                <h2>{t('info.1')} <strong>24/24</strong>, {t('info.2')} <strong>{t('info.3')}</strong>, {t('info.4')}
                    <strong>{t('info.5')}</strong>.</h2>
            </div>
            <div className='locations'>
                <div className='flex-locations'>
                    <div className='locations-items'>
                        <h2>{t('info.6')} <span>{t('info.15')}:</span></h2>
                        <ul>
                            <div>
                                <li>{t('info.8')}</li>
                                <li>{t('info.9')}</li>
                                <li>{t('info.10')}</li>
                                <li>{t('info.11')}</li>
                            </div>
                            <div>
                                <li>{t('info.12')}</li>
                                <li>{t('info.13')}</li>
                                <li>{t('info.14')}</li>
                            </div>
                        </ul>
                    </div>
                    <div className='show-text'>
                        <h3>{t('info.7')}. <span>{t('info.16')}.</span></h3>
                    </div>
                </div>
            </div>
            <div className='call-us-2'>
                <h2>{t('warranties.3')}</h2>
                <div className='btn'>
                    <a href="tel:+37360125601"><button className='call-btn'> <img src={phone2} width={40}
                                alt='Phone' />+373 601 25 601</button></a>
                </div>
                <div className='space'></div>
            </div>
            <Element name="despre-noi">
            </Element>
            <h1 className='info-2-title'>{t('info.19')}</h1>
            <div className='info-2'>
                <h2 className='flex-info-2'>
                    <p>{t('info.21')} <strong>{t('info.22')}</strong> {t('info.23')} <strong>{t('info.24')}</strong>
                        {t('info.25')}</p>

                    <p>{t('info.26')} <strong>{t('info.27')}</strong>. {t('info.28')}.</p>

                    <p>{t('info.29')} <strong>{t('info.30')}</strong> {t('info.31')} <strong>{t('info.32')}.</strong>
                    </p>
                </h2>
            </div>

            <h1 className='info-3-title'>{t('info.18')}</h1>
            <div className='flex-carousel'>
                <Carousel responsive={responsive}>
                    <div className='carousel'><img src={img1} alt='Transport' /></div>
                    <div className='carousel'><img src={img2} alt='Transport' /></div>
                    <div><img src={img3} alt='Transport' /></div>
                    <div className='carousel'><img src={img4} alt='Transport' /></div>
                </Carousel>
                <div className='call-us-2'>
                    <h2>{t('warranties.3')}</h2>
                    <div className='btn'>
                        <a href="tel:+37360125601"><button className='call-btn'> <img src={phone2} width={40}
                                    alt='Phone' />+373 601 25 601</button></a>
                    </div>
                    <div className='space'></div>
                </div>
            </div>
        </div>
    </div>
</>
)
}
