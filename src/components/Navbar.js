import homeIcon from "../assets/home.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to={`/`}>
            <img style={{ width: "200%" }} src={homeIcon} alt="Home" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
