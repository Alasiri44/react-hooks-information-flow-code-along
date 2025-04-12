import React from "react";


function Child({color, onChangeColor }) {
  return (
  <div 
    onClick={onChangeColor}
    className="child" 
    style={{ backgroundColor: color }} 
    />);
}

export default Child;
