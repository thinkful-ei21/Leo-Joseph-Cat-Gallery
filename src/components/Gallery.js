import React from 'react';
import '../App.css'; 


export default function Gallery(props){
  return(
  <div>
    <img 
      src={props.gallery[0]}
      id = '0'
      onClick={e=>props.onImageClick(e.target.id)}
      className='smallimage'
    ></img>

    <img 
      src={props.gallery[1]}
      id = '1'
      onClick={e=>props.onImageClick(e.target.id)}
      className='smallimage'
    ></img>

    <img 
      src={props.gallery[2]}
      id = '2'
      onClick={e=>props.onImageClick(e.target.id)}
      className='smallimage'
    ></img>

    <img
      src={props.gallery[3]} 
      id = '3'
      onClick={e=>props.onImageClick(e.target.id)}
      className='smallimage'
    ></img>

  </div>
  );
}