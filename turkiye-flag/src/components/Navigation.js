import React from "react";
// navlink est equivalent a a de html
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink to="/">
            <li>accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>à propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
