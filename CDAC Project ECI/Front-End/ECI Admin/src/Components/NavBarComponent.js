import { Link } from "react-router-dom";
const NavBarCOmponent = () => {
  return (
    <div>
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

        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/home/">
              Election Commission Of India Admin
            </Link>
            {/* <Link to="/home/" className="nav-item nav-link">
              Home
            </Link> */}
            {/* <Link className="nav-item nav-link">About Us</Link>
            <Link
              to="/home/candidateRegistration"
              className="nav-item nav-link"
            >
              Contact Us
            </Link>
            <Link className="nav-item nav-link">Help</Link> */}
            <Link to="/home/user-profile" className="nav-item nav-link">
              User Profile
            </Link>
            {/* <Link to="/home/forgotPassword" className="nav-item nav-link">Change Password</Link> */}
          </div>
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
