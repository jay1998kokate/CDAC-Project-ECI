import { useLocation, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "./../../Common/Constant";
function UpdateAddress() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [village, setVillage] = useState("");
  const [pincode, setPincode] = useState("");
  const [assemblyId, setAssemblyId] = useState(0);
  const [parlimentId, setParlimentId] = useState(0);

  const location = useLocation();
  const history = useHistory();

  const addressInfo = location.state.addressInfo;

  console.log(addressInfo);

  useEffect(() => {
    setState(addressInfo.state);
    setDistrict(addressInfo.district);
    setTaluka(addressInfo.taluka);
    setVillage(addressInfo.village);
    setPincode(addressInfo.pincode);
    setAssemblyId(addressInfo.assemblyId);
    setParlimentId(addressInfo.parlimentId);
  }, []);

  const updateAddressInfo = () => {
    const data = {
      state: state,
      district: district,
      taluka: taluka,
      village: village,
      pincode: pincode,
      assemblyId: assemblyId,
    //   parlimentId: parlimentId,
      voterId: addressInfo.voterId,
    };

    axios
      .put(
        url + "/voter/updateVoter/addressInfo/" + addressInfo.addressId,
        data
      )
      .then((response) => {
        const result = response.data;
        if (result.status == "success") {
          alert("Address updated successfully");
          history.push("/home/voter-profile");
        }
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
                    <h3 class="mb-5 text-uppercase">Update Voter Address</h3>

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
                      <label class="form-label" for="form3Example90">
                        Assembly
                      </label>
                      <input
                        type="number"
                        id="form3Example90"
                        class="form-control form-control-lg"
                        value={assemblyId}
                        onChange={(e) => {
                          setAssemblyId(Number.parseInt(e.target.value));
                        }}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example99">
                        Parliament
                      </label>
                      <input
                        type="number"
                        id="form3Example99"
                        class="form-control form-control-lg"
                        value={parlimentId}
                        onChange={(e) => {
                          setParlimentId(Number.parseInt(e.target.value));
                        }}
                      />
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <Link to="/home/services">
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
                        onClick={updateAddressInfo}
                      >
                        Update
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

export default UpdateAddress;
