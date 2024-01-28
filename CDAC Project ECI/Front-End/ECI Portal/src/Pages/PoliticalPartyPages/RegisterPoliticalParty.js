import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setLocale } from "yup";
import InputComponent from "../../Components/UIComponents/InputComponent";
import { partyRegistration } from "./../../Common/Constant";
import axios from "axios";
import { url } from "../../Common/Constant";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import RegistrationComponent from "../../Components/UIComponents/RegistrationComponent";
function RegisterPoliticalParty() {
  //   setLocale({
  //     mixed: {
  //       notType: "Please upload party symbol image",
  //     },
  //   });

  const history = useHistory();

  const [failed, setFailed] = useState(null);

  const schema = yup.object().shape({
    politicalPartyName: yup.string().required("Please enter Party Name"),
    presidentName: yup.string().required("Please enter president name"),
    state: yup.string().required("Please enter state"),
    district: yup.string().required("Please enter district"),
    politicalPartyAddress: yup.string().required("Please enter party address"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerParty = (formData) => {
    const data = {
      politicalPartyName: formData.politicalPartyName,
      presidentName: formData.presidentName,
      state: formData.state,
      district: formData.district,
      partySymbol: formData.partySymbol[0].name,
      politicalPartyAddress: formData.politicalPartyAddress,
    };
    console.log(data);
    axios.post(url + "/politicalParty/", data).then((response) => {
      const result = response.data;
      if (result.status == "success") {
        document.getElementById("party-registration").reset();
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
        heading={"Party Registration"}
        inputFields={partyRegistration}
        registerFunction={registerParty}
        register={register}
        formId={"party-registration"}
      />
    </div>
  );
}

export default RegisterPoliticalParty;
