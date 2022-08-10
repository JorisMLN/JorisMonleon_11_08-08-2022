import { useState } from 'react';
import './gallery.scss';
import arrowRight from '../../assets/arrowRight.png';
import arrowLeft from '../../assets/arrowLeft.png';


const Gallery = ({images}) => {
  const [imageSrcValue, setImageSrcValue] = useState(images[0]);

  const left = () => {
    let imageSource = document.getElementById('pictures').attributes.src;
    let index = images.indexOf(imageSource.value);
    
    if(index !== 0){
      setImageSrcValue(images[index-1])
    } else {
      setImageSrcValue(images[images.length-1])
    }
  }

  const right = () => {
    let imageSource = document.getElementById('pictures').attributes.src;
    let index = images.indexOf(imageSource.value);
    
    if((index + 1) !== images.length){
      setImageSrcValue(images[index+1])
    } else {
      setImageSrcValue(images[0])
    }
  }

  return (
    <div className="gallery">
      <img id='leftArrow' src={arrowLeft} onClick={left}></img>
      <img id='pictures' src={imageSrcValue}></img>
      <img id='rightArrow' src={arrowRight} onClick={right}></img>
    </div>
  );
}

export default Gallery;
