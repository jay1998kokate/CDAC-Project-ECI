import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import RegistrationComponent from "../../Components/RegistrationComponent";
import { AssemblyResultInputs, url } from "../../Common/Constant";

function AddAssemblyResult() {
  const history = useHistory();

  const [failed, setFailed] = useState(null);

  const schema = yup.object().shape({
    assemblyId: yup.string().required("Please Enter Assembly Id"),
    winningCandidateId: yup
      .string()
      .required("Please Enter  Winning Candidate Id"),
    electionId: yup.string().required("Please Enter Election Id"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addResult = (formData) => {
    const data = {
      assemblyId: Number.parseInt(formData.assemblyId),
      winningCandidateId: Number.parseInt(formData.winningCandidateId),
      electionId: Number.parseInt(formData.electionId),
    };

    axios.post(url + "assemblyResult", data).then((response) => {
      const result = response.data;
      if (result.status == "success") {
        document.getElementById("Assembly-Result").reset();
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
        heading={"Add Assembly Result"}
        inputFields={AssemblyResultInputs}
        registerFunction={addResult}
        register={register}
        formId={"Assembly-Result"}
      />
    </div>
  );
}

export default AddAssemblyResult;
