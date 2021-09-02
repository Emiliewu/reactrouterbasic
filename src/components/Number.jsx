import React from 'react';
import {
  useParams
} from "react-router-dom";

export default function Number() {
  let { num } = useParams();
  return(
    <div className="Content">
    {
      isNaN(num) ? 
      <h4>The word is: { num } </h4> :
      <h4>The number is: { num } </h4>
   } 
    </div>
  );
}