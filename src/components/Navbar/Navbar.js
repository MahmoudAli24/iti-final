import { Link } from "react-router-dom";
import logo from "../../assets/mohamed/img-2.jpeg";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="c-info">
          <i className="fa-solid fa-phone fa-xs" />
          &nbsp;Call From :(406)
          555-0120&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fa-solid fa-envelope fa-xs" />
          &nbsp;Yourmail@Gmail.Com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fa-solid fa-location-dot fa-xs" />
          &nbsp;6391 Elgin St. Celina, Delaware 10299
        </div>
        <div className="droper">
          <img src={logo} alt="english" width={30} height={20} />
          EN&nbsp;
          <i className="fa-solid fa-chevron-down fa-2xs" /> 
          <i className="fa-solid fa-table-cells-large fa-xs"></i>
        </div>
      </div>
      <div className="nav">
        <p>
          <span className="cms">CMS</span>
          <br />
          <span className="agency">&nbsp;&nbsp;agency</span>
        </p>
        <ul className="menu">
          <li>
            <Link style={{ color: "lightgreen" }} to="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/ahmed">About Us</Link>
          </li>
          <li>
            <Link to="/amira">Plan</Link>
          </li>
          <li>
            <Link to="/mahmoud">Portfolio</Link>
          </li>
          <li>
            <Link to="/katren">Blogs</Link>
          </li>
        </ul>
        <div className="start-project">
          <button>Start Project</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
