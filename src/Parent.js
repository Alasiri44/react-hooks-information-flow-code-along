import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const [color, setColor] = useState(getRandomColor());
  const[childColor, setChildColor] = useState('#FFF');

  function handleChangeColor(){
    const newRandomColor = getRandomColor();
    const newChildRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildColor(newChildRandomColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childColor} onChangeColor={handleChangeColor} />
      <Child color={childColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
