import UploadBgImg from "../components/shared/profile/UploadBgImg";
import UploadLogoImg from "../components/shared/profile/UploadLogoImg";
import EditProfile from "../components/shared/profile/EditProfile";
import GetBgImg from "../components/shared/profile/GetBgImg";
import AddAddress from "../components/shared/profile/AddAddress";
import GetLogoImg from "../components/shared/profile/GetLogoImg";
const Profile = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 relative ">
        <GetBgImg />
        <GetLogoImg  className="absolute bottom-0"/>
      </div>
      <UploadBgImg />
      <UploadLogoImg />
      <EditProfile />
      <AddAddress />
    </div>
  );
};

export default Profile;
