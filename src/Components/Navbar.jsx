import { useEffect, useRef } from "react";

import ScrollToHashElement from "./ScrollToHashElement";

function Navbar() {
  return (
    <nav className="wrapperNavBar">
      <ScrollToHashElement />
      <Link to="#about">About</Link>
      <Link to="#projects">Projects</Link>
      <Link to="#contact">Contact</Link>
    </nav>
  );
}
export default Navbar;
