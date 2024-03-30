import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tile from "./components/tile/Tile.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Tile />
    </>
  );
}

export default App;
