import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/authorization/api";
import { Link } from "react-router-dom";
import BasicTable from "../components/shared/table/BasicTable";

const ProductsList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products/add-on-item/get/list");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <BasicTable />
    </div>
  );
};

export default ProductsList;
