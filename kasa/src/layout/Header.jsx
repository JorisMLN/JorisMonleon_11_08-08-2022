import './whaf.scss';
import vectorK from '../assets/VectorK.png';
import vectorHome from '../assets/VectorHome.png';
import vectorS from '../assets/VectorS.png';
import vectorA from '../assets/VectorA.png';

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const toAbout = () => {
    navigate('/about')
  }

  const toHome = () => {
    navigate('/')
  }

  return (
    <div className="header">
      <div className='left'>
        <img className='vectorK' alt="kasa logo" src={vectorK}></img>
        <img className='vectorHome' alt="kasa logo" src={vectorHome}></img>
        <img className='vectorS' alt="kasa logo" src={vectorS}></img>
        <img className='vectorA' alt="kasa logo" src={vectorA}></img>
      </div>
      <div className='right'>
        <button onClick={toHome}> Accueil </button>
        <button onClick={toAbout}> A propos </button>
      </div>
    </div>
  )
}

export default Header;
