import './housing.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import arrowDown from '../../assets/arrowDown.png'
import arrowUp from '../../assets/arrowUp.png'
import fullStar from '../../assets/fullStar.png'
import emptyStar from '../../assets/emptyStar.png'

import Gallery from '../gallery/Gallery';

import dataMocked from '../../mock/dataMocked.json'


const Housing = () => {
  let params = useParams();
  const houseFound = dataMocked.find(house => house.id === params.id)
  const [arrowIconDescribe, setArrowIconDescribe] = useState(false);
  const [arrowIconTools, setArrowIconTools] = useState(false);
  
  const handleVisible = (domId) => {
    const content =  document.getElementById(domId);

    if (content.classList.contains('hidden')){
      content.classList.replace('hidden', 'visible');
      domId === 'describeContent' ? setArrowIconDescribe(true) : setArrowIconTools(true);
    } else {
      content.classList.replace('visible', 'hidden');
      domId === 'describeContent' ? setArrowIconDescribe(false) : setArrowIconTools(false);
    }
  }

  const ratingStar = () => {
    let resultRating = [];

    for(let star = 0; star < 5; star++){
      if(star < houseFound.rating){
        resultRating.push(<img src={fullStar} key={star}></img>);
      } else {
        resultRating.push(<img src={emptyStar} key={star}></img>)
      }
    }

    return resultRating;
  }

  return (
    <div className="housing">
      <div className='housing__top'>
        <Gallery images={houseFound.pictures} />
      </div>
      <div className='housing__bot'>
        <div className='housing__bot--name'>
          <h1>{houseFound.title}</h1>
          <p>{houseFound.location}</p>
        </div>
        <div className='housing__bot--tagsAndRate'>
          <div className='tags'>
            {houseFound.tags.map((tag, index) => <div className='tag' key={index}> {tag} </div>)}
          </div>
          <div className='rating'>
            {ratingStar()}
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
              {houseFound.equipments.map((tool, index) => <div key={index}>{tool}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Housing;