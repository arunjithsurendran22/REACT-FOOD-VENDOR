import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import { toast } from "react-toastify";
import BasicTable from "../components/shared/table/BasicTable";
import { Link } from "react-router-dom";
import { MdSoupKitchen } from "react-icons/md";

const ProductsList = () => {
  const [productItems, setProductItems] = useState([]);

  //product list items
  const PRODUCTLIST = [
    {
      Header: "Image",
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
      Header: "Product Title",
      accessor: "productTitle",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <div className="flex justify-between w-40 ">
          <Link to={`/edit-product/${row.original._id}`}>
            <button className="bg-blue-500 text-white w-16 py-1 rounded-lg font-bold italic shadow hover:bg-blue-700">
              EDIT
            </button>
          </Link>
          <button
            onClick={() => handleDelete(row.original._id)}
            className="bg-red-500 text-white w-16 rounded-lg font-bold italic shadow hover:bg-red-700"
          >
            DELETE
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchProductItems = async () => {
      try {
        const response = await api.get("/products/add-on-item/get/list");
        setProductItems(response.data);
      } catch (error) {
        toast.error("Failed to fetch Product Items");
      }
    };
    fetchProductItems();
  }, []);

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await api.delete(
          `/products/add-on-item/delete/${productId}`
        );
        console.log(response);
        toast.success("Product item deleted successfully");
        setProductItems((prevItems) =>
          prevItems.filter((item) => item._id !== productId)
        );
      } catch (error) {
        // Handle error, show toast, etc.
        toast.error("Failed to delete product item");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-end mx-20 my-5 ">
        <Link to="/add-product">
          <button className="flex  justify-between items-center border border-gray-300 h-10  w-56 px-10 font-bold bg-white  shadow-lg rounded-md ">
            <MdSoupKitchen />
            <p>ADD PRODUCT</p>
          </button>
        </Link>
      </div>
      <div></div>
      <BasicTable dataProps={productItems} columnsProps={PRODUCTLIST} />
    </div>
  );
};

export default ProductsList;
