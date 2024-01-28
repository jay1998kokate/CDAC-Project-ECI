import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ElectionRegistrationInputs, url } from "../../Common/Constant";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import RegistrationComponent from "../../Components/RegistrationComponent";

function RegisterElection() {
  const history = useHistory();

  const [failed, setFailed] = useState(null);

  const schema = yup.object().shape({
    electionName: yup.string().required("Please enter Election Name"),
    state: yup.string().required("Please enter  State"),
    year: yup.string().required("Please enter Election Year"),
    electionDate: yup.string().required("select Proper Date"),
    resultDate: yup.string().required("select Proper Date"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerElection = (formData) => {
    console.log("Ajay");
    const data = {
      electionName: formData.electionName,
      state: formData.state,
      year: formData.year,
      electionDate: formData.electionDate,
      resultDate: formData.resultDate,
    };
    console.log(data);
    axios.post(url + "/election", data).then((response) => {
      const result = response.data;
      if (result.status == "success") {
        document.getElementById("Election-Registration").reset();
        setFailed(false);
      } else setFailed(true);
    });
  };

  return (
    <div>
      <RegistrationComponent
        errors={errors}
        failed={failed}
        handleSubmit={handleSubmit}
        heading={"Add Election"}
        inputFields={ElectionRegistrationInputs}
        registerFunction={registerElection}
        register={register}
        formId={"Election-Registration"}
      />
    </div>
  );
}

export default RegisterElection;
