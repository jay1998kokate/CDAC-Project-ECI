const CandidateRow = ({ candidate, onViewProfile }) => {
  const {
    candidateId,
    firstName,
    middleName,
    lastName,
    constituencyName,
    electionName,
    year,
    partyName,
    partySymbol,
  } = candidate;

  const viewProfile = (candidate) => {
    onViewProfile(candidate);
  };

  return (
    <tr>
      <td>{candidateId}</td>
      <td>
        <img
          className="voter-image-table"
          src={"/Images/" + partySymbol}
          alt=""
        />
      </td>
      <td>{partyName}</td>
      <td>{firstName + " " + middleName + " " + lastName}</td>
      <td>{constituencyName}</td>
      <td>{electionName + " - " + year}</td>
      <td>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            viewProfile(candidate);
          }}
        >
          View profile
        </button>
      </td>
    </tr>
  );
};

export default CandidateRow;
