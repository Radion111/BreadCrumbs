import React from "react";

import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
//! Если хочешь правильно импортиривать ОБЯЗАТЕЛЬНО
//! react-router-dom То обязательно импортируй так

function Mainmanual({ CheckClas }) {
  return (
    <div>
      <ul className="routerul">
        <li className="routeli">
          <Link to="/work" className="LinkApp">
            Work
          </Link>
        </li>
        <li className="routeli">
          <Link to="/about" className="LinkApp">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Mainmanual;
