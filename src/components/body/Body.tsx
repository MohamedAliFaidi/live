import "./body.css";
import { Routes, Route } from "react-router-dom";
import Policies from "../navigation/Policies";
import Home from "../home/Home";

const Body = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      <div className="overlay"></div>
      <div className="stars" aria-hidden="true"></div>
      <div className="starts2" aria-hidden="true"></div>
      <div className="stars3" aria-hidden="true"></div>
    
    </>
  );
};

export default Body;
