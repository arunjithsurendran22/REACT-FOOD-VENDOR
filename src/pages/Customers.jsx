import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../components/authorization/api";

const Customers = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await api.get("/profile/customers-list/get");

        const { name, email, mobile, image } = response.data;
        setImage(image);
        setName(name);
        setEmail(email);
        setMobile(mobile);

        // Show success toast
        toast.success("User data fetched successfully");
      } catch (error) {
        console.error("Error fetching user details:", error);

        // Show error toast
        toast.error("Error fetching user details");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <table className="w-full border-collapse border-t border-r border-l border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border-b border-gray-300 text-center">
                Image
              </th>
              <th className="p-2 border-b border-gray-300 text-center">Name</th>
              <th className="p-2 border-b border-gray-300 text-center">
                Email
              </th>
              <th className="p-2 border-b border-gray-300 text-center">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-gray-300 text-center">
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16 object-cover rounded-full mx-auto"
                />
              </td>
              <td className="p-2 border-b border-gray-300 text-center">
                {name}
              </td>
              <td className="p-2 border-b border-gray-300 text-center">
                {email}
              </td>
              <td className="p-2 border-b border-gray-300 text-center">
                {mobile}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
