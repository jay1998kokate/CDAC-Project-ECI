import NavBarCOmponent from "../Components/NavBarComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage";
import "../Component_CSS/NavBarComponent.css";
import ViewUserProfile from "./ViewUserProfile";
import UpdateUserPage from "./UpdateUserPage";
import SignOutComponent from "../Components/SignOutComponent";
import ForgotPassword from "./ForgotPassword";
import ViewElectionPage from "./ElectionPages/ViewElectionsPage";
import RegisterElection from "./ElectionPages/RegisterElection";
import UpdateElection from "./ElectionPages/UpdateElection";
import AddAssemblyPage from "./AssemblyPages/AddAssemblyPage";
import AddParliamentPage from "./ParliamentPages/AddparliamentPage";
import AssemblyList from "./AssemblyPages/AssemblyList";
import UpdateAssembly from "./AssemblyPages/UpdateAssembly";
import ParliamentList from './ParliamentPages/ParliamentList';
import UpdateParliament from "./ParliamentPages/UpdateParliament";
import AddAssemblyResult from "./ElectionResultPages/AddAssemblyResult";
import AddParliamentResult from "./ElectionResultPages/AddParliamentResult";
import ViewAssemblyResult from "./ElectionResultPages/ViewAssemblyResult";
import ViewPArliamentResult from "./ElectionResultPages/ViewParliamentResult";

function HomePage() {
  return (
    <div>
      <BrowserRouter>
        <NavBarCOmponent />
        <div className="container">
          <Switch>
            {/* <Route path="/home/candidateRegistration" component={UpdateAssemblyCandidatePage} /> */}
            {/*<Route path="/home/view-elections" component={ViewElectionPage} />*/}
            <Route path="/home/update-user" component={UpdateUserPage} />
            <Route path="/home/user-profile" component={ViewUserProfile} />
            <Route path="/home/forgotPassword" component={ForgotPassword} />
            <Route path="/home/View-elections" component={ViewElectionPage} />
            <Route path="/home/Election" component={RegisterElection} />
            <Route path="/home/update-election" component={UpdateElection} />
            <Route path="/home/add-assembly" component={AddAssemblyPage} />
            <Route path="/home/add-parliament" component={AddParliamentPage} />
            <Route path="/home/assembly-list" component={AssemblyList} />
            <Route path="/home/parliament-list" component={ParliamentList} />
            <Route path="/home/update-assembly" component={UpdateAssembly} />
            <Route path="/home/update-parliament" component={UpdateParliament} />
            <Route path="/home/view-assembly-result" component={ViewAssemblyResult} />
            <Route path="/home/add-assembly-result" component={AddAssemblyResult} />
            <Route path="/home/view-parliament-result" component={ViewPArliamentResult} />
            <Route path="/home/add-parliament-result" component={AddParliamentResult} />

            <Route path="/signout" component={SignOutComponent} />
            <Route path="/home/" component={MainPage} />
          </Switch>
        </div>
      </BrowserRouter>
      {/* <LoginFooter /> */}
    </div>
  );
}

export default HomePage;
