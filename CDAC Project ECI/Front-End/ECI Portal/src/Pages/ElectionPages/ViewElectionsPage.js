import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./../../Common/Constant";
import ElectionRow from "../../Components/UIComponents/ElectionComponents/ElectionRow";

function ViewElectionPage() {
  useEffect(() => {
    getAllElections();
  }, []);

  const [elections, setElections] = useState([]);

  const [electionId, setElectionId] = useState(0);
  const [electionName, setElectionName] = useState("");

  const [showById, setShowById] = useState(false);
  const [showByName, setShowByName] = useState(false);

  const onIdClick = () => {
    setShowById(true);
    setShowByName(false);
  };

  const onNameClick = () => {
    setShowById(false);
    setShowByName(true);
  };

  const getAllElections = () => {
    axios.get(url + "/election/all").then((response) => {
      const result = response.data;
      setElections(result.data);
    });
  };

  const getElection = () => {
    let apiUrl = "";
    if (showById) apiUrl = url + "/election/electionById/" + electionId;
    else if (showByName)
      apiUrl = url + "/election/electionByName/" + electionName;
    axios.get(apiUrl).then((response) => {
      const result = response.data;
      setElections(result.data);
    });
  };
  return (
    <div>
      <h1 className="page-title">List Of Elections</h1>
      <div>
        <button className="btn btn-primary mx-1" onClick={onIdClick}>
          View By Id
        </button>
        <button className="btn btn-primary mx-1" onClick={onNameClick}>
          View By Name
        </button>
      </div>
      <br />
      <div className="row">
        <div className="col-2">
          {showById && (
            <input
              type="text"
              placeholder="Enter Election Id"
              onChange={(e) => {
                setElectionId(e.target.value);
              }}
            />
          )}
          {showByName && (
            <input
              type="text"
              placeholder="Enter Election Name"
              onChange={(e) => {
                setElectionName(e.target.value);
              }}
            />
          )}
        </div>
        <div className="col-2">
          {(showById || showByName) && (
            <button className="btn btn-success" onClick={getElection}>
              Search
            </button>
          )}
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Election Id</th>
            <th>Election Name</th>
            <th>Election Date</th>
            <th>Result Date</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {elections.map((election) => {
            return <ElectionRow election={election} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewElectionPage;
