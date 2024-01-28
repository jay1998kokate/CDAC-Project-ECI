import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { url } from "../Common/Constant";
import axios from "axios";
function UpdateUserPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [uniqueId, setUniqueId] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setEmail(user.email);
    setPassword(user.password);
    setContact(user.phone);
    setUniqueId(user.uniqueId);
  }, []);

  const updateUser = () => {
    if (email == "") alert("Enter Email Address");
    else if (contact == "" || contact.length != 10)
      alert("Enter Correct Contact Number");
    else {
      const data = {
        uniqueId: uniqueId,
        email: email,
        password: password,
        phone: contact,
      };

      axios.put(url + "/user/updateUser", data).then((response) => {
        const result = response.data;
        console.log(result.data);
        if (result.status == "success") {
          localStorage.setItem("user", JSON.stringify(result.data));
          alert("User updated successfully");
          history.push("/home/user-profile");
        } else alert("Error while updating");
      });
    }
  };

  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto page-body">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row">
                <img src="/Images/mainlogo.png" className="logo" />
              </div>
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                <img src="/Images/intro.jpg" className="image-main" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3">
                <h3 className="mb-0 mr-4 mt-2">Update User</h3>
              </div>
              <div className="row px-3 mb-4">
                <div className="line"></div> <div className="line"></div>
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Email Address</h6>
                </label>
                <input
                  className="mb-4"
                  type="text"
                  name="email"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Contact No.</h6>
                </label>
                <input
                  className="mb-4"
                  type="text"
                  name="contact"
                  placeholder="Enter Contact No."
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </div>
              <div className="row mb-3 px-3">
                <button
                  type="submit"
                  className="btn btn-success text-center"
                  onClick={updateUser}
                >
                  Update
                </button>
              </div>
              <div className="row px-3">
                <small className="font-weight-bold">
                  <Link to="/home/user-profile">
                    <button className="btn btn-link">Back</button>
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue py-4">
          <div className="row px-3">
            <small className="ml-4 ml-sm-5 mb-2">
              Copyright &copy; 2022. All rights reserved.
            </small>
            <div className="social-contact ml-4 ml-sm-auto">
              <span className="fa fa-facebook mr-4 text-sm"></span>
              <span className="fa fa-google-plus mr-4 text-sm"></span>
              <span className="fa fa-linkedin mr-4 text-sm"></span>
              <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserPage;
