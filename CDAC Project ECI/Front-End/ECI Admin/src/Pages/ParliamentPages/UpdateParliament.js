import { useHistory, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import { url } from "../../src/Common/Constant";
import { url } from "../../Common/Constant";


function UpdateParliament() {
  const history = useHistory();
  const location = useLocation();

  const [parliamentId, setParliamentId] = useState(0);
  const [parliamentName, setParliamentName] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const parliament = location.state.parliament;

  useEffect(() => {
    setParliamentId(parliament.parliamentId);
    setParliamentName(parliament.parliamentName);
    setState(parliament.state);
    setDistrict(parliament.district);
  }, []);

  const updateParliament = () => {
    const data = {
      parliamentId: parliamentId,
      parliamentName: parliamentName,
      state: state,
      district: district,
    };

    axios.put(url + "parliament/update", data).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status == "success") {
        history.push("/home/parliament-list");
      }
    });
  };

  return (
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-registration my-4">
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
                <img
                  src="/Images/thingsToRemember.png"
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: ".25rem",
                    borderBottomLeftRadius: ".25rem",
                    marginLeft: "19%",
                    marginTop: "85px",
                  }}
                />
              </div>
              <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">Update Parliament</h3>

                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example1m">
                          Parliament Id
                        </label>
                        <input
                          type="text"
                          id="form3Example1m"
                          class="form-control form-control-lg"
                          disabled
                          value={parliamentId}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example1m">
                          Parliament Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1m"
                          class="form-control form-control-lg"
                          value={parliamentName}
                          onChange={(e) => {
                            setParliamentName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example1m1">
                          State
                        </label>
                        <input
                          type="text"
                          id="form3Example1m1"
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
                        <label class="form-label" for="form3Example1n1">
                          District
                        </label>
                        <input
                          type="text"
                          id="form3Example1n1"
                          class="form-control form-control-lg"
                          value={district}
                          onChange={(e) => {
                            setDistrict(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-end pt-3">
                    <Link to="/home/parliament-list">
                      <button type="button" class="btn btn-danger btn-lg ms-2">
                        Back
                      </button>
                    </Link>
                    <button
                      type="button"
                      class="btn btn-warning btn-lg ms-2"
                      onClick={updateParliament}
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
  );
}

export default UpdateParliament;
