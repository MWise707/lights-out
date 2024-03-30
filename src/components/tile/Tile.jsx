import React, { useState } from 'react';
import './tile.css';

const Tile = () => {
  const [isOn, setIsOn] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    setIsOn(prevState => !prevState);
  };

  const handleHover = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div className='tile-container'>
      <div onMouseEnter={handleHover} 
      onMouseLeave={handleMouseLeave}
      style = {{ border : isHover ? '6px solid lightgray' : '4px solid white'}}
      className={isOn ? 'lightbulb-on' : 'lightbulb-off'} 
      onClick={handleClick}>

      </div>
    </div>
  );
};

export default Tile;
