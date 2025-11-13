import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./uci.png";  // <-- FIX HERE

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logoImage" />
      </Link>

      <div className="headerRight">
        <Link className="active" to="/">Home</Link>
        <Link to="/second">More About Me</Link>
      </div>
    </div>
  );
}

export default Header;
