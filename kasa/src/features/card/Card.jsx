import './card.scss';

const Card = ({appart}) => {

  return (
    <div className="card">
      <div className="card__main"></div>
      <div className="card__bot">
        {appart.title}
      </div>
    </div>
  )
}

export default Card;