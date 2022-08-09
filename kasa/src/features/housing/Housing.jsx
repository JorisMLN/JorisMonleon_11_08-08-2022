import './housing.scss';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

import dataMocked from '../../mock/dataMocked.json'


const Housing = () => {

  let params = useParams();
  console.log(params.id)

  const houseFound = dataMocked.find(house => house.id === params.id)
  console.log(houseFound);

  return (
    <div className="housing">
      Housing 
      {houseFound.title}
      {houseFound.rating}
      {houseFound.tags}
      {houseFound.location}
      {houseFound.equipments}
    </div>
  )
}

export default Housing;