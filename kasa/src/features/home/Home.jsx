import '../home/home.scss';
import imageBan from '../../assets/IMGban.png'

import Card from '../card/Card';
import dataMocked from '../../mock/dataMocked.json'

const Home = () => {
  return (
    <div className="home">
      <div className='home__ban'>
        <img className='vectorK' alt="kasa logo" src={imageBan}></img>
      </div>
      <div className='home__cardBloc'>
        {dataMocked.map((elm, index) => <Card appart={elm} key={index}/>)}
      </div>
    </div>
  );
}

export default Home;
