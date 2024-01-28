import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RegistrationComponent from "./../../Components/RegistrationComponent";
// import { url } from "./../../src/Common/Constant";
import { url } from "../../Common/Constant";

import { ParliamentRegistrationInputs } from "../../Common/Constant";

function AddParliamentPage() {
  const history = useHistory();

  const [failed, setFailed] = useState(null);

  const schema = yup.object().shape({
    parliamentName: yup.string().required("Please Enter Parliament Name"),
    state: yup.string().required("Enter State Name"),
    district: yup.string().required("Enter District Name"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),

  });

  const registerFunction = (formData) => {
    console.log(formData);
    const data = {
      parliamentName: formData.parliamentName,
      state: formData.state,
      district: formData.district,
    };
    axios.post(url + "parliament/add", data).then((response) => {
      const result = response.data;
      if (result.status == "success") {
        document.getElementById("Parliament-Registration").reset();
        
        setFailed(false);
        alert("Parliament Added");
      } else setFailed(true);
    });
  };

  return (
    <div>
      <RegistrationComponent
        errors={errors}
        failed={failed}
        handleSubmit={handleSubmit}
        heading={"Add Parliament"}
        inputFields={ParliamentRegistrationInputs}
        registerFunction={registerFunction}
        register={register}
        formId={"Parliament-Registration"}
      />
    </div>
  );
}

export default AddParliamentPage;
