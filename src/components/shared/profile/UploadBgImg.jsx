import { useState } from "react";
import api from "../../authorization/api"
import { toast } from "react-toastify";

const UploadBgImg = () => {
  const [bgImg, setBgImg] = useState(null);

  const handleBgImage = (e) => {
    setBgImg(e.target.files[0]);
  };

  const uploadBgImg = async () => {
    try {
      const formData = new FormData();
      formData.append("image", bgImg);

      const responseBgImg = await api.post("/image-controller/background-image/add", formData);

      // Update the state and show success toast
      setBgImg(responseBgImg.data);
      toast.success("Successfully added background image");
    } catch (error) {
      // Handle the error and show an error toast
      console.error(error, "Failed to add background image");
      toast.error("Failed to add background image");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Background Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleBgImage}
          className="mb-4"
        />
        <button
          onClick={uploadBgImg}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Upload Background Image
        </button>
      </div>
    </div>
  );
};

export default UploadBgImg;
