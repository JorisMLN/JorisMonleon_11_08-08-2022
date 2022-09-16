import { useState } from 'react';
import { useEffect } from 'react';

import './gallery.scss';
import arrowRight from '../../assets/arrowRight.png';
import arrowLeft from '../../assets/arrowLeft.png';


const Gallery = ({images}) => {

  const imagesDataLength = images.length;
  const [imageSrcValue, setImageSrcValue] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(1);
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
      setImageIndex(imageIndex - 1)
    } else {
      setImageSrcValue(images[images.length-1])
      setImageIndex(imagesDataLength)
    }
  }

  const right = () => {
    let imageSource = document.getElementById('pictures').attributes.src;
    let index = images.indexOf(imageSource.value);
    
    if((index + 1) !== images.length){
      setImageSrcValue(images[index+1])
      setImageIndex(imageIndex + 1)
    } else {
      setImageSrcValue(images[0])
      setImageIndex(1)
    }
  }

  return (
    <div className="gallery">
      {isMultipleImages ? <img id='leftArrow' src={arrowLeft} onClick={left}></img> : null}
      <img id='pictures' src={imageSrcValue}></img>
      {isMultipleImages ? <img id='rightArrow' src={arrowRight} onClick={right}></img> : null}
      <div className='count'>{imageIndex}/{imagesDataLength}</div>
    </div>
  );
}

export default Gallery;
