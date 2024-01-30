import { useState, useEffect } from "react";
import api from "../../authorization/api";

const GetBgImg = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await api.get("image-controller/background-image/get");
        setBackgroundImage(response.data.backgroundImage);
      } catch (error) {
        console.error(
          "Error fetching background image:",
          error.response.data.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <div className="w-full md:w-8/12 shadow-sm border-2 border-solid">
      <div style={{ height: loading ? "20%" : "700px", overflow: "hidden" }}>
        {loading ? (
          <p>Loading background image...</p>
        ) : backgroundImage ? (
          <img
            src={backgroundImage.backgroundImage}
            alt="Background"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-16 bg-gray-200 rounded-lg"></div>
        )}
      </div>
    </div>
  );
};

export default GetBgImg;
