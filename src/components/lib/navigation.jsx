import { RxDashboard } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { PiUsersThree } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { MdOutlineSettings } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";

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
export const COLUMNS = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: ({ value }) =>
      value ? (
        <img src={value} alt="User" style={{ width: "50px", height: "50px" }} />
      ) : null,
  },
  {
    Header: "first_name",
    accessor: "first_name",
  },
  {
    Header: "last_name",
    accessor: "last_name",
  },
  {
    Header: "email",
    accessor: "email",
  },
  {
    Header: "gender",
    accessor: "gender",
  },
  {
    Header: "ip_address",
    accessor: "ip_address",
  },
];
