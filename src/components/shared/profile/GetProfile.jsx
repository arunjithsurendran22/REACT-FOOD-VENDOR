import { useState, useEffect } from "react";
import api from "../../authorization/api";
import { toast } from "react-toastify";


const GetProfile = () => {
  const [vendorProfile, setVendorProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("profile/get-profile");
        setVendorProfile(response.data);
      } catch (error) {
        console.error("Failed to fetch profile", error);
        toast.error("Failed to fetch profile");
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
     
      {vendorProfile ? (
        <div className="text-white font-bold text-xl">
          <h1>{vendorProfile.name}</h1>
          <p>{vendorProfile.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetProfile;
