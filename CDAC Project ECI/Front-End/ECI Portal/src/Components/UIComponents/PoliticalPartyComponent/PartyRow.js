const PartyRow = ({ party }) => {
  const {
    politicalPartyId,
    politicalPartyName,
    presidentName,
    state,
    district,
    partySymbol,
    politicalPartyAddress,
  } = party;

  return (
    <tr>
      <td>{politicalPartyId}</td>
      <td>
        <img className="voter-image-table" src={"/Images/" + partySymbol} alt="" />
      </td>
      <td>{politicalPartyName}</td>
      <td>{presidentName}</td>
      <td>{politicalPartyAddress}</td>
      <td>{district}</td>
      <td>{state}</td>
    </tr>
  );
};

export default PartyRow;
