import './housing.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';
import dataMocked from '../../mock/dataMocked.json';
import RatingStar from '../ratingStar/RatingStar';
import Gallery from '../gallery/Gallery';
import DropDown from '../dropDown/DropDown';

// import { useEffect } from 'react';


const Housing = () => {
  // const [arrowIconDescribe, setArrowIconDescribe] = useState(false);
  // const [arrowIconTools, setArrowIconTools] = useState(false);
  // const [theHouse, setTheHouse] = useState({});

  let params = useParams();
  const theHouse = dataMocked.find(house => house.id === params.id);

  // useEffect(() => {
  //   setTheHouse(houseFound);
  // })
 
  // const handleVisible = (domId) => {
  //   const content =  document.getElementById(domId);

  //   if (content.classList.contains('hiddenHousing')){
  //     content.classList.replace('hiddenHousing', 'visibleHousing');
  //     domId === 'describeContent' ? setArrowIconDescribe(true) : setArrowIconTools(true);
  //   } else {
  //     content.classList.replace('visibleHousing', 'hiddenHousing');
  //     domId === 'describeContent' ? setArrowIconDescribe(false) : setArrowIconTools(false);
  //   }
  // }

  return (
    <>
      <div className="housing">
        <div className='housing__top'>
          <Gallery images={theHouse.pictures} />
        </div>

        <div className='housing__bot'>
          <div className='housing__bot--info'>

            <div className='nameAndTags'>
              <div className='name'>
                <h1>{theHouse.title}</h1>
                <p>{theHouse.location}</p>
              </div>
              <div className='tags'>
                {theHouse.tags.map((tag, index) => <div className='tag' key={index}> {tag} </div>)}
              </div>
            </div>

            <div className='userAndRate'>
              <div className='user'>
                <div className='user__name'>{theHouse.host.name}</div>
                <div className='user__pp'>
                  <img src={theHouse.host.picture}></img>
                </div>
              </div>
              <div className='rating'>
                <RatingStar houseFound={theHouse}/>
              </div>
            </div>
          </div>

          <div className='housing__bot--drop'>

            <DropDown title={'Description'} content={theHouse.description}/>
            <DropDown title={'Equipements'} content={theHouse.equipments}/>

          </div>
        </div>
      </div>
    </>
  )
}

export default Housing;