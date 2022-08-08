import './home.scss';
import imageBan from '../assets/IMGban.png'

function Home() {
  return (
    <div className="home">
      <div className='home__ban'>
        <img className='vectorK' alt="kasa logo" src={imageBan}></img>
      </div>
      <div className='home__cardBloc'>
        <div className='home__cardBloc__card'></div>
        <div className='home__cardBloc__card'></div>
        <div className='home__cardBloc__card'></div>
        <div className='home__cardBloc__card'></div>
        <div className='home__cardBloc__card'></div>
        <div className='home__cardBloc__card'></div>
        <div className='home__cardBloc__card'></div>
        <div className='home__cardBloc__card'></div>
        <div className='home__cardBloc__card'></div>
      </div>
    </div>
  );
}

export default Home;
