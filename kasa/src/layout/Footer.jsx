import './whaf.scss';
import vertorKwhite from '../assets/VectorKwhite.png';
import vertorHomewhite from '../assets/VectorHomewhite.png';
import vertorSwhite from '../assets/VectorSwhite.png';
import vertorAwhite from '../assets/VectorAwhite.png';
import footerHouseDoor from '../assets/footerHouseDoor.png';

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer__logo">
        <img className='vectorK' src={vertorKwhite}></img>
        <img className='vectorHome' src={vertorHomewhite}></img>
        <img className='vectorFooterDoor' src={footerHouseDoor}></img>
        <img className='vectorS' src={vertorSwhite}></img>
        <img className='vectorA' src={vertorAwhite}></img>
      </div>
      <div>
        © 2020 Kasa. All rights reserved
      </div>
    </div>
  )
}

export default Footer;
