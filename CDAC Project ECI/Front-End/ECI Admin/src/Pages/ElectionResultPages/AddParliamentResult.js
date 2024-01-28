import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import RegistrationComponent from "../../Components/RegistrationComponent";
import { ParliamentResultInputs, url } from "../../Common/Constant";

function AddParliamentResult() {
  const history = useHistory();

  const [failed, setFailed] = useState(null);

  const schema = yup.object().shape({
    parliamentId: yup.string().required("Please Enter Parliament Id"),
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
      parliamentId: Number.parseInt(formData.parliamentId),
      winningCandidateId: Number.parseInt(formData.winningCandidateId),
      electionId: Number.parseInt(formData.electionId),
    };

    axios.post(url + "parliamentResult", data).then((response) => {
      const result = response.data;
      if (result.status == "success") {
        document.getElementById("Parliament-Result").reset();
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
        heading={"Add Parliament Result"}
        inputFields={ParliamentResultInputs}
        registerFunction={addResult}
        register={register}
        formId={"Parliament-Result"}
      />
    </div>
  );
}

export default AddParliamentResult;
