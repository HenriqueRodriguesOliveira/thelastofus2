
import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Footer(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])

    return(
        <footer >
        <div className="grid-12 flex-center mt-9 flex">
          <p>Copyright © 2022 Henrique Rodrigues.Todos direitos reservados.</p>
          <div>
              <a href="" className="m-1"> GitHub</a>
          </div>
        </div>
        </footer>
    );
}

export default Footer;