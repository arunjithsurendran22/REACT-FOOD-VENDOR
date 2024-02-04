import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import BasicTable from "../components/shared/table/BasicTable";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const ORDERDATA = [
    {
      Header: "ORDER ID",
      accessor: "orders.orderId",
    },
    {
      Header: "PAYMENT ID",
      accessor: "orders.paymentId",
    },
    {
      Header: "NAME",
      accessor: "name",
    },
    {
      Header: "EMAIL",
      accessor: "email",
    },
    {
      Header: "CONTACT",
      accessor: "mobile",
    },
    {
      Header: "STATUS",
      accessor: "orders.status",
    },
    {
      Header: "TOTAL",
      accessor: "orders.totalAmount",
    },
    {
      Header: "CREATED AT",
      accessor: "orders.createdAt",
      Cell: ({ value }) => <span>{new Date(value).toLocaleString()}</span>,
    },
    {
      Header: "VIEW",
      accessor: "view",
      Cell: ({ row }) => (
        <Link to={`/view-orders/${row.original.orders.orderId}`}>
          <button>
            <FaEye />
          </button>
        </Link>
      ),
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: ({ row }) => (
        <select
          value={row.original.orders.status}
          onChange={(e) =>
            handleStatusChange(row.original.orders.orderId, e.target.value)
          }
        >
          <option value="pending">Pending</option>
          <option value="readyToShip">ReadyToShip</option>
          <option value="OnTheWay">OnTheWay</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Accepted">Accepted</option>
        </select>
      ),
    },
  ];

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const response = await api.get("/products/orders-list/get");
        const orderListData = response.data.orderList;
        setOrderData(orderListData);

      } catch (error) {
        console.error("Failed to fetch Order List", error);
        toast.error("Failed to fetch Order List. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderList();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await api.post(`/products/update-order-status`, {
        orderId: orderId,
        newStatus: newStatus,
      });

      // Update the status for the specific order
      setOrderData((prevData) =>
        prevData.map((order) =>
          order.orders.orderId === orderId
            ? { ...order, orders: { ...order.orders, status: newStatus } }
            : order
        )
      );

      toast.success("Order status updated successfully");
    } catch (error) {
      console.error("Failed to update order status", error);
      toast.error("Failed to update order status. Please try again later.");
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BasicTable dataProps={orderData} columnsProps={ORDERDATA} />
      )}
    </div>
  );
};

export default Orders;
