import React, { useState, useEffect } from "react";
import Tile from "../tile/Tile.jsx";
import "./board.css";
import Button from "../button/Button.jsx";

const Board = () => {
  const [tileStates, setTileStates] = useState(
    Object.fromEntries(
      Array.from({ length: 3 }, (_, row) =>
        Array.from({ length: 3 }, (_, col) => [`${row}-${col}`, true])
      ).flat()
    )
  );

  useEffect(() => {
    handleNewGame();
  }, []);

  const handleNewGame = () => {
    setTileStates((prevStates) => {
      const newStates = {};
      for (const key in prevStates) {
        newStates[key] = Math.random() < 0.5;
      }
      return newStates;
    });
  };

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

  return (
    <>
      <div className="board">{tiles}</div>
      <Button handleNewGame={handleNewGame} />
    </>
  );
};

export default Board;
