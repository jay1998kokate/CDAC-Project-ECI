 const AssemblyResultRow = ({result}) => {
  const {
    electionId,
    electionName,
    electionDate,
    assemblyName,
    assemblyId,
    state,
    winningCandidateId,
    candidateName,
  } = result;

  return (
      <tr>
        <td>{electionId}</td>
        <td>{electionName}</td>
        <td>{electionDate}</td>
        <td>{assemblyName + "-" + assemblyId}</td>
        <td>{state}</td>
        <td>{winningCandidateId}</td>
        <td>{candidateName}</td>          
      </tr>
  )
};

export default AssemblyResultRow;
