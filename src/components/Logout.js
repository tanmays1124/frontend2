import { useNavigate } from "react-router-dom";

const Logout = ({ key, setKey }) => {
  setKey("");
  const navigate = useNavigate();
  navigate("/");

  return <></>;
};

export default Logout;
