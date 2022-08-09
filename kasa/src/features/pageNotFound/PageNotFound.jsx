import './pageNotFound.scss';
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate('/')
  }

  return (
    <div className="pageNotFound">
      <div className="pageNotFound__404">
        404
      </div>
      <div className="pageNotFound__oups">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="pageNotFound__back" onClick={back}>
        Retourner sur la page d'accueil
      </div>
    </div>
  )
}

export default PageNotFound;