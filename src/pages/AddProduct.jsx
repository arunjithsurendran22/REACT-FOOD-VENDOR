import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../components/authorization/api";

const AddProduct = () => {
  const navigate = useNavigate();

  const [productTitle, setProductTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);

  const categoryId = selectedCategory;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/products/add-on-category/get/list");
        console.log(response.data.categories);
        setCategories(response.data.categories);
      } catch (error) {
        setError("Failed to fetch categories");
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleFileChange = (e) => {
    // Handle image file input change
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryId) {
      setError("Please select a category");
      return;
    }

    const formData = new FormData();
    formData.append("productTitle", productTitle);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity); 
    formData.append("categoryId", selectedCategory);
    formData.append("image", image);

    try {
      const response = await api.post(
        `/products/add-on-item/create/${categoryId}`,
        formData
      );

      console.log(response);
      navigate("/products-list");
      toast.success("Product item added successfully");
    } catch (error) {
      console.error("Error adding product item:", error);
      setError("Failed to add product item");
      toast.error("Failed to add product item");
    }
  };

  return (
    <div className="bg-stone-200">
      <div className="p-8 flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="border-1 p-10 rounded-md shadow-xl w-11/12 bg-white"
        >
          <h1 className="text-2xl font-bold mb-4 text-black">
            Add Product Item
          </h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}

          <div className="mb-4">
            <input
              type="text"
              id="productTitle"
              name="productTitle"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
              placeholder="Title"
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="mt-1 p-2 border w-full rounded-md resize-y word-wrap break-word"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <select
              name="category"
              id="Category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
