import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <p>_________________</p>  
          <Link to="/">Design & Innovation</Link>
          <p>_________________</p>
        </li>
        <li>
          <Link to="/performance">Performance & Engineering</Link>
          <p>_________________</p>
        </li>
        <li>
          <a href="https://www.https://en.wikipedia.org/wiki/BMW_5_Series_(E60).com" target="_blank">BMW E60 Wiki</a>  
          <a href="https://www.bmwusa.com" target="_blank">Official BMW Page</a>
          <p>_________________</p>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
