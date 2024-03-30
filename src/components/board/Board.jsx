import Tile from "../tile/Tile.jsx";
import "./board.css";

const Board = () => {
  const tiles = Array.from({ length: 9 }, (_, index) => <Tile key={index} />);

  return <div className="board">{tiles}</div>;
};

export default Board;
