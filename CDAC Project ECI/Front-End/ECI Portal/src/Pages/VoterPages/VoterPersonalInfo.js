import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../Pages_CSS/VoterCSS/VoterPersonalInfo.css";
function VoterPersonalInfo() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [uid, setUid] = useState("");
  const [pan, setPan] = useState("");

  const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
  const history = useHistory();

  useEffect(() => {
    if (personalInfo != undefined) {
      setFirstName(personalInfo.firstName);
      setMiddleName(personalInfo.middleName);
      setLastName(personalInfo.lastName);
      setDateOfBirth(personalInfo.dateOfBirth);
      setAge(personalInfo.age);
      setGender(personalInfo.gender);
      setUid(personalInfo.uid);
      setPan(personalInfo.pan);
    }
  }, []);

  const addPersonalInfo = () => {
    const data = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      age: age,
      gender: gender,
      uid: uid,
      pan: pan,
    };

    localStorage.setItem("personalInfo", JSON.stringify(data));
    history.push("/home/voterAddressInfo");
    console.log(data);
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
                    class="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                      marginLeft: "19%",
                      marginTop: "85px"
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
                            First name
                          </label>
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                            value={firstName}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m1">
                            Middle name
                          </label>
                          <input
                            type="text"
                            id="form3Example1m1"
                            class="form-control form-control-lg"
                            value={middleName}
                            onChange={(e) => {
                              setMiddleName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n1">
                            Last name
                          </label>
                          <input
                            type="text"
                            id="form3Example1n1"
                            class="form-control form-control-lg"
                            value={lastName}
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h6 class="mb-0 me-4">Gender: </h6>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="F"
                          checked={gender == "F" ? true : false}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <label class="form-check-label" for="femaleGender">
                          Female
                        </label>
                      </div>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="M"
                          checked={gender == "M" ? true : false}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <label class="form-check-label" for="maleGender">
                          Male
                        </label>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example9">
                        Birth Date
                      </label>
                      <input
                        type="date"
                        id="form3Example9"
                        class="form-control form-control-lg"
                        value={dateOfBirth}
                        onChange={(e) => {
                          setDateOfBirth(e.target.value);
                        }}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example90">
                        Age
                      </label>
                      <input
                        type="text"
                        id="form3Example90"
                        class="form-control form-control-lg"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example99">
                        Aadhar No
                      </label>
                      <input
                        type="text"
                        id="form3Example99"
                        class="form-control form-control-lg"
                        value={uid}
                        onChange={(e) => {
                          setUid(e.target.value);
                        }}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example97">
                        PAN No
                      </label>
                      <input
                        type="text"
                        id="form3Example97"
                        class="form-control form-control-lg"
                        value={pan}
                        onChange={(e) => {
                          setPan(e.target.value);
                        }}
                      />
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button
                        type="button"
                        class="btn btn-warning btn-lg ms-2"
                        onClick={addPersonalInfo}
                      >
                        Next
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

export default VoterPersonalInfo;
