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

  const deleteElection = (election) => {
    console.log(election);
    axios
      .delete(url + "election/deleteelection/" + election.electionId)
      .then((response) => {
        alert("Election id" + election.electionId + "   is removed");
        setElections(
          elections.filter((ele) => ele.electionId != election.electionId)
        );
      });
  };

  const getElection = () => {
    let apiUrl = "";
    if (showById) {
      apiUrl = url + "/election/electionById/" + electionId;
      var flag = true;
    } else if (showByName) {
      apiUrl = url + "/election/electionByName/" + electionName;
      flag = false;
    }

    axios.get(apiUrl).then((response) => {
      const result = response.data;
      const elections = [];
      if (result.data == null) {
        alert("record Not Found Please enter valid Data");
        setElections(elections);
      } else {
        if (flag == true) {
          console.log(result.data);
          elections.push(result.data);
          setElections(elections);
        } else {
          console.log(result.data);
          setElections(result.data);
        }
      }
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
              type="number"
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {elections.map((election) => {
            return (
              <ElectionRow
                election={election}
                deleteElection={deleteElection}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewElectionPage;
