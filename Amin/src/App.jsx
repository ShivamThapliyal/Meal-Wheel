import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/sidebar/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/order/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
