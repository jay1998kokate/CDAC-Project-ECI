import { useState } from "react";
import axios from "axios";
import { forgotPasswordInputs, url } from "./../Common/Constant";
import { useHistory, Link } from "react-router-dom";
import LoginMainComponent from "./../Components/LoginMainComponent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ForgotPassword() {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Please enter email address").email(),
    password: yup.string().required("Please enter password").min(6),
    confirmPassword: yup.string().required("Please confirm password").min(6),
  });

  const [failed, setfailed] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const changePassword = (formData) => {
    if (formData.password == formData.confirmPassword) {
      const data = {
        email: formData.email,
        password: formData.password,
      };
      axios.post(url + "/user/forgotPassword", data).then((response) => {
        const result = response.data;
        console.log(result.data);
        if (result.data != "Enter valid emailId") {
          history.push("/signin");
        } else setfailed(true);
      });
    } else setIncorrectPassword(true);
  };

  return (  
    <div>
      <LoginMainComponent
        errors={errors}
        handleSubmit={handleSubmit}
        heading={"Forgot Password"}
        formInputs={forgotPasswordInputs}
        register={register}
        submitFunction={changePassword}
        failed={failed}
        incorrectPassword={incorrectPassword}
      />
    </div>
  );
}

export default ForgotPassword;
