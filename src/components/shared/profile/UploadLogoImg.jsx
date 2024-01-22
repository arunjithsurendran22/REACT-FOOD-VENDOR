import { useState } from "react";
import api from "../../authorization/api"
import { toast } from "react-toastify";

const UploadLogoImg = () => {
  const [logoImg, setLogoImg] = useState(null);

  const handleLogoImage = (e) => {
    setLogoImg(e.target.files[0]);
  };

  const uploadLogoImg = async () => {
    try {
      const formData = new FormData();
      formData.append("image", logoImg);

      // Update the API endpoint according to your backend
      const responseLogoImg = await api.post("/image-controller/logo-image/add", formData);
      setLogoImg(responseLogoImg.data)
      // Show success toast
      toast.success("Successfully added logo image");
    } catch (error) {
      // Handle the error and show an error toast
      console.error(error, "Failed to add logo image");
      toast.error("Failed to add logo image");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Logo Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleLogoImage}
        className="mb-4"
      />
      <button
        onClick={uploadLogoImg}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Upload Logo Image
      </button>
    </div>
  );
};

export default UploadLogoImg;
