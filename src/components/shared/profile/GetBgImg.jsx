import { useState, useEffect } from "react";
import api from "../../authorization/api";
import UploadBgImg from "./UploadBgImg";
import GetLogoImg from "./GetLogoImg";

const GetBgImg = () => {
  const [backgroundImage, setBackgroundImage] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await api.get("image-controller/background-image/get");
        const { backgroundImage } = response.data
        setBackgroundImage(backgroundImage);
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
    <div
      className="relative container mx-auto flex justify-center h-96 "
      style={{ border: "2px solid yellow" }}
    >
      <img
        src={backgroundImage}
        alt={backgroundImage}
        className="shadow-lg rounded h-96 object-fill"
      />
      <div className="absolute  flex flex-col justify-between">
        <UploadBgImg />
        <div className=" mt-20" style={{ border: "2px solid green" }}>
          <GetLogoImg />
        </div>
      </div>
    </div>
  );
};

export default GetBgImg;
