import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  return (
    <>
    <div className='about-us-wrapper'>
        <div className='what-to-do'>
        <h1><span className='top-line'>Am nevoie</span> de un camion de tractare. <span className='bottom-line'>Ce fac?</span></h1>
        <div className='info-1'>
        <p>1. Sună-ne!</p>
        <span className='info-item'>Liniile noastre <strong>telefonice sunt mereu deschise</strong>. Suntem bucuroși să vă ajutăm oricând la <strong>+373 60 125 601.</strong></span>
        </div>
        <div className='info-1'>
        <p>2. Informare</p>
        <span className='info-item'>Trebuie să știm <strong>locația dvs.</strong>, și ce este în neregulă cu mașina dvs.</span>
        </div>
        <div className='info-1'>
        <p>3. Unde?</p>
        <span className='info-item'>Vă vom remorca mașina oriunde doriți. Vă putem <strong>ajuta să alegeți un atelier de reparații</strong> auto potrivit.   </span>     </div>
        <div className='info-1'>
        <p>4. Sosire</p>
        <span className='info-item'>În funcție de locația dvs., de obicei <strong>ne durează 15-60 de minute</strong> pentru a ajunge la destinație.  </span>      </div>
        </div>
        <div className='about-us'>
            <div className='dashed-line'></div>
            <h2>Avantajele,</h2>
            <h3>care sunt atât de apreciate de clienții noștri</h3>
                <div>
                    <img src={price} width={120} alt='Price'/>
                    <p>Cele mai mici prețuri
                    <span>mai ieftin nu vei găsi</span>
                    </p>
                </div>
                <div>
                    <img src={time} width={120} alt='Fast'/>
                    <p>Sosire în 15 minute
                    <span>economisiți timp</span>
                    </p>
                </div>
                <div>
                    <img src={every} width={120} alt='24/7'/>
                    <p>Întotdeauna în contact
                    <span>sună-ne oricând</span>
                    </p>
                </div>
                <div>
                    <img src={care} width={120} alt='Care'/>
                    <p>Manipulare atentă
                    <span>mașina ta este în siguranță</span>
                    </p>
                </div>
        </div>
        <div className='warranties'>
            <h2>Garanția prețului scăzut</h2>
            <h3>Avantajul nostru, cel mai important, îl reprezintă preţurile rezonabile aferente serviciilor precum şi experienţa în serviciile de tractări auto, calităţi ce ne-au impus ca partener de încredere pe piaţa de profil.</h3>
        </div>
        <div className='call-us'>
            <h2>Suna-ți</h2>
            <div className='btn'>
            <button className='call-btn'> <img src={phone} width={40} alt='Phone'/>+373 68 06 77 83</button>
            </div>
            <h3>Pentru a obține sprijin instantaneu.</h3>
        </div>
        <div className='pricelist'>
            <div className='flex'>
                <div className='line'></div> 
                    <h2><strong>Preț</strong></h2>
                <div className='line'></div> 
            </div>
            <div className='text'>DE LA <span>200 LEI</span>
            <div className='info-text'>
            *Prețul unei mașini tractate se calculează în funcție de distanța și greutatea mașinii!
            </div>
            </div>
        </div>
        <div className='info'>
            <h2>Executăm servicii de evacuare <strong>24/24</strong>, atât în <strong>Chișinău</strong>, cât și în <strong>străinătate</strong>.</h2>
        </div>
        <div className='locations'>
            <h2>Circulăm în diverse regiuni, <span>precum:</span></h2>
            <ul>
                <div>
                <li>Moldova</li>
                <li>România</li>
                <li>Ucraina</li>
                <li>Bulgaria</li>
                </div>
                <div>
                <li>Polonia</li>
                <li>Ungaria</li>
                <li>Etc.</li>
                </div>
            </ul>
            <div className='show-text'>
                <h3>Efectuăm comenzi în Moldova și în afara țării. <span>Pentru detalii apelați.</span></h3>
            </div>
            <div className='locations-b'></div>
        </div>
        <div className='call-us-2'>
            <h2>Suna-ți</h2>
            <div className='btn'>
            <button className='call-btn'> <img src={phone2} width={40} alt='Phone'/>+373 68 06 77 83</button>
            </div>
            <div className='space'></div>
        </div>
        <h1 className='info-2-title'>Remorcare profesională pentru toate vehiculele</h1>
        <div className='info-2'>
            <h2>
                <p>Oferim remorcare pentru <strong>toate tipurile de vehicule</strong>, inclusiv mașini, camionete, motociclete și vehicule grele. Câteva dintre <strong>camioanele noastre de remorcare sunt ideale</strong> pentru remorcare grea, care implică remorcare RV, autobuze, camioane, mașini grele etc.</p>

                <p>Camioanele noastre cu platformă ne permit să remorcăm multe tipuri de vehicule, inclusiv cele <strong>cu tracțiune integrală și/sau transmisie automată</strong>. În plus, avem mașini mici de tractare pentru parcări înguste și alte locuri înguste.</p>

                <p>Indiferent dacă ați avut un accident de mașină sau <strong>vehiculul dumneavoastră are nevoie de recuperare</strong> în teren (troliu, adică, scoaterea unei mașini dintr-un șanț, de exemplu) sau mașina dumneavoastră pur și simplu s-a oprit să funcționeze în timp ce conduceți, sunteți în locul potrivit pentru a apela! Ne puteți <strong>contacta zi și noapte (24h) la telefon la +373 60 125601.</strong></p></h2>
        </div>

        <h1 className='info-3-title'>Tehnica noastră</h1>
<Carousel responsive={responsive}>
  <div className='carousel'><img src={img1} /></div>
  <div className='carousel'><img src={img2} /></div>
  <div><img src={img3} /></div>
  <div className='carousel'><img src={img4} /></div>
</Carousel>


        <div className='call-us'>
            <h2>Suna-ți</h2>
            <div className='btn'>
            <button className='call-btn'> <img src={phone} width={40} alt='Phone'/>+373 68 06 77 83</button>
            </div>
            <h3>Pentru a obține sprijin instantaneu.</h3>
        </div>
    </div>
    
    <div className='content-wrapper'>
        <div className='content'>
        <div className='what-to-do'>
                <h1><span className='top-line'>Am nevoie</span> de un camion de tractare. <span className='bottom-line'>Ce fac?</span></h1>
            <div className='flex-what-to-do'>
                <div className='info-1'>
                <p>1. Sună-ne!</p>
                <span className='info-item'>Liniile noastre <strong>telefonice sunt mereu deschise</strong>. Suntem bucuroși să vă ajutăm oricând la <strong className='phone-number-next-line'>+373 60 125 601.</strong></span>
                </div>
                <div className='info-1'>
                <p>2. Informare</p>
                <span className='info-item'>Trebuie să știm <strong>locația dvs.</strong>, și ce este în neregulă cu mașina dvs.</span>
                </div>
                <div className='info-1'>
                <p>3. Unde?</p>
                <span className='info-item'>Vă vom remorca mașina oriunde doriți. Vă putem <strong>ajuta să alegeți un atelier de reparații</strong> auto potrivit.   </span>     </div>
                <div className='info-1'>
                <p>4. Sosire</p>
                <span className='info-item'>În funcție de locația dvs., de obicei <strong>ne durează 15-60 de minute</strong> pentru a ajunge la destinație.  </span>      </div>
            </div>
        </div>
        <div className='about-us'>
            <div className='dashed-line'></div>
            <h2>Avantajele,</h2>
            <h3>care sunt atât de apreciate de clienții noștri</h3>
            <div className='flex-about-us'>
                <div>
                    <img src={price} width={120} alt='Price'/>
                    <p>Cele mai mici prețuri
                    <span>mai ieftin nu vei găsi</span>
                    </p>
                </div>
                <div>
                    <img src={time} width={120} alt='Fast'/>
                    <p>Sosire în 15 minute
                    <span>economisiți timp</span>
                    </p>
                </div>
                <div>
                    <img src={every} width={120} alt='24/7'/>
                    <p>Întotdeauna în contact
                    <span>sună-ne oricând</span>
                    </p>
                </div>
                <div>
                    <img src={care} width={120} alt='Care'/>
                    <p>Manipulare atentă
                    <span>mașina ta este în siguranță</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className='flex-warranties'>
        <div className='warranties'>
            <h2>Garanția prețului scăzut</h2>
            <h3>Avantajul nostru, cel mai important, îl reprezintă preţurile rezonabile aferente serviciilor precum şi experienţa în serviciile de tractări auto, calităţi ce ne-au impus ca partener de încredere pe piaţa de profil.</h3>
        </div>
        <div className='call-us'>
            <h2>Suna-ți</h2>
            <div className='btn'>
            <button className='call-btn'> <img src={phone} width={40} alt='Phone'/>+373 68 06 77 83</button>
            </div>
            <h3>Pentru a obține sprijin instantaneu.</h3>
        </div>
        </div>

        <div className='content'>
        <div className='pricelist'>
            <div className='flex'>
                <div className='line'></div> 
                    <h2><strong>Preț</strong></h2>
                <div className='line'></div> 
            </div>
            <div className='text'>DE LA <span>200 LEI</span>
            <div className='info-text'>
            *Prețul unei mașini tractate se calculează în funcție de distanța și greutatea mașinii!
            </div>
            </div>
        </div>
        <div className='info'>
            <h2>Executăm servicii de evacuare <strong>24/24</strong>, atât în <strong>Chișinău</strong>, cât și în <strong>străinătate</strong>.</h2>
        </div>
        <div className='locations'>
            <div className='flex-locations'>
                <div className='locations-items'>
            <h2>Circulăm în diverse regiuni, <span>precum:</span></h2>
            <ul>
                <div>
                <li>Moldova</li>
                <li>România</li>
                <li>Ucraina</li>
                <li>Bulgaria</li>
                </div>
                <div>
                <li>Polonia</li>
                <li>Ungaria</li>
                <li>Etc.</li>
                </div>
            </ul>
            </div>
            <div className='show-text'>
                <h3>Efectuăm comenzi în Moldova și în afara țării. <span>Pentru detalii apelați.</span></h3>
            </div>
            </div>
        </div>
        <div className='call-us-2'>
            <h2>Suna-ți</h2>
            <div className='btn'>
            <button className='call-btn'> <img src={phone2} width={40} alt='Phone'/>+373 68 06 77 83</button>
            </div>
            <div className='space'></div>
        </div>
        <h1 className='info-2-title'>Remorcare profesională pentru toate vehiculele</h1>
        <div className='info-2'>
            <h2 className='flex-info-2'>
                <p>Oferim remorcare pentru <strong>toate tipurile de vehicule</strong>, inclusiv mașini, camionete, motociclete și vehicule grele. Câteva dintre <strong>camioanele noastre de remorcare sunt ideale</strong> pentru remorcare grea, care implică remorcare RV, autobuze, camioane, mașini grele etc.</p>

                <p>Camioanele noastre cu platformă ne permit să remorcăm multe tipuri de vehicule, inclusiv cele <strong>cu tracțiune integrală și/sau transmisie automată</strong>. În plus, avem mașini mici de tractare pentru parcări înguste și alte locuri înguste.</p>

                <p>Indiferent dacă ați avut un accident de mașină sau <strong>vehiculul dumneavoastră are nevoie de recuperare</strong> în teren (troliu, adică, scoaterea unei mașini dintr-un șanț, de exemplu) sau mașina dumneavoastră pur și simplu s-a oprit să funcționeze în timp ce conduceți, sunteți în locul potrivit pentru a apela! Ne puteți <strong>contacta zi și noapte (24h) la telefon la +373 60 125601.</strong></p>
            </h2>
        </div>

        <h1 className='info-3-title'>Tehnica noastră</h1>
        <div className='flex-carousel'>
<Carousel responsive={responsive}>
  <div className='carousel'><img src={img1} /></div>
  <div className='carousel'><img src={img2} /></div>
  <div><img src={img3} /></div>
  <div className='carousel'><img src={img4} /></div>
</Carousel>
<div className='call-us-2'>
            <h2>Suna-ți</h2>
            <div className='btn'>
            <button className='call-btn'> <img src={phone2} width={40} alt='Phone'/>+373 68 06 77 83</button>
            </div>
            <div className='space'></div>
        </div>
</div>
        </div>
    </div>
   </>
  )
}
