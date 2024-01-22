import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch food categories from the backend when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await api.get("/products/add-on-category/get/list");
        setCategories(response.data.categories);
      } catch (error) {
        setError("Failed to fetch food categories");
        console.error("Error fetching food categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-gray-300 h-full">
      <div className="flex justify-end">
        <Link to="/add-category">
          <button className="text-2xl border flex">
            Add Category
            <IoAddSharp />
          </button>
        </Link>
      </div>

      <div className="m-20 p-8  rounded-md shadow-xl bg-stone-100 border border-gray-400">
        <h1 className="text-2xl font-bold italic mb-4">Food Categories</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <table className="min-w-full bg-sidebar border-gray-900 rounded-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-bold italic">Image</th>
              <th className="py-2 px-4 border-b font-bold italic">Title</th>
              <th className="py-2 px-4 border-b font-bold italic">Description</th>
            </tr>
          </thead>
          <tbody className="font-bold">
            {categories.map((category) => (
              <tr key={category._id} className="">
                <td className="py-2 px-4 border-b flex justify-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-16 h-16 object-fill rounded-lg border border-gray-400"
                  />
                </td>
                <td className="py-2 px-4 border-b text-center">{category.title}</td>
                <td className="py-2 px-4 border-b text-center">{category.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
