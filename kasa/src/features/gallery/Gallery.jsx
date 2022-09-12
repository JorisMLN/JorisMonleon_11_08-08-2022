import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getImages } from '../../api/apiServicesFunction';

import './gallery.scss';
import arrowRight from '../../assets/arrowRight.png';
import arrowLeft from '../../assets/arrowLeft.png';



const Gallery = ({images}) => {

  const [imageSrcValue, setImageSrcValue] = useState(images[0]);
  const [isMultipleImages, setIsMultipleImage] = useState(true);

  useEffect(() => {
    if(images.length === 1){
      setIsMultipleImage(false);
    }
  })

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
      {isMultipleImages ? <img id='leftArrow' src={arrowLeft} onClick={left}></img> : null}
      <img id='pictures' src={imageSrcValue}></img>
      {isMultipleImages ? <img id='rightArrow' src={arrowRight} onClick={right}></img> : null}
    </div>
  );
}

export default Gallery;
