import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./../../Common/Constant";
import { useHistory } from "react-router-dom";
import CandidateRow from "../../Components/UIComponents/CandidateComponents/CandidateRow";
function AssemblyCandidatesPage() {
  const [candidates, setCandidates] = useState([]);
  const [assemblyId, setAssemblyId] = useState(0);
  const [partyId, setPartyId] = useState(0);
  const [electionId, setElectionId] = useState(0);
  const [showByAssembly, setShowByAssembly] = useState(false);
  const [showByAssemblyAndElection, setShowByAssemblyAndElection] =
    useState(false);
  const [showPoliticalParty, setShowByPoliticalParty] = useState(false);
  const [showByPoliticalPartyAndElection, setShowByPoliticalPartyAndElection] =
    useState(false);

  useEffect(() => {
    getAllCandidates();
  }, []);

  const history = useHistory();

  const getAllCandidates = () => {
    axios.get(url + "/assemblyCandidate").then((response) => {
      const result = response.data;
      setCandidates(result.data);
    });
  };

  const getCandidates = () => {
    let apiUrl = "";

    if (showByAssembly)
      apiUrl = url + "/assemblyCandidate/getCandidateByAssembly/" + assemblyId;
    else if (showByAssemblyAndElection)
      apiUrl =
        url +
        "/assemblyCandidate/getCandidateByAssemblyAndElection/" +
        assemblyId +
        "/" +
        electionId;
    else if (showPoliticalParty)
      apiUrl =
        url + "/assemblyCandidate/getCandidateByPoliticalParty/" + partyId;
    else if (showByPoliticalPartyAndElection)
      apiUrl =
        url +
        "/assemblyCandidate/getCandidateByPoliticalPartyAndElection/" +
        partyId +
        "/" +
        electionId;

    axios.get(apiUrl).then((response) => {
      const result = response.data;
      setCandidates(result.data);
    });
  };

  const onViewProfile = (candidate) => {
    // console.log(candidate);
    history.push("/home/view-assembly-candidates", { candidate: candidate });
  };

  const onAssemblyClick = () => {
    setShowByAssembly(true);
    setShowByAssemblyAndElection(false);
    setShowByPoliticalParty(false);
    setShowByPoliticalPartyAndElection(false);
  };

  const onAssemblyAndElectionClick = () => {
    setShowByAssembly(false);
    setShowByAssemblyAndElection(true);
    setShowByPoliticalParty(false);
    setShowByPoliticalPartyAndElection(false);
  };

  const onPoliticalPartyClick = () => {
    setShowByAssembly(false);
    setShowByAssemblyAndElection(false);
    setShowByPoliticalParty(true);
    setShowByPoliticalPartyAndElection(false);
  };

  const onPoliticalPartyAndElectionClick = () => {
    setShowByAssembly(false);
    setShowByAssemblyAndElection(false);
    setShowByPoliticalParty(false);
    setShowByPoliticalPartyAndElection(true);
  };

  return (
    <div>
      <h1 className="page-title">List Of Assembly Candidates</h1>
      <div>
        <button className="btn btn-primary mx-1" onClick={onAssemblyClick}>
          View By Assembly
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={onAssemblyAndElectionClick}
        >
          View By Assembly and Election
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={onPoliticalPartyClick}
        >
          View By Political Party
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={onPoliticalPartyAndElectionClick}
        >
          View By Political Party and Election
        </button>
      </div>
      <br />

      <div className="row">
        {(showByAssembly || showByAssemblyAndElection) && (
          <div className="col-2">
            <input
              type="text"
              placeholder="Enter Assembly Id"
              onChange={(e) => {
                setAssemblyId(e.target.value);
              }}
            />
          </div>
        )}
        {(showPoliticalParty || showByPoliticalPartyAndElection) && (
          <div className="col-2">
            <input
              type="text"
              placeholder="Enter Political Party Id"
              onChange={(e) => {
                setPartyId(e.target.value);
              }}
            />
          </div>
        )}
        {(showByAssemblyAndElection || showByPoliticalPartyAndElection) && (
          <div className="col-2">
            <input
              type="text"
              placeholder="Enter Election Id"
              onChange={(e) => {
                setElectionId(e.target.value);
              }}
            />
          </div>
        )}
        <div className="col-2">
          {(showByAssembly ||
            showByAssemblyAndElection ||
            showByPoliticalPartyAndElection ||
            showPoliticalParty) && (
            <button className="btn btn-success" onClick={getCandidates}>
              Search
            </button>
          )}
        </div>
      </div>

      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Candidate Id</th>
            <th></th>
            <th>Political Party</th>
            <th>Candidate Name</th>
            <th>Assembly Name</th>
            <th>Election</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => {
            return (
              <CandidateRow
                candidate={candidate}
                onViewProfile={onViewProfile}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AssemblyCandidatesPage;
