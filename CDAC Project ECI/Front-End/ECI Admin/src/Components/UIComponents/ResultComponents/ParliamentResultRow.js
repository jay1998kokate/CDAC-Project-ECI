const ParliamentResultRow = ({result}) => {
    const {
      electionId,
      electionName,
      electionDate,
      parliamentName,
      parliamentId,
      state,
      winningCandidateId,
      candidateName,
    } = result;
  
    return (
        <tr>
          <td>{electionId}</td>
          <td>{electionName}</td>
          <td>{electionDate}</td>
          <td>{parliamentName + "-" + parliamentId}</td>
          <td>{state}</td>
          <td>{winningCandidateId}</td>
          <td>{candidateName}</td>          
        </tr>
    )
  };
  
  export default ParliamentResultRow;
  