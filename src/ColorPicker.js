import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <input type="color" value={color} onChange={handleColorChange} />
            <div style={{ backgroundColor: color,  width: '100%', height:  '100px'}}>
        <p>Selected Color: {color}</p>
      </div>
    </div>
  );
}

export default ColorPicker;
