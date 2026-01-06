import { useState, useEffect, useReducer, useRef, type Dispatch } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import BikeProduct from "./pages/BikeProduct";
import CarProduct from "./pages/CarProduct";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <>
      <h1> Count: {renderCount.current}</h1>

      {/* <button onClick={}> Add </button> */}
      <nav>
        <Link to="/"> UseContext Example </Link> |{" "}
        <Link to="/about">UseReducer Example</Link> |{" "}
        <Link to="/products">UseCallback Example</Link> |{" "}
        <Link to="/contact/Yash">UseMemo Example</Link> |{" "}
        <Link to="/contact/Aryan">Custom Hook Example</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:firstname" element={<Contact />} />
        <Route path="/products" element={<Product />}>
          <Route path="bike" element={<BikeProduct />} />
          <Route path="car" element={<CarProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
