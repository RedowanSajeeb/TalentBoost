import React from "react";
import { NavLink } from "react-router-dom";
const ActiveNavLINk = ({ to }) => {
  return (
    <NavLink
      to={to}
      className={`underline decoration-red-900 ${(isActive)  => isActive ? "active" : ""}`}
    >
      
    </NavLink>
  );
};

export default ActiveNavLINk;
