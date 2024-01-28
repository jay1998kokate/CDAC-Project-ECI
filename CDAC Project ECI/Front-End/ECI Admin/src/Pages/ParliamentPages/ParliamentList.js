import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "../../Common/Constant";
import ParliamentRow from "../../Components/UIComponents/ParliamentComponents/ParliamentRow";

function ParliamentList() {
  useEffect(() => {
    getAllParliaments();
  }, []);

  const [parliaments, setParliaments] = useState([]);

  const [parliamentId, setParliamentId] = useState(0);
  const [parliamentName, setParliamentName] = useState("");

  const [showById, setShowById] = useState(false);
  const [showByName, setShowByName] = useState(false);

  const history = useHistory();

  const onIdClick = () => {
    setShowById(true);
    setShowByName(false);
  };

  const onNameClick = () => {
    setShowById(false);
    setShowByName(true);
  };

  const getAllParliaments = () => {
    axios.get(url + "/parliament").then((response) => {
      const result = response.data;
      setParliaments(result.data);
    });
  };

  const getParliament = () => {
    let apiUrl = "";
    if (showById) apiUrl = url + "/parliament/getById/" + parliamentId;
    else if (showByName)
      apiUrl = url + "/parliament/getByName/" + parliamentName;

    axios.get(apiUrl).then((response) => {
      const result = response.data;
      const parliaments = [];
      parliaments.push(result.data);
      setParliaments(parliaments);
    });
  };

  const onAssemblyClick = (assemblyInfo) => {
    history.push("/home/assembly-list", { assemblyInfo: assemblyInfo });
  };

  const deleteParliament = (parliamentId) => {
    axios
      .delete(url + "/parliament/delete/" + parliamentId)
      .then((response) => {
        const result = response.data;
        if (result.status == "success")
          setParliaments(
            parliaments.filter(
              (parliament) => parliament.parliamentId != parliamentId
            )
          );
      });
  };

  return (
    <div>
      <h1 className="page-title">List Of Parliaments</h1>
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
              placeholder="Enter Parliament Id"
              onChange={(e) => {
                setParliamentId(e.target.value);
              }}
            />
          )}
          {showByName && (
            <input
              type="text"
              placeholder="Enter Parliament Name"
              onChange={(e) => {
                setParliamentName(e.target.value);
              }}
            />
          )}
        </div>
        <div className="col-2">
          {(showById || showByName) && (
            <button className="btn btn-success" onClick={getParliament}>
              Search
            </button>
          )}
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Parliament Id</th>
            <th>Parliament Name</th>
            <th>District</th>
            <th>State</th>
            <th>No. Of Assemblies</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {parliaments.map((parliament) => {
            return (
              <ParliamentRow
                parliament={parliament}
                onAssemblyClick={onAssemblyClick}
                deleteFunction={deleteParliament}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ParliamentList;
