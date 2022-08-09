import './about.scss';
import mountains from '../../assets/mountains.png'
import Value from './value'

import valuesMocked from '../../mock/valuesMocked.json'

const About = () => {

  return (
    <div className="about">
      <div className='about__ban'>
        <img alt="kasa logo" src={mountains}></img>
      </div>
      <div className='about__main'>
        {valuesMocked.map((value, index) => <Value value={value} index={index} key={index}/>)}
      </div>
    </div>
  )
}

export default About;