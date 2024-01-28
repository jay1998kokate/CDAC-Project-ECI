import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { url } from "../../Common/Constant";
function UpdateAssemblyCandidatePage() {
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



    return (
        <div>
            Hello
        </div>
    )
}

export default UpdateAssemblyCandidatePage;