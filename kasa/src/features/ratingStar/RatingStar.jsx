import './ratingStar.scss';
import fullStar from '../../assets/fullStar.png';
import emptyStar from '../../assets/emptyStar.png';

const RatingStar = ({houseFound}) => {
  let resultRating = [];

  for(let star = 0; star < 5; star++){
    if(star < houseFound.rating){
      resultRating.push(<img className='star' src={fullStar} key={star}></img>);
    } else {
      resultRating.push(<img className='star' src={emptyStar} key={star}></img>)
    }
  }
  return resultRating;
}

export default RatingStar;