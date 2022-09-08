import './housing.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { getDataToLocation } from '../../api/apiServicesFunction';
import { useEffect } from 'react';
import RatingStar from '../ratingStar/RatingStar';
import Gallery from '../gallery/Gallery';
import DropDown from '../dropDown/DropDown';


const Housing = () => {
  const navigate = useNavigate();
  const params = useParams();

  // appel API
  const theHouse = getDataToLocation(params.id)

  useEffect(() => {
    if(theHouse === false){
      console.log('test undefined false')
      navigate('/badId')
    }
  })

  return (
    <>
      {
        theHouse === false ?
        null
        :
        <div className="housing">
          <div className='housing__top'>
            <Gallery />
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
              <DropDown title={'Description'} />
              <DropDown title={'Equipements'} />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Housing;