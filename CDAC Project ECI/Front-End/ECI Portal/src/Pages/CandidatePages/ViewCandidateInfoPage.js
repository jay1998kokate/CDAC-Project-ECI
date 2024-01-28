import { useLocation } from "react-router-dom";
import CandidateProfile from "../../Components/UIComponents/CandidateComponents/CandidateProfile";
function ViewCandidateInfoPage() {
  const location = useLocation();
  const candidate = location.state.candidate;
  console.log(candidate);

  return (
    <div>
      <CandidateProfile candidateInfo={candidate} />
    </div>
  );
}

export default ViewCandidateInfoPage;
