import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./../../Common/Constant";
import { useHistory } from "react-router-dom";
import CandidateRow from "../../Components/UIComponents/CandidateComponents/CandidateRow";
function ParliamentCandidatePage() {
  const [candidates, setCandidates] = useState([]);
  const [parliamentId, setParliamentId] = useState(0);
  const [partyId, setPartyId] = useState(0);
  const [electionId, setElectionId] = useState(0);
  const [showByParliament, setShowByParliament] = useState(false);
  const [showByParliamentAndElection, setShowByParliamentAndElection] =
    useState(false);
  const [showPoliticalParty, setShowByPoliticalParty] = useState(false);
  const [showByPoliticalPartyAndElection, setShowByPoliticalPartyAndElection] =
    useState(false);

  useEffect(() => {
    getAllParliaments();
  }, []);

  const history = useHistory();

  const getAllParliaments = () => {
    axios.get(url + "/parliamentCandidate").then((response) => {
      const result = response.data;
      setCandidates(result.data);
    });
  };

  const getCandidates = () => {
    let apiUrl = "";

    if (showByParliament)
      apiUrl =
        url + "/parliamentCandidate/getCandidateByParliament/" + parliamentId;
    else if (showByParliamentAndElection)
      apiUrl =
        url +
        "/parliamentCandidate/getCandidateByParliamentAndElection/" +
        parliamentId +
        "/" +
        electionId;
    else if (showPoliticalParty)
      apiUrl =
        url + "/parliamentCandidate/getCandidateByPoliticalParty/" + partyId;
    else if (showByPoliticalPartyAndElection)
      apiUrl =
        url +
        "/parliamentCandidate/getCandidateByPoliticalPartyAndElection/" +
        partyId +
        "/" +
        electionId;

    axios.get(apiUrl).then((response) => {
      const result = response.data;
      setCandidates(result.data);
    });
  };

  const onParliamentClick = () => {
    setShowByParliament(true);
    setShowByParliamentAndElection(false);
    setShowByPoliticalParty(false);
    setShowByPoliticalPartyAndElection(false);
  };

  const onParliamentAndElectionClick = () => {
    setShowByParliament(false);
    setShowByParliamentAndElection(true);
    setShowByPoliticalParty(false);
    setShowByPoliticalPartyAndElection(false);
  };

  const onPoliticalPartyClick = () => {
    setShowByParliament(false);
    setShowByParliamentAndElection(false);
    setShowByPoliticalParty(true);
    setShowByPoliticalPartyAndElection(false);
  };

  const onPoliticalPartyAndElectionClick = () => {
    setShowByParliament(false);
    setShowByParliamentAndElection(false);
    setShowByPoliticalParty(false);
    setShowByPoliticalPartyAndElection(true);
  };

  const onReset = () => {
    setShowByParliament(false);
    setShowByParliamentAndElection(false);
    setShowByPoliticalParty(false);
    setShowByPoliticalPartyAndElection(false);
    getAllParliaments();
  };

  const onViewProfile = (candidate) => {
    history.push("/home/view-assembly-candidates", { candidate: candidate });
  };

  return (
    <div>
      <h1 className="page-title">List Of Parliament Candidates</h1>
      <div>
        <button className="btn btn-primary mx-1" onClick={onParliamentClick}>
          View By Parliament
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={onParliamentAndElectionClick}
        >
          View By Parliament and Election
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
        {(showByParliament || showByParliamentAndElection) && (
          <div className="col-2">
            <input
              type="text"
              placeholder="Enter Parliament Id"
              onChange={(e) => {
                setParliamentId(e.target.value);
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
        {(showByParliamentAndElection || showByPoliticalPartyAndElection) && (
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
          {(showByParliament ||
            showByParliamentAndElection ||
            showByPoliticalPartyAndElection ||
            showPoliticalParty) && (
            <div>
              <button className="btn btn-success" onClick={getCandidates}>
                Search
              </button>
              <button className="btn btn-warning mx-1" onClick={onReset}>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>

      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Candidate Id</th>
            <th>Political Party</th>
            <th>Candidate Name</th>
            <th>Parliament Name</th>
            <th>Election</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => {
            return (
              <CandidateRow
                candidate={candidate}
                onViewProfile={() => {
                  onViewProfile(candidate);
                }}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ParliamentCandidatePage;
