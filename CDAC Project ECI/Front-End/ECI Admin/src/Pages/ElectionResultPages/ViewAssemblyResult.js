import { useState } from "react";
import axios from "axios";
import { url } from "../../Common/Constant";
import AssemblyResultRow from "../../Components/UIComponents/ResultComponents/AssemblyResultRow";

function ViewAssemblyResult() {
  const [assemblyId, setAssemblyId] = useState(0);
  const [result, setResult] = useState([]);

  const searchResult = () => {
    axios
      .get(url + "assemblyResult/getWinningCandidateByAssemblyId/" + assemblyId)
      .then((response) => {
        const result = response.data;
        setResult(result.data);
      });
  };

  return (
    <div>
      <h1 className="page-title">Assembly Result</h1>
      <div className="row">
        <div className="col-2">
          <input
            type="number"
            placeholder="Enter Assembly Id"
            onChange={(e) => {
              setAssemblyId(e.target.value);
            }}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={searchResult}>
            Search
          </button>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Election Id</th>
            <th>Election Name</th>
            <th>Election Date</th>
            <th>Assembly Name</th>
            <th>State</th>
            <th>Candidate Id</th>
            <th>Candidate Name</th>
          </tr>
        </thead>
        <tbody>
          {result.map((r) => (
            <AssemblyResultRow result={r} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAssemblyResult;
