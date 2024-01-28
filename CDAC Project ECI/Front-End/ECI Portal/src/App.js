import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Login from "./Pages/LoginPage";
import UserSignUp from "./Pages/UserSignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
         {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Election Commission of India
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/artists">
                    Voter Registration
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/albums">
                    Candidate Registration
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/users">
                    Political Party Registration
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/profile">
                    View Voter Profile
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/signout">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <div>
          <Switch>
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={UserSignUp} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/home"  component={HomePage} />
            <Redirect path="/" to="/signin"/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
