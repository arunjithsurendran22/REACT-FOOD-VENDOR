import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../components/authorization/api";
import BasicTable from "../components/shared/table/BasicTable";

const Customers = () => {
  const [customerProfile, setCustomerProfile] = useState([]);

  console.log(customerProfile);
  //product list items
  const CUSTOMERPROFILE = [
    {
      Header: "IMAGE",
      accessor: "image",
      Cell: ({ value }) =>
        value ? (
          <img
            src={value}
            alt="User"
            style={{ width: "50px", height: "50px", borderRadius: "5px" }}
          />
        ) : null,
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
  ];

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await api.get("/profile/customers-list/get");
        console.log(response.data);

        setCustomerProfile(response.data.customerDetails);
      } catch (error) {
        console.error("Error fetching user details:", error);
        toast.error("Error fetching user details");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <BasicTable dataProps={customerProfile} columnsProps={CUSTOMERPROFILE} />
    </div>
  );
};

export default Customers;
