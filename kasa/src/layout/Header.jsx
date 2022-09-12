import './whaf.scss';
import vectorK from '../assets/VectorK.png';
import vectorHome from '../assets/VectorHome.png';
import vectorS from '../assets/VectorS.png';
import vectorA from '../assets/VectorA.png';
import headerHouseDoor from '../assets/headerHouseDoor.png';

import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  
  // Navigation
  const toAbout = () => {
    navigate('/about')
  }
  const toHome = () => {
    navigate('/')
  }

  // underline manager
  useEffect(() => {
    const actualPath = document.location.href;

    if(actualPath === 'http://localhost:3000/'){
      const homeBtn = document.getElementById('homeBtn');
      homeBtn.style.textDecoration = 'underline';
    }

    if(actualPath === 'http://localhost:3000/about'){
      const aboutBtn = document.getElementById('aboutBtn');
      aboutBtn.style.textDecoration = 'underline';
    }
  }, [])

  return (
    <div className="header">
      <div className='left'>
        <img className='vectorK' alt="kasa logo" src={vectorK}></img>
        <img className='vectorHome' alt="kasa logo" src={vectorHome}></img>
        <img className='vectorDoor' alt="kasa logo" src={headerHouseDoor}></img>
        <img className='vectorS' alt="kasa logo" src={vectorS}></img>
        <img className='vectorA' alt="kasa logo" src={vectorA}></img>
      </div>
      <div className='right'>
        <button id='homeBtn' onClick={toHome}> Accueil </button>
        <button id='aboutBtn' onClick={toAbout}> A propos </button>
      </div>
    </div>
  )
}

export default Header;
