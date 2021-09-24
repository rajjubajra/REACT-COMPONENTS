import React, {useState, useEffect} from 'react';
import {baseurl} from './config';

function ImageOnload({src, alt, cssClass, width, height}) {

  const [status, setStatus] = useState(false);
  const [blur, setBlur] = useState('hidden');
  const [image, setImage] = useState('');
  //console.log(status);

  useEffect(()=>{
    status && setBlur('');

    setImage(`${baseurl.URL}${src}`);

  },[src, status])

  

  return (
    <img 
    className={cssClass}
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={image} 
    alt={alt} 
    /> 
  )
}

export default ImageOnload
