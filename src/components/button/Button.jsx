import "./button.css";

const Button = ({ handleNewGame }) => {
  return (
    <>
      <div className="button-container">
        <button onClick={handleNewGame} className="startButton">
          New Game
        </button>
      </div>
    </>
  );
};

export default Button;
