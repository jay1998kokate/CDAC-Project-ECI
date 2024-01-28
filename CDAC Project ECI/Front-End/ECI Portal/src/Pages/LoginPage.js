import { useState } from "react";
import axios from "axios";
import { loginInputs, url } from "./../Common/Constant";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../Pages_CSS/loginPage.css";
import LoginMainComponent from "./../Components/UIComponents/LoginMainComponent";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().required("Please enter email address").email(),
    password: yup.string().required("Please enter password").min(6),
  });
  const history = useHistory();

  const [loginFailed, setLoginFailed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signIn = (formData) => {
    const data = {
      email: formData.email,
      password: formData.password,
    };

    axios.post(url + "/user/login", data).then((response) => {
      const result = response.data;
      console.log(result.data);
      if (result.data == "User not found") {
        setLoginFailed(true);
      } else {
        localStorage.setItem("user", JSON.stringify(result.data));
        setLoginFailed(false);
        history.push("/home");
      }
    });
  };

  return (
    <div>
      <LoginMainComponent
        errors={errors}
        handleSubmit={handleSubmit}
        heading={"Sign In"}
        formInputs={loginInputs}
        register={register}
        submitFunction={signIn}
        failed={loginFailed}
      />
    </div>
  );
}

export default Login;
