import React from 'react';
import {
  useParams
} from "react-router-dom";

export default function All() {
  let { word, color, bgcolor } = useParams();

  const style = {
    background: bgcolor,
    color: color,
    width: 150,
    padding: 20,
    borderRadius: 5,
  };
  return(
    <div className="Content">
    {
      isNaN(word) ? 
      <h4 style={ style } >The word is: { word } </h4> :
      <h4>The number is: { word } </h4>
    }
     
      <h4 style={{color:color}}>Test </h4>
    </div>
  );
}