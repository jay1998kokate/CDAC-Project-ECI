import NavBarCOmponent from "../Components/NavBarComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewVoterProfile from "./ViewVoterProfile";
import MainPage from "./MainPage";
import "../Component_CSS/NavBarComponent.css";
import ViewUserProfile from "./ViewUserProfile";
import UpdateUserPage from "./UpdateUserPage";
import SignOutComponent from "../Components/SignOutComponent";
import VoterPersonalInfo from "./VoterPages/VoterPersonalInfo";
import VoterAddressInfo from './VoterPages/VoterAddressInfo';
import VoterDocumentInfo from './VoterPages/VoterDocumentInfo';
import UpdatePersonalInfo from "./VoterPages/UpdatePersonalInfo";
import UpdateAddress from "./VoterPages/UpdateAddress";
import UpdateDocument from "./VoterPages/UpdateDocument";
import RegisterPoliticalParty from './PoliticalPartyPages/RegisterPoliticalParty';
import RegisterAssemblyCandidatePage from './CandidatePages/RegisterAssemblyCandidatePage';
import RegisterParliamentCandidatePage from "./CandidatePages/RegisterParliamentCandidatePage";
import AssemblyCandidatesPage from "./CandidatePages/AssemblyCandidatesPage";
import ParliamentCandidatePage from './CandidatePages/ParliamentCandidatePage';
import UpdateAssemblyCandidatePage from "./CandidatePages/UpdateAssemblyCandidatePage";
import ViewCandidateInfoPage from "./CandidatePages/ViewCandidateInfoPage";
import ViewPoliticalParties from "./PoliticalPartyPages/ViewPoliticalParties";
import ViewElectionPage from './ElectionPages/ViewElectionsPage';
import ViewParliamentsPage from './ParliamentPages/VIewParliamentsPage';
import ViewAssembliesPage from './AssemblyPages/ViewAssembliesPage';
import LoginFooter from './../Components/UIComponents/LoginFooter';
import ForgotPassword from './ForgotPassword';
import ViewAssemblyResult from './ElectionResultPages/ViewAssemblyResult';
import ViewParliamentResult from './ElectionResultPages/ViewParliamentResult';
import AboutUsPage from "./AboutUsPage";
import ContactUsPage from "./ContactUsPage";

function HomePage( ) {
  return (
    <div>
      <BrowserRouter>
        <NavBarCOmponent />
        <div className="container">
          <Switch>
            <Route path="/home/voterPersonalInfo" component={VoterPersonalInfo} />
            <Route path="/home/updatePersonalInfo" component={UpdatePersonalInfo} />
            <Route path="/home/voterAddressInfo" component={VoterAddressInfo}  />
            <Route path="/home/updateAddressInfo" component={UpdateAddress} />
            <Route path="/home/voterDocumentInfo" component={VoterDocumentInfo} />
            <Route path="/home/updateDocumentInfo" component={UpdateDocument} />
            <Route path="/home/partyRegistration" component={RegisterPoliticalParty} />
            <Route path="/home/view-parties" component={ViewPoliticalParties} />
            <Route path="/home/candidateRegistration" component={RegisterAssemblyCandidatePage} />
            {/* <Route path="/home/candidateRegistration" component={UpdateAssemblyCandidatePage} /> */}
            <Route path="/home/ParliamentCandidateRegistration" component={RegisterParliamentCandidatePage} />
            <Route path="/home/assembly-candidates" component={AssemblyCandidatesPage} />
            <Route path="/home/parliament-candidates" component={ParliamentCandidatePage} />
            <Route path="/home/view-assembly-candidates" component={ViewCandidateInfoPage} />
            <Route path="/home/view-elections" component={ViewElectionPage} />
            <Route path="/home/view-parliaments" component={ViewParliamentsPage} />
            <Route path="/home/view-assembly" component={ViewAssembliesPage} />
            <Route path="/home/view-assembly-result" component={ViewAssemblyResult} />
            <Route path="/home/view-parliament-result" component={ViewParliamentResult} />
            <Route path="/home/update-user" component={UpdateUserPage} />
            <Route path="/home/voter-profile" component={ViewVoterProfile} />
            <Route path="/home/user-profile" component={ViewUserProfile} />
            <Route path="/home/forgotPassword" component={ForgotPassword} />
            <Route path="/home/contact-us" component={ContactUsPage} />
            <Route path="/home/services" component={MainPage} />
            <Route path="/signout" component={SignOutComponent} />
            <Route path="/home/" component={AboutUsPage} />
          </Switch>
        </div>
      </BrowserRouter>
      {/* <LoginFooter /> */}
    </div>
  );
}

export default HomePage;
