import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orderData, setOrderData] = useState(null);
  const [selectStatus, setSelectStatus] = useState("pending");

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const response = await api.get("/products/orders-list/get");
        setOrderData(response.data);
      } catch (error) {
        toast.error("Failed to fetch Order List");
      }
    };
    fetchOrderList();
  }, []);

  const handleStatusChange = async (newStatus) => {
    try {
      await api.post(`/products/update-order-status`, {
        orderId: orderData.orderId,
        newStatus: newStatus,
      });
      setOrderData((prevData) => ({
        ...prevData,
        status: newStatus,
      }));
      toast.success("Order status updated successfully");
    } catch (error) {
      toast.error("Failed to update order status");
    }
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        {orderData ? (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="italic text-lg text-slate-600">
                <th className="py-2 px-4 border-b">OrderID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Contact</th>
                <th className="py-2 px-4 border-b">PaymentID</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Total</th>
                <th className="py-2 px-4 border-b">CreatedAt</th>
                <th className="py-2 px-4 border-b">Action</th>
                <th className="py-2 px-4 border-b">View</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-semibold">
                <td className="py-2 px-4 border-b">{orderData.orderId}</td>
                <td className="py-2 px-4 border-b">{orderData.name}</td>
                <td className="py-2 px-4 border-b">{orderData.email}</td>
                <td className="py-2 px-4 border-b">{orderData.mobile}</td>
                <td className="py-2 px-4 border-b">{orderData.paymentId}</td>
                <td className="py-2 px-4 border-b">{orderData.status}</td>
                <td className="py-2 px-4 border-b">₹ {orderData.total}</td>
                <td className="py-2 px-4 border-b">{orderData.createdAt}</td>
                <td className="py-2 px-4 border-b">
                  <select
                    value={orderData.status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="readyToShip">ReadyToShip</option>
                    <option value="OnTheWay">OnTheWay</option>
                    <option value="Delivered">delivered</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Accepted">Accepted</option>
                  </select>
                </td>
                
                <td>
                  <Link to="/view-orders">
                    <button>
                      <FaEye />
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
