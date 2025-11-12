import "./Header.css";

import uciLogo from "./uci.png";


function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo">
  <img src={uciLogo} alt="UCI Logo" className="logoImage" />
      </a>

      <div className="headerRight">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Header;
