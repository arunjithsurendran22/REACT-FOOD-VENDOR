import { useState, useEffect } from "react";
import api from "../../authorization/api";
import UploadBgImg from "./UploadBgImg";

const GetBgImg = () => {
  const [backgroundImage, setBackgroundImage] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await api.get("image-controller/background-image/get");
        console.log(response.data);
        setBackgroundImage(response.data.backgroundImage);
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
    <div className="flex justify-center w-full md:w-6/12 h-96 my-5  mx-auto shadow-lg border border-gray-400 rounded-md relative ">
      {Array.isArray(backgroundImage) ? (
        backgroundImage.map((item) => (
          <img key={item._id} src={item.image} alt="" />
        ))
      ) : (
        // If not an array, assume it's a single object
        <img src={backgroundImage.image} alt="" />
      )}
      <div className="absolute items-center top-20">
        <UploadBgImg/>.
      </div>
    </div>

  );
};

export default GetBgImg;
