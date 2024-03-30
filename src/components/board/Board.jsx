import Tile from "../tile/Tile.jsx";
import "./board.css";

const Board = () => {
  const tiles = Array.from({ length: 3 }, (_, rowIndex) =>
    Array.from({ length: 3 }, (_, colIndex) => (
      <Tile key={`${rowIndex}-${colIndex}`} row={rowIndex} column={colIndex} />
    ))
  );

  return <div className="board">{tiles}</div>;
};

export default Board;
