import { useEffect, useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "../Common/Constant";
import "../Pages_CSS/MainPage.css";

function MainPage() {
  useEffect(() => {
    // getElection();
  }, []);

  const [election, setElection] = useState({});
  const history = useHistory();

  const getElection = () => {
    axios.get(url + "/Election/" + election.electionId).then((response) => {
      const result = response.data;
      console.log(result.data);
    });
  };

  const onUpdateElection = () => {
    const data = {};
    history.push("/home/updateElection", { election: data });
  };

  return (
    <div class="card-deck mb-3 text-center">
      <div className="row">
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Election Service</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link to="/home/View-elections" style={{ color: "blue" }}>
                    View All Elections
                  </Link>
                </li>
                {/* <li
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={onUpdateElection}
                >
                  Update Election
                </li> */}
              </ul>
              <Link to="/home/Election">
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Add Election
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">
                Assembly/Parliament Service
              </h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link to="/home/assembly-list" style={{ color: "blue" }}>
                    View All Assemblies
                  </Link>
                </li>
                <li>
                  <Link to="/home/parliament-list" style={{ color: "blue" }}>
                    View All Parliaments
                  </Link>
                </li>
              </ul>
              <Link to="/home/add-assembly">
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary mx-1"
                >
                Add  Assembly
                </button>
              </Link>
              <Link to="/home/add-parliament">
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary mx-1"
                >
                 Add Parliament
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
              <h4 class="my-0 font-weight-normal">Election Result</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link to="/home/view-assembly-result" style={{ color: "blue" }}>
                    View Assembly Result
                  </Link>
                </li>
                <li>
                  <Link to="/home/view-parliament-result" style={{ color: "blue" }}>
                    View Parliament Result
                  </Link>
                </li>
              </ul>
              <Link to="/home/add-assembly-result">
                <button type="button" class="btn btn-lg btn-block btn-primary mx-1">
                  Assembly
                </button>
                
              </Link>
              <Link to="/home/add-parliament-result">
              <button type="button" class="btn btn-lg btn-block btn-primary mx-1">
                  Parliament
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="col-6 px-5">
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
                  <Link to="/home/parliament-list" style={{ color: "blue" }}>
                    View Parliaments
                  </Link>
                </li>
                <li>
                  <Link to="/home/assembly-list" style={{ color: "blue" }}>
                    View Assemblies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
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
          © 2021 Copyright:
          <a class="text-dark" href="#!">
            eci.gov.in
          </a>
        </div>
      </footer>

    </div>
  );
}

export default MainPage;
