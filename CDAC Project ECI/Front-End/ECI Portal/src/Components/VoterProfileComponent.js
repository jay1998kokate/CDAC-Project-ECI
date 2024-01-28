import "../Component_CSS/VoterProfileComponent.css";
import { url } from './../Common/Constant';

const VoterProfile = ({ voterInfo }) => {
  const {
    voterId,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    age,
    gender,
    uid,
    pan,
    state,
    district,
    taluka,
    village,
    pincode,
    photo,
  } = voterInfo; // Spread Operator

  return (
    <div>
      <h1 className="page-title">Voter Profile</h1>
      <div className="main-div">
        <div className="image-container">
          <img className="voter-image" src={url + "/" + photo} alt="" />
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td className="heading">Voter Id:</td>
                <td>{voterId}</td>
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
                <td>{gender == "M" ? "Male" : gender == "F" ? "Female" : ""}</td>
              </tr>
              <tr>
                <td className="heading">UID:</td>
                <td>{uid}</td>
              </tr>
              <tr>
                <td className="heading">PAN No:</td>
                <td>{pan}</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>

    // <div class="card-body">
    //   <table class="table bordered">
    //     <tbody>
    //       <tr>
    //         <td>नाम/Name</td>
    //         <td>
    //           नितीन अशोक गोरटे / <br />
    //           NITIN ASHOK GORTE{" "}
    //         </td>
    //         <td>
    //           माता-पिता/पति/गुरु का नाम/
    //           <br />
    //           Parent/Spouse Name
    //         </td>
    //         <td>अशोक गोरटे / ASHOK GORTE </td>
    //       </tr>

    //       <tr>
    //         <td>लिंग/Gender</td>
    //         <td>M</td>
    //         <td>उम्र/Age</td>
    //         <td>23</td>
    //       </tr>
    //       <tr>
    //         <td>राज्य/State</td>
    //         <td>Maharashtra</td>
    //         <td>
    //           विधान सभा निर्वाचन क्षेत्र/
    //           <br />
    //           Assembly Constituency
    //         </td>
    //         <td>Hadapsar - 213 </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           पहचान पत्र क्रमांक/
    //           <br />
    //           Voter ID No
    //         </td>
    //         <td>RRH9594979</td>
    //         <td>
    //           स‌ंसदीय निर्वाचन क्षेत्र/ <br />
    //           Parliamentary Constituency
    //         </td>
    //         <td>Shirur </td>
    //       </tr>
    //       <tr>
    //         <td>भाग संख्या/Part Number</td>
    //         <td>71</td>
    //         <td>भाग का नाम/Part Name</td>
    //         <td>Sade satranali hadapsar</td>
    //       </tr>
    //       <tr>
    //         <td>मतदाता क्रमांक/Serial No</td>
    //         <td>606</td>
    //         <td>मतदान केंद्र/Polling Station</td>
    //         <td>Sade satranali hadapsar</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default VoterProfile;
