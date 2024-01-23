import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import BasicTable from "../components/shared/table/BasicTable";

const Categories = () => {
  const [categories, setCategories] = useState([]);


  const CATEGORYLIST = [
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
      Header: "CATEGORY ",
      accessor: "title",
    },
    {
      Header: "DESCRIPTION",
      accessor: "description",
    },
  ]

  useEffect(() => {
    // Fetch food categories from the backend when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await api.get("/products/add-on-category/get/list");
        setCategories(response.data.categories);
        console.log(response.data.categories);
      } catch (error) {

        console.error("Error fetching food categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div  >
      <BasicTable dataProps={categories} columnsProps={CATEGORYLIST} />
    </div>
  );
};

export default Categories;
