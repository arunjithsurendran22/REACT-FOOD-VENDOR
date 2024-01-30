import { useEffect, useState } from "react";
import BasicTable from "../components/shared/table/BasicTable";
import { toast } from "react-toastify";
import api from "../components/authorization/api";
import AddPincodeModal from "../components/shared/AddPincodeModal";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const DeliveryOptions = () => {
  const [pincodeData, setPincodeData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const PINCODEHEADER = [
    {
      Header: "PINCODE",
      accessor: "pincode",
    },
    {
      Header: "DELIVERY FEE",
      accessor: "deliveryFee",
    },
    {
      Header: "ACTIONS",
      Cell: ({ row }) => (
        <div className="items-center flex justify-between w-52">
          <button
            onClick={() => handleEdit(row.original._id)}
            className="bg-gray-600 text-white px-6 my-2 rounded-md font-semibold"
          >
            EDIT
          </button>
          <button
            onClick={() => handleDelete(row.original._id)}
            className="bg-red-600 text-white px-4 rounded-md font-semibold"
          >
            DELETE
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchPincode = async () => {
      try {
        const response = await api.get("/delivery/add-pincode/get");
        setPincodeData(response.data.pincodeDeliveryFee);
      } catch (error) {
        toast.error("Failed to fetch pincode");
        console.error("Failed to fetch pincode:", error);
      }
    };
    fetchPincode();
  }, []);

  const handleDelete = async (pincodeId) => {
    try {
      await api.delete(`/delivery/add-pincode/delete/${pincodeId}`);
      toast.success("Pincode deleted successfully");
      // Fetch pincode data again after deletion
      const response = await api.get("/delivery/add-pincode/get");
      setPincodeData(response.data.pincodeDeliveryFee);
    } catch (error) {
      toast.error("Failed to delete pincode");
      console.error("Failed to delete pincode:", error);
    }
  };

  const handleAddPincode = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    
  };

  return (
    <div>
      <div className="flex justify-end mx-20 my-4">
        <button
          className="bg-violet-600 text-white py-2 px-4 rounded-md mb-4 flex justify-between items-center"
          onClick={handleAddPincode}
        >
          <IoMdAdd />
          Add Pincode
        </button>
        <AddPincodeModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
      <div>
        <BasicTable columnsProps={PINCODEHEADER} dataProps={pincodeData} />
      </div>
    </div>
  );
};

export default DeliveryOptions;
