import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import BasicTable from "../components/shared/table/BasicTable";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  const ORDERDATA = [
    {
      Header: "ORDER ID",
      accessor: "orderId",
    },
    {
      Header: "PAYMENT ID",
      accessor: "paymentId",
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
      accessor: "status",
    },
    {
      Header: "TOTAL",
      accessor: "total",
    },
    {
      Header: "CREATED AT",
      accessor: "createdAt",
      Cell: ({ value }) => <span>{new Date(value).toLocaleString()}</span>,
    },
    {
      Header: "VIEW",
      accessor: "view",
      Cell: ({ row }) => (
        <Link to={`/view-orders/${row.original.orderId}`}>
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
          value={row.original.status}
          onChange={(e) =>
            handleStatusChange(row.original.orderId, e.target.value)
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
        toast.error("Failed to fetch Order List");
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
          order.orderId === orderId ? { ...order, status: newStatus } : order
        )
      );

      toast.success("Order status updated successfully");
    } catch (error) {
      toast.error("Failed to update order status");
    }
  };

  return (
    <div>
      <BasicTable dataProps={orderData} columnsProps={ORDERDATA} />
    </div>
  );
};

export default Orders;
