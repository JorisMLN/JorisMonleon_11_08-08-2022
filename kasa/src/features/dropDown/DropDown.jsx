import './dropdown.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';
import { getInfoAndTools } from '../../api/apiServicesFunction';


const DropDown = ({title}) => {
  const params = useParams();

  // appel API
  const infosAndTools = getInfoAndTools(params.id);
  let content;

  if(title === 'Description'){
    content = infosAndTools.infos;
  } else {
    content = infosAndTools.tools;
  }

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
    <div className='dropdown'>
      <div className='top' onClick={() => handleVisible(`${title}`)}> 
        <div> {title} </div>
        <img src={arrowIcon ? arrowUp : arrowDown}></img> 
      </div>
      <div id={title} className='content hiddenHousing'>
        {
          title === 'Description' 
          ?
          content
          :
          content.map((tool, index) => <div key={index}>{tool}</div>)
        }
      </div>
    </div>
  )
}

export default DropDown;