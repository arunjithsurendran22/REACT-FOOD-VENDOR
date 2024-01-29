import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../authorization/api";

const DashboardStatus = () => {
  const [customerCount, setCustomerCount] = useState("");
  const [orderCount ,setOrderCount] =useState("")


  useEffect(() => {
    const fetchCustomerCount = async () => {
      try {
        const response = await api.get("/dashboard/customers-count");
        setCustomerCount(response.data.customerCount);
        setOrderCount(response.data.orderCount)
      } catch (error) {
        toast.error("failed to fectch customer count");
        console.log("failed to fectch customer count");
      }
    };
    fetchCustomerCount();
  },[]);

  return (
    <div className="flex gap-5 m-9">
      <div className="bg-white border-2 p-4 flex-1  flex items-center rounded-md h-20 shadow-xl">
        <IoBagHandleOutline size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Sales</span>{" "}
          <span>
            <FaIndianRupeeSign />
          </span>
        </div>
      </div>
      <div className="bg-white border-2 p-4 flex-1  flex items-center rounded-md h-20 shadow-xl">
        <HiOutlineCurrencyRupee size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Expenses</span>{" "}
          <span>
            <FaIndianRupeeSign />
          </span>
        </div>
      </div>
      <div className="bg-white border-2 p-4 flex-1  flex items-center rounded-md h-20 shadow-xl">
        <HiOutlineUsers size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Customers</span>{" "}
          <span>{customerCount}</span>
        </div>
      </div>
      <div className="bg-white border-2 p-4 flex-1  flex items-center rounded-md h-20 shadow-xl">
        <TiShoppingCart size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Orders</span>{" "}
          <span>{orderCount}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatus;
