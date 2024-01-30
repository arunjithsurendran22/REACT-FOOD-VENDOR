import { useState } from "react";
import api from "../../authorization/api";
import { toast } from "react-toastify";
import { BsPlus } from "react-icons/bs"; // Import plus icon from react-icons

const UploadBgImg = () => {
  const [bgImg, setBgImg] = useState(null);

  const handleBgImage = (e) => {
    setBgImg(e.target.files[0]);
    // Automatically upload image when selected
    uploadBgImg(e.target.files[0]);
  };

  const uploadBgImg = async (selectedImg) => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImg);

      const responseBgImg = await api.post(
        "/image-controller/background-image/add",
        formData
      );

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
    <div className=" mx-auto p-8">
      <div>
        <label className=" text-white p-10 cursor-pointer inline-flex items-center shadow-lg ">
          <BsPlus className="mr-2" />
          <input
            type="file"
            accept="image/*"
            onChange={handleBgImage}
            className="hidden"
            required
          />
        </label>
      </div>
    </div>
  );
};

export default UploadBgImg;
