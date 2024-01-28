import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "../Common/Constant";
import "../Pages_CSS/MainPage.css";

function MainPage() {
  useEffect(() => {
    getProfile();
  }, []);

  const [voterInfo, setVoterInfo] = useState({});
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const getProfile = () => {
    axios.get(url + "/user/" + user.uniqueId).then((response) => {
      const result = response.data;
      setVoterInfo(result.data);
      console.log(result.data);
    });
  };

  const onUpdatePersonalInfo = () => {
    const data = {
      voterId: voterInfo.voterId,
      firstName: voterInfo.firstName,
      middleName: voterInfo.middleName,
      lastName: voterInfo.lastName,
      dateOfBirth: voterInfo.dateOfBirth,
      age: voterInfo.age,
      gender: voterInfo.gender,
      uid: voterInfo.uid,
      pan: voterInfo.pan,
      uniqueId: voterInfo.uniqueId,
    };
    history.push("/home/updatePersonalInfo", { personalInfo: data });
  };

  const onUpdateAddress = () => {
    const data = {
      addressId: voterInfo.addressId,
      state: voterInfo.state,
      district: voterInfo.district,
      taluka: voterInfo.taluka,
      village: voterInfo.village,
      pincode: voterInfo.pincode,
      assemblyId: voterInfo.assemblyId,
      parlimentId: voterInfo.parlimentId,
      voterId: voterInfo.voterId,
    };
    history.push("/home/updateAddressInfo", { addressInfo: data });
  };

  const onUpdateDocuments = () => {
    const data = {
      uidDoc: voterInfo.uidDoc,
      panDoc: voterInfo.panDoc,
      photo: voterInfo.photo,
      voterId: voterInfo.voterId,
      docId: voterInfo.docId,
    };
    history.push("/home/updateDocumentInfo", { documentInfo: data });
  };

  return (
    <div class="card-deck mb-3 text-center">
      <div className="row">
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Voter Service</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link to="/home/voter-profile" style={{ color: "blue" }}>
                    View Voter Profile
                  </Link>
                </li>
                <li
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={onUpdatePersonalInfo}
                >
                  Update Personal Info
                </li>

                <li
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={onUpdateAddress}
                >
                  Update Address
                </li>

                {/* <li
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={onUpdateDocuments}
                >
                  Update Documents
                </li> */}
              </ul>
              <Link to="/home/voterPersonalInfo">
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Voter Registration
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Candidate Service</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link
                    to="/home/assembly-candidates"
                    style={{ color: "blue" }}
                  >
                    View Assembly Candidates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home/parliament-candidates"
                    style={{ color: "blue" }}
                  >
                    View Parliament Candidates
                  </Link>
                </li>
              </ul>
              <Link to="/home/candidateRegistration">
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary mx-1"
                >
                  Assembly
                </button>
              </Link>
              <Link to="/home/ParliamentCandidateRegistration">
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary mx-1"
                >
                  Parliament
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Political Party</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link to="/home/view-parties" style={{ color: "blue" }}>
                    View Political Parties
                  </Link>
                </li>
              </ul>
              <Link to="/home/partyRegistration">
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Party Registration
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Data Section</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link to="/home/view-elections" style={{ color: "blue" }}>
                    View Elections
                  </Link>
                </li>
                <li>
                  <Link to="/home/view-parliaments" style={{ color: "blue" }}>
                    View Parliaments
                  </Link>
                </li>
                <li>
                  <Link to="/home/view-assembly" style={{ color: "blue" }}>
                    View Assemblies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home/view-assembly-result"
                    style={{ color: "blue" }}
                  >
                    View Assembly Result
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home/view-parliament-result"
                    style={{ color: "blue" }}
                  >
                    View Parliament Result
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer class="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
        <div class="pt-4">
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/ECI/"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
           <i class="bi bi-facebook"></i>
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/ECISVEEP"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
           <i class="bi bi-twitter"></i>
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.youtube.com/eci"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="bi bi-youtube"></i>
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/ecisveep/"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
           <i class="bi bi-instagram"></i>
          </a>
        </div>

        <div
          class="text-center text-dark p-3"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
        >
          © 2022 Copyright:
          <a class="text-dark" href="#!">
            eci.gov.in
          </a>
        </div>
      </footer>

    </div>
  );
}

export default MainPage;
