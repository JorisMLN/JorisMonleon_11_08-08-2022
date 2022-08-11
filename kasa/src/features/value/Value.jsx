import './value.scss';
import arrowDown from '../../assets/arrowDown.png'
import arrowUp from '../../assets/arrowUp.png'
import { useState } from 'react';


const Value = ({value, index}) => {
  const [arrowIcon, setArrowIcon] = useState(false)
  
  const handleVisible = () => {
    const content =  document.getElementById(`valueContent${index}`);
    if (content.classList.contains('hidden')){
      content.classList.replace('hidden', 'visible');
      setArrowIcon(true);
    } else {
      content.classList.replace('visible', 'hidden');
      setArrowIcon(false);
    }
  }

  return (
    <>
      <div className='value' onClick={handleVisible}>
        <div>{value.name}</div>
        <img src={arrowIcon ? arrowUp : arrowDown}></img>
      </div>
      <div id={`valueContent${index}`} className='hidden'>
        {value.text}
      </div>
    </>
  )
}

export default Value;