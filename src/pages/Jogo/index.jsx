import bg from '../../assets/background2.jpg';
import jogo from '../../assets/jogo.png';


import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Jogo(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])

    return(
        <section className="">
        <div className="container">
            <div className="row">
                <div className=" p-0 m-0 bg-2"  data-aos="fade-down">
                    <img src={bg} alt="" className=" bg-2"/>
                </div>
    
              <div className="grid-8 div-jogo" data-aos="fade-down">
                <h2 className="sombra-texto">Jogo exclusivo PS4</h2>
                <img src={jogo} alt="" className="img-jogo"/>
                <div className="pos-btn">
                <button className="btn-2 m-3">Loja oficial</button>
                <button className="btn-2 ">Lojas parceiras</button>
                </div>
               </div>
            </div>
        </div>
        </section>
    );
}

export default Jogo;