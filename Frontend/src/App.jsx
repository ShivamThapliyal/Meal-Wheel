import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HOme from "./pages/Home/HOme";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/Placeorder/Placeorder";

function App() {
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HOme />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<Placeorder />} />
      </Routes>
    </div>
  );
}

export default App;
