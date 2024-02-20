import { useState, useEffect } from "react";
import api from "../../authorization/api";
import UploadBgImg from "./UploadBgImg";
import GetLogoImg from "./GetLogoImg";
import AddAddress from "./AddAddress";

const GetBgImg = () => {
  const [backgroundImage, setBackgroundImage] = useState({});
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState({});
  const [isAddAddressModalOpen, setIsAddAddressModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("image-controller/background-image/get");
        setBackgroundImage(response.data.backgroundImage);
      } catch (error) {
        console.error("Error fetching background image:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAddress = async () => {
      try {
        const response = await api.get("/profile/get-profile");
        setAddress(response.data.address);
      } catch (error) {
        console.log("Failed to get address:", error);
      }
    };

    fetchData();
    fetchAddress();
  }, []);

  const handleAddAddress = () => {
    setIsAddAddressModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddAddressModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Convert address object to array of key-value pairs
  const addressArray = Object.entries(address);

  return (
    <div style={{ position: "relative"}}>
      <div className="relative container mx-auto">
        <img
          src={backgroundImage}
          alt={backgroundImage}
          className="shadow-lg rounded w-screen h-80 object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <UploadBgImg />
        </div>
      </div>
      <div className="bg-white flex justify-between p-4">
        <div>
          <GetLogoImg />
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            {addressArray.map(([key, value]) => (
              <div key={key} className="mb-2">
                <strong>{key}: </strong>
                {value}
              </div>
            ))}
          </div>
          <button
            onClick={handleAddAddress}
            className="bg-blue-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add Address
          </button>
        </div>
      </div>
      {isAddAddressModalOpen && <AddAddress closeModal={handleCloseModal} />}
    </div>
  );
};

export default GetBgImg;
