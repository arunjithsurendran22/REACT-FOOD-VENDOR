import { useState } from "react";
import api from "../../authorization/api";
import { toast } from "react-toastify";
import { BsPlus } from "react-icons/bs"; // Import plus icon from react-icons

const UploadLogoImg = () => {
  const [logoImg, setLogoImg] = useState(null);

  const handleLogoImage = (e) => {
    setLogoImg(e.target.files[0]);
    // Automatically upload image when selected
    uploadLogoImg(e.target.files[0]);
  };

  const uploadLogoImg = async (selectedImg) => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImg);

      const responseLogoImg = await api.post(
        "/image-controller/logo-image/add",
        formData
      );

      // Update the state and show success toast
      setLogoImg(responseLogoImg.data);
      toast.success("Successfully added logo image");
    } catch (error) {
      // Handle the error and show an error toast
      console.error(error, "Failed to add logo image");
      toast.error("Failed to add logo image");
    }
  };

  return (
    <div className="mx-auto p-8">
      <div>
        <label className="text-white p-10 cursor-pointer inline-flex items-center shadow-lg">
          <BsPlus className="mr-2" />
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoImage}
            className="hidden"
            required
          />
        </label>
      </div>
    </div>
  );
};

export default UploadLogoImg;
