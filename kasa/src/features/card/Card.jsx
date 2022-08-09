import './card.scss';

const Card = ({appart}) => {

  return (
    <div className="card">
      <div className="card__main">
        <img src={appart.pictures[0]}></img>
      </div>
      <div className="card__bot">
        {appart.title}
      </div>
    </div>
  )
}

export default Card;