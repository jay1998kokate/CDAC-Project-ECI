const ElectionRow = ({ election }) => {
    const {
      electionId,
      electionName,
      year,
      electionDate,
      resultDate,
      state,
    } = election;
  
    return (
      <tr>
        <td>{electionId}</td>
        <td>{electionName + " - " + year}</td>
        <td>{electionDate}</td>
        <td>{resultDate}</td>
        <td>{state}</td>
      </tr>
    );
  };
  
  export default ElectionRow;
  