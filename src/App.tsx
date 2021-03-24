import React from "react";
import "./App.css";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <BottomBar />
    </div>
  );
}

export default App;
