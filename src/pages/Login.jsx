import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../components/authorization/api";

function Login() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Validate input fields in real-time
    validateField(e.target.id, e.target.value);
  };

  const validateField = (field, value) => {
    let error = "";
    if (field === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else {
        error = "";
      }
    } else if (field === "password") {
      if (!value) {
        error = "Password is required";
      } else {
        error = "";
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const validateForm = () => {
    const emailError = errors.email;
    const passwordError = errors.password;
    return emailError === "" && passwordError === "";
  };

  const handleLoginToken = (token) => {
    localStorage.setItem("accessTokenVendor", token.accessTokenVendor);
    localStorage.setItem("refreshTokenVendor", token.refreshTokenVendor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await api.post("/profile/login", formData);
        console.log(response.data);
        if (response.data.message === "Login successful") {
          toast.success("Login Successfully");
          handleLoginToken(response.data);
          navigate("/");
        } else {
          toast.error(response.data.message);
          setFormData("");
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Login failed. Please try again.");
        }
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="mx-10 sm:mx-0">
        <h1 className="font-bold text-3xl text-gray-600 text-center my-20">
          LOGIN
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`bg-slate-100 p-3 rounded-xl shadow-lg ${
              errors.email && "border-red-500"
            }`}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email}</span>
          )}
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={`bg-slate-100 p-3 rounded-xl shadow-lg ${
              errors.password && "border-red-500"
            }`}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          <button
            type="submit"
            className="bg-gray-800 text-cyan-50 p-3 my-6 rounded-xl shadow-inner text-xl font-bold hover:opacity-90"
          >
            LOGIN
          </button>
        </form>
        <span className="my-5 italic">Don't have an Account ?</span>
        <Link to="/register">
          <span className="text-blue-600 mx-5 font-bold">Register</span>
        </Link>
      </div>
      <Link to="/forgot-password">
        <span className="italic text-red-700">Forgot password</span>
      </Link>
    </div>
  );
}

export default Login;
