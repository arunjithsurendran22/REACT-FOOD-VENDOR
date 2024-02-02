import AddAddress from "../components/shared/profile/AddAddress";
import GetBgImg from "../components/shared/profile/GetBgImg";

const Profile = () => {
  return (
    <div className="w-full md:w-8/12 mx-auto h-96 my-20"style={{border:"2px solid red"}}>
      <div>
        <GetBgImg />
      </div>
      <AddAddress/>
    </div>
  );
};

export default Profile;
