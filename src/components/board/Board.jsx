import React, { useState } from "react";
import Tile from "../tile/Tile.jsx";
import "./board.css";

const Board = () => {
  const [tileStates, setTileStates] = useState(
    Object.fromEntries(
      Array.from({ length: 3 }, (_, row) =>
        Array.from({ length: 3 }, (_, col) => [`${row}-${col}`, true])
      ).flat()
    )
  );

  const handleTileClick = (row, column) => {
    setTileStates((prevStates) => {
      const newStates = { ...prevStates };
      const surroundingTiles = [
        [row, column],
        [row - 1, column],
        [row + 1, column],
        [row, column - 1],
        [row, column + 1],
      ];

      surroundingTiles.forEach(([r, c]) => {
        const key = `${r}-${c}`;
        if (newStates.hasOwnProperty(key)) {
          newStates[key] = !newStates[key];
        }
      });

      return newStates;
    });
  };

  const tiles = Array.from({ length: 3 }, (_, row) =>
    Array.from({ length: 3 }, (_, col) => (
      <Tile
        handleTileClick={handleTileClick}
        key={`${row}-${col}`}
        row={row}
        column={col}
        isOn={tileStates[`${row}-${col}`]}
      />
    ))
  );

  return <div className="board">{tiles}</div>;
};

export default Board;