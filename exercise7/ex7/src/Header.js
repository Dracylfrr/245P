import "./Header.css";

import logo from "./logo.svg";


function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo">
        <img src={logo} alt="Company Logo" className="logoImage" />
        <span>AK and Co.</span>
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
