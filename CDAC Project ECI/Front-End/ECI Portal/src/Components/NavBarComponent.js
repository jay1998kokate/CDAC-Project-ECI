import { Link } from "react-router-dom";
import "../Component_CSS/NavBarComponent.css";
const NavBarCOmponent = () => {
  return (
    <div>
      {/* <nav classNameNameName="navbar navbar-expand-lg navbar-light bg-light">
          <div classNameNameName="container-fluid">
            <a classNameNameName="navbar-brand" href="#">
              Election Commission of India
            </a>
            <button
              classNameNameName="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span classNameNameName="navbar-toggler-icon"></span>
            </button>
            <div classNameNameName="collapse navbar-collapse" id="navbarNav">
              <ul classNameNameName="navbar-nav">
                <li classNameNameName="nav-item">
                  <Link classNameNameName="nav-link" to="/artists">
                    Voter Registration
                  </Link>
                </li>
                <li>
                  <Link classNameNameName="nav-link" to="/albums">
                    Candidate Registration
                  </Link>
                </li>
                <li>
                  <Link classNameNameName="nav-link" to="/users">
                    Political Party Registration
                  </Link>
                </li>
                <li>
                  <Link classNameNameName="nav-link" to="/profile">
                    View Voter Profile
                  </Link>
                </li>
                <li>
                  <Link classNameNameName="nav-link" to="/signout">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home/" className="navbar-brand">
          <img
            src="/Images/mainlogo.png"
            height="28"
            alt="CoolBrand"
            className="navbar-image"
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/home/">
              Election Commission Of India
            </Link>
            {/* <Link to="/home/" className="nav-item nav-link">
              Home
            </Link> */}
            <Link className="nav-item nav-link" to="/home/services">
              Services
            </Link>
              <Link to="/home/user-profile" className="nav-item nav-link">
              User Profile
            </Link>
            <Link to="/home/contact-us" className="nav-item nav-link">
              Contact Us
            </Link>

          </div>
          {/* <div className="navbar-text">
          <Link to="/signin" className="nav-item nav-link">
              Sign In
            </Link>
          </div> */}
          <div className="navbar-text">
            <Link to="/signout" className="nav-item nav-link">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarCOmponent;
