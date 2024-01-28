import { useHistory } from "react-router-dom";
const ParliamentRow = ({ parliament, onAssemblyClick, deleteFunction }) => {
  const { parliamentId, parliamentName, state, district, assemblyInfo } =
    parliament;

  const assemblyClick = (assemblyInfo) => {
    onAssemblyClick(assemblyInfo);
  };

  const history = useHistory();

  const updateParliament = () => {
    history.push("/home/update-parliament", { parliament: parliament });
  };

  return (
    <tr>
      <td>{parliamentId}</td>
      <td>{parliamentName}</td>
      <td>{district}</td>
      <td>{state}</td>
      <td>
        <label
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => {
            assemblyClick(assemblyInfo);
          }}
        >
          {assemblyInfo.length}
        </label>
      </td>
      <td>
        <button className="btn btn-success btn-sm" onClick={updateParliament}>
          Update
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteFunction(parliamentId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ParliamentRow;
