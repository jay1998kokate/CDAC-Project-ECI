import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const SignOutComponent = () => {
  const history = useHistory();
  useEffect(() => {
    localStorage.clear();
    window.location.href = "/";
  }, []);

  return <div></div>;
};

export default SignOutComponent;
