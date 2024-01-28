import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./../../Common/Constant";
import PartyRow from "../../Components/UIComponents/PoliticalPartyComponent/PartyRow";
import "../../Pages_CSS/PoliticalParty.css";

function ViewPoliticalParties() {
  useEffect(() => {
    getAllParties();
  }, []);

  const [parties, setParties] = useState([]);

  const [partyId, setPartyId] = useState(0);
  const [partyName, setPartyName] = useState("");

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

  const getAllParties = () => {
    axios.get(url + "/politicalParty/parties").then((response) => {
      const result = response.data;
      setParties(result.data);
    });
  };

  const getPoliticalParty = () => {
    let apiUrl = "";
    if (showById) apiUrl = url + "/politicalParty/" + partyId;
    else if (showByName) {
        const name = partyName.toUpperCase();
      apiUrl = url + "/politicalParty/partyByname/" + name;
    }

    axios.get(apiUrl).then((response) => {
      const result = response.data;
      console.log(result);
      setParties(result.data);
    });
  };

  return (
    <div>
      <h1 className="page-title">List Of Political Parties</h1>
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
              placeholder="Enter Party Id"
              onChange={(e) => {
                setPartyId(e.target.value);
              }}
            />
          )}
          {showByName && (
            <input
              type="text"
              placeholder="Enter Party Name"
              onChange={(e) => {
                setPartyName(e.target.value);
              }}
            />
          )}
        </div>
        <div className="col-2">
          {(showById || showByName) && (
            <button className="btn btn-success" onClick={getPoliticalParty}>
              Search
            </button>
          )}
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Party Id</th>
            <th></th>
            <th>Party Name</th>
            <th>President Name</th>
            <th>Head Office Address</th>
            <th>District</th>
            <th>State</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {parties.map((party) => {
            return <PartyRow party={party} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPoliticalParties;
