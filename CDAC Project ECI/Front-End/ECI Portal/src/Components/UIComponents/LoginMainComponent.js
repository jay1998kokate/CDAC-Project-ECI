import InputComponent from "./InputComponent";
import LoginFooter from "./LoginFooter";
import LoginSideImage from "./LoginSideImage";
import { Link } from "react-router-dom";

const LoginMainComponent = ({
  heading,
  handleSubmit,
  submitFunction,
  formInputs,
  register,
  errors,
  failed,
  incorrectPassword
}) => {
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto page-body">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <LoginSideImage />
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3">
                <h3 className="mb-0 mr-4 mt-2">{heading}</h3>
              </div>
              <div className="row px-3 mb-4">
                <div className="line"></div> <div className="line"></div>
              </div>

              <form onSubmit={handleSubmit(submitFunction)}>
                {formInputs.inputs.map((input) => {
                  return (
                    <InputComponent
                      input={input}
                      register={register}
                      errors={errors}
                    />
                  );
                })}

                {heading == "Sign In" && (
                  <div className="row px-3 mb-4">
                    <Link
                      to="/forgotPassword"
                      style={{ fontWeight: "bold", color: "blue" }}
                      className="ml-auto mb-0 text-sm"
                    >
                      <label>Forgot Password ?</label>
                    </Link>
                  </div>
                )}

                <div className="row mb-1 px-3">
                  <button type="submit" className="btn btn-success text-center">
                    {heading}
                  </button>
                </div>

                {failed && heading == "Sign In" && (
                  <div style={{ textAlign: "center" }}>
                    <label className="errorMessages">
                      Email address or password is incorrect
                    </label>
                  </div>
                )}

                {failed && heading == "Forgot Password" && (
                  <div style={{ textAlign: "center" }}>
                    <label className="errorMessages">
                      Enter correct email address
                    </label>
                  </div>
                )}

                {incorrectPassword && heading == "Forgot Password" && (
                  <div style={{ textAlign: "center" }}>
                    <label className="errorMessages">
                      Password not match
                    </label>
                  </div>
                )}

                {heading == "Sign In" && (
                  <div className="row mb-4 px-3">
                    <small className="font-weight-bold">
                      Don't have an account?
                      <Link
                        to="signup"
                        style={{ fontWeight: "bold", color: "blue" }}
                        className="px-1"
                      >
                        Sign Up
                      </Link>
                    </small>
                  </div>
                )}

                {heading == "Sign Up" && (
                  <div className="row px-3">
                    <small className="font-weight-bold">
                      Already have an account?
                      <Link
                        to="signin"
                        style={{ fontWeight: "bold", color: "blue" }}
                      >
                        Sign In
                      </Link>
                    </small>
                  </div>
                )}

                {heading == "Forgot Password" && (
                  <div className="row px-3">
                    <small className="font-weight-bold">
                      <Link
                        to="signin"
                        style={{ fontWeight: "bold", color: "blue" }}
                      >
                        Sign In
                      </Link>
                    </small>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    </div>
  );
};

export default LoginMainComponent;
