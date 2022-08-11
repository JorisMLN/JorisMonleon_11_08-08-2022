import './whaf.scss';
import VertorKwhite from '../assets/VectorKwhite.png';
import VertorHomewhite from '../assets/VectorHomewhite.png';
import VertorSwhite from '../assets/VectorSwhite.png';
import VertorAwhite from '../assets/VectorAwhite.png';

const Footer = () => {

  return (
    <div className="footer">
      <div>
        <img className='vectorK' src={VertorKwhite}></img>
        <img className='vectorHome' src={VertorHomewhite}></img>
        <img className='vectorS' src={VertorSwhite}></img>
        <img className='vectorA' src={VertorAwhite}></img>
      </div>
      <div>
        © 2020 Kasa. All rights reserved
      </div>
    </div>
  )
}

export default Footer;
