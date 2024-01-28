import { Link } from "react-router-dom";
import "../Component_CSS/UserProfileComponent.css";
const UserProfileComponent = ({ profile }) => {
  const { email, password, phone, uniqueId } = profile;
  return (
    <div>
      <h1 className="page-title">User Profile</h1>
      <div
        class="container bootstrap snippets bootdey"
        style={{ width: "50%" }}
      >
        <div class="panel-body inf-content">
          <div class="row">
            <div class="col-md-6" style={{ margin: "auto" }}>
              <br />
              <div class="table-responsive">
                <table class="table table-user-information">
                  <tbody>
                    <tr>
                      <td>
                        <strong>
                          <span class="glyphicon glyphicon-asterisk text-primary"></span>
                          User Id:
                        </strong>
                      </td>
                      <td>{uniqueId}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span class="glyphicon glyphicon-user  text-primary"></span>
                          Email:
                        </strong>
                      </td>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span class="glyphicon glyphicon-cloud text-primary"></span>
                          Contact No.:
                        </strong>
                      </td>
                      <td>{phone}</td>
                    </tr>
                    <div style={{ margin: "auto" }}>
                      <Link to="/home/update-user">
                        <button className="btn btn-link">Update Profile</button>
                      </Link>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent;
