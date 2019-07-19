import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <div className="wrapHeader">
      <Link to="/">
        <h1>Star Wars</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              to="/planets"
              onClick={props.click}
              title="click to choose the planets"
            >
              Planets
            </Link>
          </li>
          <li>
            <Link
              to="/characters"
              onClick={props.click}
              title="click to choose the characters"
            >
              Characters
            </Link>
          </li>
          <li>
            <Link
              to="/vehicle"
              onClick={props.click}
              title="click to choose the vehicles"
            >
              Vehicle
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
