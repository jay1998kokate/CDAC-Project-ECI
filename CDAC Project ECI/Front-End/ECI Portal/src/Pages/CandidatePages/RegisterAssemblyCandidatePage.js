import { registerCandidateAssembly } from "../../Common/Constant";
import RegistrationComponent from "../../Components/UIComponents/RegistrationComponent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { url } from "../../Common/Constant";
function RegisterAssemblyCandidatePage() {
  const schema = yup.object().shape({
    voterId: yup.string().required("Please enter voter id"),
    assemblyId: yup.string().required("Please enter assembly id"),
    politicalParyId: yup.string().required("Please enter political party id"),
    electionId: yup.string().required("Please enter election id"),
    criminalDetails: yup.string().required("Please enter criminal details"),
    incomeDetails: yup.string().required("Please enter income details"),
  });

  const [failed, setFailed] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerCandidate = (formData) => {
    const data = {
      assemblyId: formData.assemblyId,
      politicalParyId: formData.politicalParyId,
      electionId: formData.electionId,
      criminalDetails: formData.criminalDetails,
      incomeDetails: formData.incomeDetails,
      voterId: formData.voterId,
    };
    console.log(data);
    axios.post(url + "/assemblyCandidate/register", data).then((response) => {
      const result = response.data;
      if (result.status == "success") {
        setFailed(false);
        document.getElementById("candidate-registration").reset();
      } else setFailed(true);
    });
  };

  return (
    <div>
      <RegistrationComponent
        errors={errors}
        failed={failed}
        handleSubmit={handleSubmit}
        heading={"Candidate Registration"}
        inputFields={registerCandidateAssembly}
        registerFunction={registerCandidate}
        register={register}
        formId={"candidate-registration"}
      />
    </div>
  );
}

export default RegisterAssemblyCandidatePage;
