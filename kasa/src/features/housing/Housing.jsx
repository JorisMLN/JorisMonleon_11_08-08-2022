import './housing.scss';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import arrowDown from '../../assets/arrowDown.png'
import arrowUp from '../../assets/arrowUp.png'
import { useState } from 'react';

import dataMocked from '../../mock/dataMocked.json'


const Housing = () => {
  let params = useParams();
  console.log(params.id)
  const houseFound = dataMocked.find(house => house.id === params.id)

  const [arrowIconDescribe, setArrowIconDescribe] = useState(false)
  const [arrowIconTools, setArrowIconTools] = useState(false)
  
  const handleVisible = (domId) => {
    console.log('test')
    const content =  document.getElementById(domId);
    if (content.classList.contains('hidden')){
      content.classList.replace('hidden', 'visible');
      domId === 'describeContent' ? setArrowIconDescribe(true) : setArrowIconTools(true)
    } else {
      content.classList.replace('visible', 'hidden');
      domId === 'describeContent' ? setArrowIconDescribe(false) : setArrowIconTools(false)
    }
  }

  return (
    <div className="housing">
      <div className='housing__top'>
        <img src={houseFound.pictures[0]}></img>
      </div>
      <div className='housing__bot'>
        <div className='housing__bot--name'>
          <h1>{houseFound.title}</h1>
          <p>{houseFound.location}</p>
        </div>
        <div className='housing__bot--tagsAndRate'>
          <div className='tags'>
            {houseFound.tags.map(tag => <div className='tag'> {tag} </div>)}
          </div>
          <div className='rating'>
            {houseFound.rating}
          </div>
        </div>
        <div className='housing__bot--drop'>
          <div className='describe'>
            <div className='describe__top' onClick={() => handleVisible('describeContent')}>
              <div> Description </div>
              <img src={arrowIconDescribe ? arrowUp : arrowDown}></img> 
            </div>
            <div id='describeContent' className='hidden'>
              {houseFound.description}
            </div>
          </div>
          <div className='tools'>
            <div className='tools__top' onClick={() => handleVisible('toolsContent')}> 
              <div> Equipements </div>
              <img src={arrowIconTools ? arrowUp : arrowDown}></img> 
            </div>
            <div id='toolsContent' className='hidden'>
              {houseFound.equipments}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Housing;