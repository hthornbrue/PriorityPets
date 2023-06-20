import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Priorities">Priorities</Link>
          </li>
          <li>
            <Link to="/Pet">Pet</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default NavBar;