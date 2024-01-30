import { useState } from "react";
import { toast } from "react-toastify";
import api from "../authorization/api";


const AddPincodeDeliveryFee = ({ onClose }) => {
  
  const [pincode, setPincode] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/delivery/add-pincode/create", {
        pincode,
        deliveryFee,
      });
      
      onClose();
      toast.success("Successfully added pincode");
    } catch (error) {
      toast.error("Failed to add pincode");
      console.error("Failed to add pincode:", error);
    }
  };

  return (
    <div className=" max-w-md mx-auto mt-10  bg-white rounded-lg w-full h-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-72"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pincode"
          >
            Pincode
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            id="pincode"
            name="pincode"
            placeholder="Enter Pincode"
            value={pincode}
            required
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="deliveryFee"
          >
            Delivery Fee
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            id="deliveryFee"
            name="deliveryFee"
            placeholder="Enter Delivery Fee"
            value={deliveryFee}
            required
            onChange={(e) => setDeliveryFee(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-violet-300 text-white py-2 px-4 rounded-md hover:bg-violet-600 focus:outline-none focus:bg-gray-700"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddPincodeDeliveryFee;
