import '../home/home.scss';
import imageBan from '../../assets/IMGban.png'
import Card from '../card/Card';
import { getDataToCard } from '../../api/apiServicesFunction';

const Home = () => {
  const listOfHouses = getDataToCard();

  return (
    <div className="home">
      <div className='home__ban'>
        <img alt="kasa logo" src={imageBan}></img>
        <p className='text'>Chez vous, partout et ailleurs</p>
      </div>
      <div className='home__cardBloc'>
        {listOfHouses.map((elm, index) => <Card appart={elm} key={index}/>)}
      </div>
    </div>
  );
}

export default Home;
