import './card.scss';
import { useNavigate } from "react-router-dom";

const Card = ({appart}) => {
  const navigate = useNavigate();

  const toHouse = () => {
    navigate(`/housing/${appart.id}`)
  }

  return (
    <div className="card" onClick={toHouse}>
      <div className="card__main">
        <img src={appart.cover}></img>
      </div>
      <div className="card__bot">
        {appart.title}
      </div>
    </div>
  )
}

export default Card;