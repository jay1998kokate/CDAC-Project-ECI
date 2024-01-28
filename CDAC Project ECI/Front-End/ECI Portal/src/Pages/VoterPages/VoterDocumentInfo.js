import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Pages_CSS/VoterCSS/VoterPersonalInfo.css";
import { url } from "./../../Common/Constant";
function VoterDocumentInfo() {
  const [uidDoc, setUidDoc] = useState("");
  const [panDoc, setPanDoc] = useState("");
  const [photo, setPhoto] = useState("");

  const addDocumentInfo = () => {
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    const addressInfo = JSON.parse(localStorage.getItem("addressInfo"));
    const uniqueId = JSON.parse(localStorage.getItem("user")).uniqueId;

    // const data = {
    //   ...personalInfo,
    //   ...addressInfo,
    //   uidDoc: uidDoc,
    //   panDoc: panDoc,
    //   photo: photo,
    //   uniqueId: uniqueId,
    // };
    // console.log(data);

    const data = new FormData();
    data.append("firstName", personalInfo.firstName);
    data.append("middleName", personalInfo.middleName);
    data.append("lastName", personalInfo.lastName);
    data.append("dateOfBirth", personalInfo.dateOfBirth);
    data.append("age", personalInfo.age);
    data.append("gender", personalInfo.gender);
    data.append("uid", personalInfo.uid);
    data.append("pan", personalInfo.pan);
    data.append("uniqueId", uniqueId);
    data.append("state", addressInfo.state);
    data.append("district", addressInfo.district);
    data.append("taluka", addressInfo.taluka);
    data.append("village", addressInfo.village);
    data.append("pincode", addressInfo.pincode);
    data.append("assemblyId", addressInfo.assemblyId);
    data.append("parliamentId", addressInfo.parlimentId);
    data.append("uidDoc", uidDoc);
    data.append("panDoc", panDoc);
    data.append("photo", photo);

    for (const iterator of data.entries()) {
      console.log(iterator[0], iterator[1]);
    }

    axios
      .post(url + "/voter/registerVoter/personalInfo", data)
      .then((response) => {
        localStorage.removeItem("personalInfo");
        localStorage.removeItem("addressInfo");
        const result = response.data;
        if (result.status == "success") alert("Registration Successful");
        else alert("Error while registration");
      });
  };

  return (
    <div>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img
                    src="/Images/thingsToRemember.png"
                    alt="Sample photo"
                    class="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">Voter Registration</h3>

                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m">
                            Aadhar Card
                          </label>
                          <input
                            type="file"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                            onChange={(e) => {
                              setUidDoc(e.target.files[0]);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m1">
                            PAN Card
                          </label>
                          <input
                            type="file"
                            id="form3Example1m1"
                            class="form-control form-control-lg"
                            onChange={(e) => {
                              setPanDoc(e.target.files[0]);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n1">
                            Photo
                          </label>
                          <input
                            type="file"
                            id="form3Example1n1"
                            class="form-control form-control-lg"
                            onChange={(e) => {
                              setPhoto(e.target.files[0]);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <Link to="/home/voterAddressInfo">
                        <button
                          type="button"
                          class="btn btn-danger btn-lg ms-2"
                        >
                          Back
                        </button>
                      </Link>
                      <button
                        type="button"
                        class="btn btn-warning btn-lg ms-2"
                        onClick={addDocumentInfo}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoterDocumentInfo;
