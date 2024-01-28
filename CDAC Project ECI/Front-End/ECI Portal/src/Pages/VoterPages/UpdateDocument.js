import { useLocation, useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateDocument() {
  const [uidDoc, setUidDoc] = useState("");
  const [panDoc, setPanDoc] = useState("");
  const [photo, setPhoto] = useState("");

  const location = useLocation();
  const history = useHistory();

  const documentInfo = location.state.documentInfo;
  console.log(documentInfo);

  useEffect(() => {
    setUidDoc(documentInfo.uidDoc);
    setPanDoc(documentInfo.panDoc);
    setPhoto(documentInfo.photo);
  }, []);

  const updateDocumentInfo = () => {};

  return (
    <div>
      {" "}
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
                    <h3 class="mb-5 text-uppercase">Update Document</h3>

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
                              setUidDoc(e.target.value);
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
                              setPanDoc(e.target.value);
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
                              setPhoto(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <Link to="/home/voter-profile">
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
                        onClick={updateDocumentInfo}
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

export default UpdateDocument;
