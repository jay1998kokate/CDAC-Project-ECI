const ParliamentRow = ({ parliament, onAssemblyClick }) => {
  const { parliamentId, parliamentName, state, district, assemblyInfo } =
    parliament;

  const assemblyClick = (assemblyInfo) => {
    onAssemblyClick(assemblyInfo);
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
    </tr>
  );
};

export default ParliamentRow;
