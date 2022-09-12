import './dropdown.scss';
import { useState } from 'react';
import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';


const DropDown = ({title, content, size}) => {

  const [arrowIcon, setArrowIcon] = useState(false);
  const handleVisible = (domId) => {
    const content = document.getElementById(domId);

    if (content.classList.contains('hiddenHousing')){
      content.classList.replace('hiddenHousing', 'visibleHousing');
      setArrowIcon(true);
    } else {
      content.classList.replace('visibleHousing', 'hiddenHousing');
      setArrowIcon(false);
    }
  }

  return (
    <div className={`dropdown ${size}`}>
      <div className='top' onClick={() => handleVisible(`${title}`)}> 
        <div> {title} </div>
        <img src={arrowIcon ? arrowUp : arrowDown}></img> 
      </div>
      <div id={title} className='content hiddenHousing'>
        {
          title === 'Equipements' 
          ?
          content.map((tool, index) => <div key={index}>{tool}</div>)
          :
          content
        }
      </div>
    </div>
  )
}

export default DropDown;