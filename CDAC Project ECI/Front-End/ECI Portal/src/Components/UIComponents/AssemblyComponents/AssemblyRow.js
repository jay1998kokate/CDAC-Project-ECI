const AssemblyRow = ({ assembly }) => {
  const { assemblyId, assemblyName, state, district, notation } = assembly;

  return (
    <tr>
      <td>{assemblyId}</td>
      <td>{assemblyName}</td>
      <td>{district}</td>
      <td>{state}</td>
      <td>{notation}</td>
    </tr>
  );
};

export default AssemblyRow;
