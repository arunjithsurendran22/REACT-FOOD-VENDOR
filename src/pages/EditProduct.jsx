import { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import api from "../components/authorization/api";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { productId } = useParams();
  const navigate =useNavigate()
  const [productTitle, setProductTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [specificProduct, setSpecificProduct] = useState({});

  
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await api.get(
          `/products/add-on-item/get/specific-product/${productId}`
        );
        const categoryList = await api.get(
          "/products/add-on-category/get/list"
        );

        setSpecificProduct(response.data);
        setCategories(categoryList.data.categories);
      } catch (error) {
        toast.error("Failed to fetch specific product");
      }
    };
    fetchProductDetails();
  }, [productId]);

  useEffect(() => {
    setProductTitle(specificProduct.productTitle || "");
    setDescription(specificProduct.description || "");
    setPrice(specificProduct.price || "");
    setQuantity(specificProduct.quantity || "");
    setSelectedCategory(specificProduct.category || "");
  }, [specificProduct]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCategory) {
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
      await api.put(`/products/add-on-item/update/${productId}`, formData);
      toast.success("Product item updated successfully");
      navigate("/products-list")
    } catch (error) {
      console.error("Error updating product item:", error);
      setError("Failed to update product item");
      toast.error("Failed to update product item");
    }
  };

  return (
    <div className="bg-stone-200 flex flex-row justify-center items-center">
      <div className="md:w-8/12 my-7">
        <form
          onSubmit={handleSubmit}
          className="p-10 rounded-md shadow-xl bg-white border border-gray-400"
        >
          <h1 className="text-2xl font-bold mb-4 text-black italic">
            EDIT PRODUCT ITEM
          </h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}

          <div className="mb-4">
            <input
              type="text"
              id="productTitle"
              name="productTitle"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
              placeholder={productTitle}
              className="mt-1 p-2 border w-full rounded-md"
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
            />
          </div>
          <div className="mb-4">
            <select
              name="category"
              id="Category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md"
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
            />
          </div>
          <button
            type="submit"
            className="bg-violet-400 text-white px-4 py-2 rounded-md hover:bg-violet-700"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
