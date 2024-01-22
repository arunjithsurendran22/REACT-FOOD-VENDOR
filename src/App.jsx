import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/shared/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";
import AddProduct from "./pages/AddProduct";
import ProductsList from "./pages/ProductsList";
import ViewOrders from "./components/shared/ViewOrders";
import BasicTable from "./components/shared/table/BasicTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/get-profile" element={<Profile />} />
          <Route path="/products-list" element={<ProductsList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/view-orders" element={<ViewOrders/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/table" element={<BasicTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;