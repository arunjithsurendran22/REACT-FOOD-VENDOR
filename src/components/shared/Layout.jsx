// Layout.js
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../authorization/api";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { toast } from "react-toastify";

const Layout = () => {
  const [name, setName] = useState(null);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("profile/get-profile");
        setName(response.data.name);
      } catch (error) {
        console.error("Failed to fetch profile", error);
        toast.error("Failed to fetch profile");
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden">
      {showSidebar && <Sidebar />}
      <div className="flex-1 overflow-y-auto">
        <Header name={name} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
