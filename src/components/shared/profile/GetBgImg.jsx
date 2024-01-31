import { useState, useEffect } from "react";
import api from "../../authorization/api";
import UploadBgImg from "./UploadBgImg";
import GetLogoImg from "./GetLogoImg";
import UploadLogoImg from "./UploadLogoImg";

const GetBgImg = () => {
  const [backgroundImage, setBackgroundImage] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await api.get("image-controller/background-image/get");
        const { image } = response.data.backgroundImage;
        setBackgroundImage(image);
      } catch (error) {
        console.error("Error fetching background image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBackgroundImage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative container mx-auto flex justify-center">
      <img
        src={backgroundImage}
        alt={backgroundImage}
        className="mx-auto shadow-lg rounded"
      />
      <div className="absolute top-72 h-96  w-8/12 flex flex-col justify-between" style={{border:"2px solid yellow"}}>
        <UploadBgImg />
        <div className="" style={{border:"2px solid yellow"}} >
          <GetLogoImg />
        </div>
      </div>
    </div>
  );
};

export default GetBgImg;
