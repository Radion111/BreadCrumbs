import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      <div>THis is Work.jsx</div>
      <ul className="routerul">
        <li className="routeli">
          <Link to="/work/designer" className="LinkWork">
            Designer
          </Link>
        </li>
        <li className="routeli">
          <Link to="/work/markete" className="LinkWork">
            Markete
          </Link>
        </li>
        <li className="routeli">
          <Link to="/work/engineer" className="LinkWork">
            Engineer
          </Link>
        </li>
      </ul>

      <div>This is Work.js</div>
    </div>
  );
}

export default Work;
