import bg from '../../assets/background.jpg';
import txtimg from '../../assets/img-inicio.png';
import video from '../../assets/video.mp4';


import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Principal(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])

    return(
        <>
    <section className="bg">
        <div className=" p-0 m-0 bg-2" data-aos="fade-right">
            <img src={bg} alt="" className="bg-image"/>
        </div>

        <div className="container grid-6 m-0 p-4" data-aos="fade-right">
        <img src={txtimg} alt="" className="img-texto mt-8"/>
        <h5 className="color-white">The Last of Us Part 2 traz uma história que se desenvolve em torno de
                um ciclo de vingança. No jogo, Ellie divide o protagonismo com a então desconhecida Abby
                e as narrativas de ambas podem ser experimentadas pelo jogador.</h5>
        <button className="btn-2 mt-4">Trailer</button>
        <button className="btn-2 m-2">Veja mais</button>
        </div>

        <div className="grid-6" data-aos="zoom-out-left">
            <video className="video mt-9" type="video/mp4" src={video} controls autoplay></video>
        </div>
    </section>
        </>
    )
}