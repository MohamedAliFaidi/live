import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <ul className="topnav">
        <li className="Link">
          <Link to="/">home</Link>
        </li>
        <li className="Link">
          <Link to="/policies">Privacy Policy</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
