import { useState } from "react";
import axios from "axios";
import { url, signupInputs } from "./../Common/Constant";
import { useHistory, Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginMainComponent from "../Components/LoginMainComponent";


function UserSignUp() {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Please enter email address").email(),
    password: yup.string().required("Please enter password").min(6),
    contact: yup.string().required("Please enter conntact no.").min(10).max(10),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signUp = (formData) => {
    const data = {
      email: formData.email,
      password: formData.password,
      phone: formData.contact,
    };
    axios.post(url + "/user/registerUser", data).then((response) => {
      const result = response.data;
      console.log(result.data);
      if (result.status == "success") {
        alert("Registration Successful");
        history.push("/signin");
      } else alert("User Already Exist");
    });
  };

  return (
    <div>
      <LoginMainComponent
        errors={errors}
        handleSubmit={handleSubmit}
        heading={"Sign Up"}
        formInputs={signupInputs}
        register={register}
        submitFunction={signUp}
      />
    </div>
  );
}

export default UserSignUp;
