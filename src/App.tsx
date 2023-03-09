import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Policies from "./components/navigation/Policies";
import Body from "./components/body/Body";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />

    </div>
  );
}

export default App;
