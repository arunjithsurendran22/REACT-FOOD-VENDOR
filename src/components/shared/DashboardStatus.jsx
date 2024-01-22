import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { FaIndianRupeeSign } from "react-icons/fa6";
const DashboardStatus = () => {
  return (
    <div className="flex gap-5 m-9">
      <div className="bg-white border-2 p-4 flex-1  flex items-center rounded-md h-20 shadow-xl">
        <IoBagHandleOutline size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Sales</span> <span><FaIndianRupeeSign/></span>
        </div>
      </div>
      <div className="bg-white border-2 p-4 flex-1  flex items-center rounded-md h-20 shadow-xl">
        <HiOutlineCurrencyRupee size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Expenses</span> <span><FaIndianRupeeSign/></span>
        </div>
      </div>
      <div className="bg-white border-2 p-4 flex-1  flex items-center rounded-md h-20 shadow-xl">
        <HiOutlineUsers size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Customers</span> <span>2</span>
        </div>
      </div>
      <div className="bg-white border-2 p-4 flex-1  flex items-center rounded-md h-20 shadow-xl">
        <TiShoppingCart size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Orders</span> <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatus;
