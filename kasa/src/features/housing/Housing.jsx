import './housing.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';

import dataMocked from '../../mock/dataMocked.json';
import RatingStar from '../ratingStar/RatingStar';
import Gallery from '../gallery/Gallery';


const Housing = () => {
  let params = useParams();
  const houseFound = dataMocked.find(house => house.id === params.id)
  const [arrowIconDescribe, setArrowIconDescribe] = useState(false);
  const [arrowIconTools, setArrowIconTools] = useState(false);
  
  const handleVisible = (domId) => {
    const content =  document.getElementById(domId);

    if (content.classList.contains('hiddenHousing')){
      content.classList.replace('hiddenHousing', 'visibleHousing');
      domId === 'describeContent' ? setArrowIconDescribe(true) : setArrowIconTools(true);
    } else {
      content.classList.replace('visibleHousing', 'hiddenHousing');
      domId === 'describeContent' ? setArrowIconDescribe(false) : setArrowIconTools(false);
    }
  }

  return (
    <div className="housing">
      <div className='housing__top'>
        <Gallery images={houseFound.pictures} />
      </div>

      <div className='housing__bot'>
        <div className='housing__bot--info'>

          <div className='nameAndTags'>
            <div className='name'>
              <h1>{houseFound.title}</h1>
              <p>{houseFound.location}</p>
            </div>
            <div className='tags'>
              {houseFound.tags.map((tag, index) => <div className='tag' key={index}> {tag} </div>)}
            </div>
          </div>

          <div className='userAndRate'>
            <div className='user'>
              <div className='user__name'>{houseFound.host.name}</div>
              <div className='user__pp'>
                <img src={houseFound.host.picture}></img>
              </div>
            </div>
            <div className='rating'>
              <RatingStar houseFound={houseFound}/>
            </div>
          </div>
        </div>

        <div className='housing__bot--drop'>
          <div className='describe'>
            <div className='describe__top' onClick={() => handleVisible('describeContent')}>
              <div> Description </div>
              <img src={arrowIconDescribe ? arrowUp : arrowDown}></img> 
            </div>
            <div id='describeContent' className='hiddenHousing'>
              {houseFound.description}
            </div>
          </div>
          <div className='tools'>
            <div className='tools__top' onClick={() => handleVisible('toolsContent')}> 
              <div> Equipements </div>
              <img src={arrowIconTools ? arrowUp : arrowDown}></img> 
            </div>
            <div id='toolsContent' className='hiddenHousing'>
              {houseFound.equipments.map((tool, index) => <div key={index}>{tool}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Housing;