import React from 'react';
import '../App.css'; 


export default function Selected(props){
  return(
    <div>
      <img className='largeimage'src={props.selected}></img>
    </div>
  );
}