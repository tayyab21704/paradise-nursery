import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-content">
        <h1 style={{ fontSize: 48, marginBottom: 10 }}>Paradise Nursery</h1>
        <p style={{ fontSize: 18, lineHeight: 1.4 }}>
          Bring home fresh, vibrant houseplants — curated by category and ready
          to ship.
        </p>

        <button className="btn btn-primary" onClick={() => navigate("/plants")}>
          Get Started
        </button>

        <div style={{ marginTop: 18 }}>
          <Link to="/about" style={{ color: "white", textDecoration: "underline" }}>
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}
