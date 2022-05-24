
import perfil from '../../assets/perfil.jpg'

import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Historia(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])

    return(
        <div className="container" id="historia">
        <div className="row">
          <div className="grid-6">
          <h1 data-aos="fade-left">História</h1>
          <p className="mt-5" data-aos="fade-left">Outono, 2032
            Pouco depois de completar 13 anos, Ellie chega à Zona de Quarentena de Boston em um 
            ônibus, ao avistar os militares examinando um homem em busca de infecção.
             Ela não pensa a respeito até que a leitura dê positivo e um homem seja forçado a 
             ficar de joelhos sob a mira de uma arma. Essa visão a assusta.
             <br/>
             Assim que ela está segura dentro dos portões, 
             ela e os outros sobreviventes saem do ônibus. Ela é abordada por um soldado que a 
             conhece. Ele a avisa para não fazer nenhuma de suas "acrobacias antigas", uma vez 
             que ela se estabeleceu e diz a ela que ele não pode mais cuidar dela. Ellie pede que 
             ele a leve com ele, mas ele se recusa, citando sua responsabilidade para com sua 
             própria família.
            <br/>
            Enfurecida, Ellie declara que pode cuidar de si mesma sem a ajuda dele. No entanto, 
            pouco depois ela é pega em uma briga com um grupo de meninos que tentam roubar seus 
            pertences. Ellie os provoca, mas é salva por uma adolescente enquanto seu líder se 
            prepara para atacá-la. A garota intimida os meninos o suficiente para assustá-los.
            <br/>
            <a href="https://thelastofus.fandom.com/pt-br/wiki/Ellie" target="_blank" >veja mais</a>
           </p>
          
        </div>


        <div className="grid-6" data-aos="fade-up">
            <img src={perfil} alt="" className="perfil"/>
        </div>
        </div>
    </div>
    );
}

export default Historia;