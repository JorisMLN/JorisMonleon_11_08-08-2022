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
        <h2>{appart.title}</h2>
      </div>
    </div>
  )
}

export default Card;