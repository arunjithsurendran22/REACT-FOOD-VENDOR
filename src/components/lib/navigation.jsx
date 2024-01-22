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

 export const columns = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "NAME",
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
  },
  {
    header: "EMAIL",
    accessorKey: "email",
  },
  {
    header: "GENDER",
    accessorKey: "gender",
  },
  {
    header: "IP ADDRESS",
    accessorKey: "ip_address",
  },
];

