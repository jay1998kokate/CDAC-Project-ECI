import { url } from "../../../Common/Constant";
import "../../../Pages_CSS/VoterCSS/ViewVoterProfile.css";
const CandidateProfile = ({ candidateInfo }) => {
  const {
    candidateId,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    age,
    gender,
    state,
    district,
    taluka,
    village,
    pincode,
    photo,
    constituencyName,
    criminalDetails,
    incomeDetails,
    partyName,
    partySymbol,
    electionName,
    year,
  } = candidateInfo; // Spread Operator

  return (
    <div>
      <h1 className="page-title">Candidate Profile</h1>
      <div className="main-div" style={{width: "460px"}}>
        <div style={{float: "right"}}>
          <tr>
            <div className="image-container">
              <img className="voter-image" src={url + "/" + photo} alt="" />
            </div>
          </tr>
          <tr>
            <div className="image-container">
              <img
                className="voter-image"
                src={"/Images/" + partySymbol}
                alt=""
              />
            </div>
          </tr>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td className="heading">Candidate Id:</td>
                <td>{candidateId}</td>
              </tr>
              <tr>
                <td className="heading">First Name:</td>
                <td>{firstName}</td>
              </tr>
              <tr>
                <td className="heading">Middle Name:</td>
                <td>{middleName}</td>
              </tr>
              <tr>
                <td className="heading">Last Name:</td>
                <td>{lastName}</td>
              </tr>
              <tr>
                <td className="heading">Birth Date:</td>
                <td>{dateOfBirth}</td>
              </tr>
              <tr>
                <td className="heading">Age:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td className="heading">gender:</td>
                <td>{gender == "M" ? "Male" : "Female"}</td>
              </tr>
              <tr>
                <td className="heading">State:</td>
                <td>{state}</td>
              </tr>
              <tr>
                <td className="heading">District:</td>
                <td>{district}</td>
              </tr>
              <tr>
                <td className="heading">Taluka:</td>
                <td>{taluka}</td>
              </tr>
              <tr>
                <td className="heading">Village:</td>
                <td>{village}</td>
              </tr>
              <tr>
                <td className="heading">Pincode:</td>
                <td>{pincode}</td>
              </tr>
              <br />
              <tr>
                <td className="heading">Party Name:</td>
                <td>{partyName}</td>
              </tr>
              <tr>
                <td className="heading">Contesting Assembly Name</td>
                <td>{constituencyName}</td>
              </tr>
              <tr>
                <td className="heading">Election Name:</td>
                <td>{electionName + " - " + year}</td>
              </tr>
              <tr>
                <td className="heading">Criminal Details:</td>
                <td>{criminalDetails}</td>
              </tr>
              <tr>
                <td className="heading">Income Details:</td>
                <td>{incomeDetails}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
