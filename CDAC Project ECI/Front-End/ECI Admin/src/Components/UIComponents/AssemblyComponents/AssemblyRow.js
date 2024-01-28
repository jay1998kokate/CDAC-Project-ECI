import { useHistory } from "react-router-dom";

const AssemblyRow = ({ assembly, deleteFunction }) => {
  const { assemblyId, assemblyName, state, district, notation } = assembly;

  const history = useHistory();

  const updateAssembly = () => {
    history.push("/home/update-assembly", { assembly: assembly });
  };

  return (
    <tr>
      <td>{assemblyId}</td>
      <td>{assemblyName}</td>
      <td>{district}</td>
      <td>{state}</td>
      <td>{notation}</td>
      <td>
        <button className="btn btn-success btn-sm" onClick={updateAssembly}>
          Update
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteFunction(assemblyId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AssemblyRow;
