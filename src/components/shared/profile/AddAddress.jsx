import { useState } from "react";
import api from "../../authorization/api";
import { toast } from "react-toastify";

const AddAddress = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    landmark: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/profile/add-address", address);
      setAddress({
        street: "",
        city: "",
        state: "",
        landmark: "",
        pincode: "",
      });
      toast.success("Successfully added address");
    } catch (error) {
      console.log(error, "failed to add address");
      toast.error("Failed to add address");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-white p-8 border rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Vendor Address</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              placeholder="street"
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              placeholder="city"
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              placeholder="state"
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="landmark"
              value={address.landmark}
              onChange={handleChange}
              placeholder="landmark"
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              placeholder="pincode"
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
