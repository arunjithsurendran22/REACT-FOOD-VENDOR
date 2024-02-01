import { RxDashboard } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { PiUsersThree } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { MdOutlineSettings } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { GiPostOffice } from "react-icons/gi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <RxDashboard />,
  },
  {
    key: "categories",
    label: "Categories",
    path: "/categories",
    icon: <MdOutlineFastfood />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products-list",
    icon: <BsCart4 />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <CiViewList />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <PiUsersThree />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <TiMessages />,
  },
  {
    key: "delivery-options",
    label: "Delivery Options",
    path: "/delivery-options",
    icon: <GiPostOffice />,
  },
  {
    key: "working-hours",
    label: "Working Hours",
    path: "/working-hours",
    icon: <GiPostOffice />,
  },
  {
    key: "Coupon",
    label: "Coupon",
    path: "/coupon",
    icon: <GiPostOffice />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <MdOutlineSettings />,
  },
  {
    key: "support",
    label: "Support",
    path: "/support",
    icon: <BiSupport />,
  },
  {
    key: "logout",
    label: "Logout",
    path: "/logout",
    icon: <MdLogout />,
  },
];



