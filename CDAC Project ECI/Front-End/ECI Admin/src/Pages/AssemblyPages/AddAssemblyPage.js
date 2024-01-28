import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RegistrationComponent from "../../Components/RegistrationComponent";
import { AssemblyRegistrationInputs } from "../../Common/Constant";
// import { url } from "../../src/Common/Constant";
import { url } from "../../Common/Constant";


function AddAssemblyPage() {
  const history = useHistory();

  const [failed, setFailed] = useState(null);

  const schema = yup.object().shape({
    assemblyName: yup.string().required("Please Enter Assembly Name"),
    state: yup.string().required("Enter State Name"),
    notation: yup.string().required("Enter Notation"),
    district: yup.string().required("Enter District Name"),
    parliamentId: yup.string().required("Enter Parliament Id"),
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
      assemblyName: formData.assemblyName,
      state: formData.state,
      notation: formData.notation,
      district: formData.district,
      parliamentId: Number.parseInt(formData.parliamentId),
    };

    axios.post(url + "assemblyInfo/add", data).then((response) => {
      const result = response.data;
      if(result.status == "success") {
          document.getElementById("Assembly-Registration").reset();
          setFailed(false);
          alert("Assembly Added");
      }else setFailed(true)
    });
  };

  return (
    <div>
      <RegistrationComponent
        errors={errors}
        failed={failed}
        handleSubmit={handleSubmit}
        heading={"Add Assembly"}
        inputFields={AssemblyRegistrationInputs}
        registerFunction={registerFunction}
        register={register}
        formId={"Assembly-Registration"}
      />
    </div>
  );
}

export default AddAssemblyPage;
