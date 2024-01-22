import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../authorization/api";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/profile/profile-logout");
      toast.success("successfully logout");
      navigate("/login")
    } catch (error) {
      console.log(error, "Failed to logout");
      toast.error("Failed to ");
    }
  };
  return (
    <div>
      <button onClick={handleLogout} >
        Logout
      </button>
    </div>
  );
};

export default Logout;
