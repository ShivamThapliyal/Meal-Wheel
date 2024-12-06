import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HOme from "./pages/Home/HOme";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/Placeorder/Placeorder";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Login from "./components/login/Login.jsx";

function App() {
  const [show, setshow] = useState(false);
  return (
    <>
      {show ? <Login setshow={setshow} /> : <></>}
      <div className="w-[80%] m-auto">
        <Navbar setshow={setshow} />
        <Routes>
          <Route path="/" element={<HOme />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
