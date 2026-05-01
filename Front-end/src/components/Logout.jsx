import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ get previous route or fallback
  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem("User");
    toast.success("Logout Successfully");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <button
        className="text-white bg-red-500 py-1 px-6 rounded-md cursor-pointer hover:bg-red-600 transition duration-100"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
