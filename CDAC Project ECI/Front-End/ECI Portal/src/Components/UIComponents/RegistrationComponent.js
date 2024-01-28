import InputComponent from "./InputComponent";

const RegistrationComponent = ({
  handleSubmit,
  registerFunction,
  inputFields,
  errors,
  register,
  failed,
  heading,
  formId,
}) => {
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
                  <h3 class="mb-5 text-uppercase">{heading}</h3>

                  <form onSubmit={handleSubmit(registerFunction)} id={formId}>
                    {inputFields.inputs.map((input) => {
                      return (
                        <InputComponent
                          errors={errors}
                          input={input}
                          register={register}
                        />
                      );
                    })}
                    {heading == "Party Registration" && failed && (
                      <div style={{ textAlign: "center" }}>
                        <label className="errorMessages">
                          Error while registration of party
                        </label>
                      </div>
                    )}

                    {heading == "Party Registration" && failed == false && (
                      <div style={{ textAlign: "center" }}>
                        <label className="successMessages">
                          Your party has been successfully registered
                        </label>
                      </div>
                    )}

                    {heading == "Candidate Registration" && failed && (
                      <div style={{ textAlign: "center" }}>
                        <label className="errorMessages">
                          Error while registration of candidate
                        </label>
                      </div>
                    )}

                    {heading == "Candidate Registration" && failed == false && (
                      <div style={{ textAlign: "center" }}>
                        <label className="successMessages">
                          You have successfully registered as a candidate
                        </label>
                      </div>
                    )}
                    <label style={{ color: "red" }}>
                      * Please fill the correct information as per the election
                      commission norms, if any misleading information found,
                      then legal action will taken against the candidate
                    </label>
                    <div class="d-flex justify-content-end pt-3">
                      <button type="submit" class="btn btn-warning btn-lg ms-2">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
