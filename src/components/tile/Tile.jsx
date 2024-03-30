import React, { useState } from 'react';
import './tile.css';

const Tile = () => {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className='tile-container'>
      <div className={isOn ? 'lightbulb-on' : 'lightbulb-off'} onClick={handleClick}></div>
    </div>
  );
};

export default Tile;
