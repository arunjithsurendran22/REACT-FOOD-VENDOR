import { useState, useEffect } from "react";
import api from "../../authorization/api"
import { toast } from "react-toastify";

function EditProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    newName: "",
    newMobile: "",
    newEmail: "",
    newPassword: "",
    oldPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    // Fetch user profile data
    api
      .get("/profile/get-profile")
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        toast.error("Failed to fetch user profile");
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      // Make a request to update the vendor profile
      const response = await api.post("/profile/update-profile", formData);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error updating profile:", error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>Error fetching user profile</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="font-bold text-3xl text-cyan-600 text-center my-10">
        Update Profile
      </h1>
      <div className="bg-slate-100 p-6 rounded-xl shadow-lg">


        <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
          <input
            type="text"
            name="newName"
            value={formData.newName}
            onChange={handleChange}
            placeholder="user name"
            className="bg-slate-100 p-3 rounded-xl shadow-lg"
          />

          <input
            type="text"
            name="newMobile"
            value={formData.newMobile}
            onChange={handleChange}
            placeholder="phone"
            className="bg-slate-100 p-3 rounded-xl shadow-lg"
          />

          <input
            type="email"
            name="newEmail"
            value={formData.newEmail}
            onChange={handleChange}
            placeholder="email"
            className="bg-slate-100 p-3 rounded-xl shadow-lg"
          />

          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="new password"
            className="bg-slate-100 p-3 rounded-xl shadow-lg"
          />

          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            placeholder="old password"
            className="bg-slate-100 p-3 rounded-xl shadow-lg"
          />

          <input
            type="password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            placeholder="confirm new password"
            className="bg-slate-100 p-3 rounded-xl shadow-lg"
          />

          <button
            type="submit"
            className="bg-slate-800 text-cyan-50 p-3 my-6 rounded-xl shadow-inner text-xl font-bold hover:opacity-90"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
