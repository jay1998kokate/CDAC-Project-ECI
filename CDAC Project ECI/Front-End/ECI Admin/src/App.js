import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Pages/LoginPage";
import UserSignUp from "./Pages/UserSignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signIn" component={Login} />
          <Route path="/signup" component={UserSignUp} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/home" component={HomePage} />
          <Redirect from="/" to="signIn" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
