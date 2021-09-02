import React from 'react';
import {
  useParams
} from "react-router-dom";

export default function Word() {
  let { word } = useParams();
  return(
    <div className="Content">
    {
      (isNaN(word)) ? 
      <h4>The word is: { word } </h4> :
      <h4>The number is: { word } </h4>
    }
     
    </div>
  );
}