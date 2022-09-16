import './about.scss';
import mountains from '../../assets/mountains.png';
import { getAboutValues } from '../../api/apiServicesFunction';
import DropDown from '../dropDown/DropDown';

const About = () => {

  const AboutValues = getAboutValues();

  return (
    <div className="about">
      <div className='about__ban'>
        <img alt="kasa logo" src={mountains}></img>
      </div>
      <div className='about__main'>
        <DropDown title={'Fiabilité'} content={AboutValues[0].text} size={'large'}/>
        <DropDown title={'Respect'} content={AboutValues[1].text} size={'large'}/>
        <DropDown title={'Service'} content={AboutValues[2].text} size={'large'}/>
        <DropDown title={'Sécurité'} content={AboutValues[3].text} size={'large'}/>
      </div>
    </div>
  )
}

export default About;


// larrylalong20@gmail.com