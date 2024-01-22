import { useState, useEffect } from "react";
import api from "../../authorization/api";
import { toast } from "react-toastify";
import GetProfile from "./GetProfile";

const GetLogoImg = () => {
  const [logoImg, setLogoImg] = useState(null);

  useEffect(() => {
    const fetchLogoImage = async () => {
      try {
        const response = await api.get("image-controller/logo-image/get");
        setLogoImg(response.data);
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
    <div className="bg-black w-full md:w-8/12 h-40 rounded-md absolute bottom-0 flex flex-col justify-center">
      <div className="flex items-center md:w-6/12 justify-around">
        {logoImg && logoImg.logoImage && (
          <div className=" w-32">
            <img
              src={logoImg.logoImage.logoImage}
              alt="Logo"
              className=" max-w-full rounded-lg"
            />
          </div>
        )}
        <div>
          <GetProfile/>
        </div>
      </div>
      {!logoImg && <p>Loading logo image...</p>}
    </div>
  );
};

export default GetLogoImg;
