import { useState, useEffect } from "react";
import api from "../authorization/api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ViewOrders = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userAddress, setUserAddress] = useState({});
  const { orderId } = useParams();

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        // Fetch order details
        const response = await api.get(`/products/orders-list/address-products/get/${orderId}`);
        const { cartItems: fetchedCartItems, address: fetchedAddress } = response.data;
        
        // Update state with fetched data
        setCartItems(fetchedCartItems);
        setUserAddress(fetchedAddress);
      } catch (error) {
        toast.error("Failed to fetch Order List");
      }
    };

    fetchOrderList();
  }, [orderId]); 

  return (
    <div className="flex space-x-8 p-4 rounded-lg m-16">
      <div className="flex-1 bg-white p-4 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4">User Order Items</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item._id} className="flex items-center space-x-4 py-2 border-b">
              <img src={item.image} alt={item.productTitle} className="w-20 h-20 rounded-full object-cover" />
              <div>
                <p className="text-lg font-bold italic">{item.productTitle}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Address</h2>
        <p>Street: {userAddress.street}</p>
        <p>City: {userAddress.city}</p>
        <p>State: {userAddress.state}</p>
        <p>LandMark: {userAddress.landmark}</p>
        <p>Pincode: {userAddress.pincode}</p>
      </div>
    </div>
  );
};

export default ViewOrders;
