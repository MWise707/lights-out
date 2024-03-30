import Tile from "/Users/markwiseman/Documents/GitHub/lights-out/src/components/tile/Tile.jsx";
import "./board.css";

const Board = () => {
  const tiles = Array.from({ length: 9 }, (_, index) => <Tile key={index} />);

  return <div className="board">{tiles}</div>;
};

export default Board;
