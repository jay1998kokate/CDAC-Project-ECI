import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { url } from "./../../Common/Constant";
import AssemblyRow from "./../../Components/UIComponents/AssemblyComponents/AssemblyRow";

function ViewAssembliesPage() {
  const [assemblies, setAssemblies] = useState([]);

  const [assemblyId, setAssemblyId] = useState(0);
  const [assemblyName, setAssemblyName] = useState("");

  const [showById, setShowById] = useState(false);
  const [showByName, setShowByName] = useState(false);

  const location = useLocation();

  //   console.log("assemblyInfo", location.state);

  useEffect(() => {
    if (location.state == undefined) getAllAssemblies();
    else {
      setAssemblies(location.state.assemblyInfo);
    }
  }, []);

  const onIdClick = () => {
    setShowById(true);
    setShowByName(false);
  };

  const onNameClick = () => {
    setShowById(false);
    setShowByName(true);
  };

  const getAllAssemblies = () => {
    axios.get(url + "/assemblyInfo/assembly").then((response) => {
      const result = response.data;
      setAssemblies(result.data);
    });
  };

  const getAssembly = () => {
    let apiUrl = "";
    if (showById) apiUrl = url + "/assemblyInfo/assembly/" + assemblyId;
    else if (showByName)
      apiUrl = url + "/assemblyInfo/assemblyName/" + assemblyName;

    axios.get(apiUrl).then((response) => {
      const result = response.data;
      const assemblies = [];
      assemblies.push(result.data);
      setAssemblies(assemblies);
    });
  };

  return (
    <div>
      <h1 className="page-title">List Of Assemblies</h1>
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
              placeholder="Enter Assembly Id"
              onChange={(e) => {
                setAssemblyId(e.target.value);
              }}
            />
          )}
          {showByName && (
            <input
              type="text"
              placeholder="Enter Assembly Name"
              onChange={(e) => {
                setAssemblyName(e.target.value);
              }}
            />
          )}
        </div>
        <div className="col-2">
          {(showById || showByName) && (
            <button className="btn btn-success" onClick={getAssembly}>
              Search
            </button>
          )}
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Assembly Id</th>
            <th>Assembly Name</th>
            <th>District</th>
            <th>State</th>
            <th>Notation</th>
          </tr>
        </thead>
        <tbody>
          {assemblies.map((assembly) => {
            return <AssemblyRow assembly={assembly} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAssembliesPage;
