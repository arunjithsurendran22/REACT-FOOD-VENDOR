import { useState, useEffect } from "react";
import api from "../../authorization/api";
import { toast } from "react-toastify";
import UploadLogoImg from "./UploadLogoImg";

const GetLogoImg = () => {
  const [logoImg, setLogoImg] = useState(null);

  useEffect(() => {
    const fetchLogoImage = async () => {
      try {
        const response = await api.get("image-controller/logo-image/get");
        const { logoImage } = response.data;

        setLogoImg(logoImage);
      } catch (error) {
        console.error(
          "Failed to fetch logo image",
          error.response.data.message
        );
        toast.error("Failed to fetch logo image");
      }
    };
    fetchLogoImage();
  }, []);

  return (
    <div className="w-40 text-center mx-auto relative" >
      <img src={logoImg} alt={logoImg} className="mb-4 rounded-full w-32 h-32" />
      <div className="absolute inset-0 flex items-center justify-center">
        <UploadLogoImg />
      </div>
    </div>
  );
};

export default GetLogoImg;
