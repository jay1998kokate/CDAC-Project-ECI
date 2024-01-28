import { useHistory } from "react-router-dom";

const ElectionRow = ({ election, deleteElection }) => {
  const { electionId, electionName, year, electionDate, resultDate, state } =
    election;
  const history = useHistory();

  const onUpdateElection = (election) => {
    history.push("/home/update-Election", { election: election });
  };

    return (
    <tr>
      <td>{electionId}</td>
      <td>{electionName + " - " + year}</td>
      <td>{electionDate}</td>
      <td>{resultDate}</td>
      <td>{state}</td>
      <td>
        <button
          className="btn btn-success"
          onClick={() => {
            onUpdateElection(election);
          }}
        >
          Update
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteElection(election);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ElectionRow;
