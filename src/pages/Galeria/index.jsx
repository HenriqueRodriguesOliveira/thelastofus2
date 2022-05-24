import img1 from '../../assets/evento1.webp'
import img2 from '../../assets/evento2.webp'

import img3 from '../../assets/evento3.webp'
import img4 from '../../assets/evento4.png'

import img5 from '../../assets/evento5.jpg'
import img6 from '../../assets/evento6.jpg'


import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";



function Galeria(){

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

    return(
        <div className="container" id="galeria">
            <div className="row">
                <div className="grid-6">
                  <h1>Entre grandes e perigosas aventuras</h1> 
                </div>
                <div id="c1"  className="grid-6 " data-aos="fade-up">
                  <img className="trocar1" src={img1} alt=""/>
                  <img className="trocar2" src={img2} />
                </div>
                <div id="c2" className="grid-6 m-1 " data-aos="fade-left">
                    <img className="trocar3" src={img3} alt=""/>
                    <img className="trocar4" src={img4} />
                  </div>
    
                  <div id="c3" className="grid-6" data-aos="fade-down">
                    <img className="trocar5" src={img5} alt=""/>
                    <img className="trocar6" src={img6} />
                  </div>
            </div>
        </div>
    );
}

export default Galeria;