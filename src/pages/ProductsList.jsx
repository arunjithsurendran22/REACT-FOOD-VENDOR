import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import { toast } from "react-toastify";

const ProductsList = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const fetchProductItems = async () => {
      try {
        const response = await api.get("/products/add-on-item/get/list");
        setProductItems(response.data);
        console.log(response.data);
      } catch (error) {
        toast.error("Failed to fetch Product Items");
      }
    };
    fetchProductItems()
  },[]);

  return <div></div>;
};

export default ProductsList;
