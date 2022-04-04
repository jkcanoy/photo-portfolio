import React from "react";
import { NavLink } from "react-router-dom"
  
 export default function Navbar() {
    return (
      <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="About">About</NavLink>
          </li>
          <li>
          <NavLink to="Gallery">Gallery</NavLink>
          </li>
          <li>
          <NavLink to="Contact">Contact</NavLink>
          </li>
      </ul>
    );
  }

