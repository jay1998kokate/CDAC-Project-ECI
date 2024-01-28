import { useEffect, useState } from "react";
import UserProfileComponent from "../Components/UserProfileComponent";
function ViewUserProfile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div>
      <UserProfileComponent profile={profile} />
    </div>
  );
}

export default ViewUserProfile;
