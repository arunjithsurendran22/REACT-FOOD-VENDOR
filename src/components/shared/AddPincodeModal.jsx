import AddPincodeDeliveryFee from "./AddPincodeDeliveryFee";
import { IoMdClose } from "react-icons/io";

const AddPincodeModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-3/12 h-3/3">
        <div className="flex justify-end">
          <button className="absolute text-black " onClick={onClose}>
            <IoMdClose className="text-red-600" />
          </button>
        </div>
        <AddPincodeDeliveryFee onClose={onClose} /> 
      </div>
    </div>
  );
};

export default AddPincodeModal;
