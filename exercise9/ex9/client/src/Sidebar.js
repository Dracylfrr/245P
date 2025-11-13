import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidenav">
      <Link to="/">Who am I  | DO NOT  </Link>
      <Link to="/second"> TOUCH | More about Me</Link>
    </div>
  );
}

export default Sidebar;
