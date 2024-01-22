// Header.js
import { IoIosSearch } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = ({ name, showSidebar, setShowSidebar }) => {
  return (
    <div className="bg-violet-700 h-16 px-4 flex justify-between items-center text-white sticky top-0 z-50">
      {showSidebar ? (
        <button onClick={() => setShowSidebar(false)} className="text-white">
          ☰
        </button>
      ) : (
        <button onClick={() => setShowSidebar(true)} className="text-white">
          ☰
        </button>
      )}
      <div className="relative">
        <IoIosSearch fontSize={20} className="absolute top-3 mx-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 border border-gray-300 w-64 rounded-2xl px-9"
        />
      </div>
      <div className="flex justify-between items-center gap-3 mr-2">
        <IoChatbubblesOutline />
        <IoMdNotificationsOutline fontSize={25} />
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/get-profile">{name ? name : "profile"}</Link>
        <Logout />
      </div>
    </div>
  );
};

export default Header;
