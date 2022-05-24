
import Navbar from './components/Nav/Navbar';
import Principal from './pages/Principal';
import Historia from './pages/Historia';
import Galeria from './pages/Galeria';
import Jogo from './pages/Jogo';
import Footer from './pages/Footer';

import './css/style.css'

export default function App(){
  return(
      <>
      <Navbar />
      <Principal />
      <Historia />
      <Galeria />
      <Jogo />
      <Footer />
      </>
  );
}