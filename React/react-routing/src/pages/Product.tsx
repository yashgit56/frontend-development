import { NavLink, Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <nav>
        <NavLink to="/products/car">Car Products</NavLink> |{" "}
        <NavLink to="/products/bike">Bike Products</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Product;
