import React from "react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">Gareeb CODER</div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a> Skills</a>
          </li>
          <li>
            <a>Experience</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} class="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default Navbar;
