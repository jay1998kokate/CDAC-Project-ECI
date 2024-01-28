import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "../../Pages_CSS/VoterCSS/VoterPersonalInfo.css";
import axios from "axios";
import { url } from "./../../Common/Constant";
function VoterAddressInfo() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [village, setVillage] = useState("");
  const [pincode, setPincode] = useState("");
  const [assemblyId, setAssemblyId] = useState(0);
  const [parlimentId, setParlimentId] = useState(0);

  const [assemblies, setAssemblies] = useState([]);
  const [parliaments, setParliaments] = useState([]);

  const addressInfo = JSON.parse(localStorage.getItem("addressInfo"));

  const history = useHistory();

  useEffect(() => {
    if (addressInfo != undefined) {
      setState(addressInfo.state);
      setDistrict(addressInfo.district);
      setTaluka(addressInfo.taluka);
      setVillage(addressInfo.village);
      setPincode(addressInfo.pincode);
      setAssemblyId(addressInfo.assemblyId);
      setParlimentId(addressInfo.parlimentId);
    }

    getParliaments();
  }, []);

  const getParliaments = () => {
    axios.get(url + "/parliament").then((response) => {
      const result = response.data;
      setParliaments(result.data);
    });
  };

  const addAddressInfo = () => {
    const data = {
      state: state,
      district: district,
      taluka: taluka,
      village: village,
      pincode: pincode,
      assemblyId: assemblyId,
      parlimentId: parlimentId,
    };
    localStorage.setItem("addressInfo", JSON.stringify(data));
    history.push("/home/voterDocumentInfo");
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
                            State
                          </label>
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                            value={state}
                            onChange={(e) => {
                              setState(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m1">
                            District
                          </label>
                          <input
                            type="text"
                            id="form3Example1m1"
                            class="form-control form-control-lg"
                            value={district}
                            onChange={(e) => {
                              setDistrict(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n1">
                            Taluka
                          </label>
                          <input
                            type="text"
                            id="form3Example1n1"
                            class="form-control form-control-lg"
                            value={taluka}
                            onChange={(e) => {
                              setTaluka(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n1">
                            Village
                          </label>
                          <input
                            type="text"
                            id="form3Example1n1"
                            class="form-control form-control-lg"
                            value={village}
                            onChange={(e) => {
                              setVillage(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example9">
                        Pincode
                      </label>
                      <input
                        type="text"
                        id="form3Example9"
                        class="form-control form-control-lg"
                        value={pincode}
                        onChange={(e) => {
                          setPincode(e.target.value);
                        }}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example99">
                        Parliament
                      </label>
                      <select
                        onChange={(e) => {
                          const parliamentInfo = JSON.parse(e.target.value);
                          setParlimentId(
                            Number.parseInt(parliamentInfo.parliamentId)
                          );
                          setAssemblies(parliamentInfo.assemblyInfo);
                        }}
                        className="form-control form-control-lg"
                      >
                        <option value="0">Select Parliament</option>
                        {parliaments.map((parliament) => {
                          return (
                            <option value={JSON.stringify(parliament)}>
                              {parliament.parliamentName +
                                " - " +
                                parliament.parliamentId}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example90">
                        Assembly
                      </label>
                      <select
                        onChange={(e) => {
                          setAssemblyId(Number.parseInt(e.target.value));
                        }}
                        className="form-control form-control-lg"
                      >
                        <option value="0">Select Assembly</option>
                        {assemblies.map((assembly) => {
                          return (
                            <option value={assembly.assemblyId}>
                              {assembly.assemblyName +
                                " - " +
                                assembly.assemblyId}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <Link to="/home/voterPersonalInfo">
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
                        onClick={addAddressInfo}
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

export default VoterAddressInfo;
