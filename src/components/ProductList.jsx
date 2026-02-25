import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartCount, selectCartItems } from "../store/CartSlice.jsx";

const products = [
  // Indoor (6)
  { id: "in1", category: "Indoor", name: "Snake Plant", price: 299, thumbnail: "https://via.placeholder.com/80" },
  { id: "in2", category: "Indoor", name: "Pothos", price: 199, thumbnail: "https://via.placeholder.com/80" },
  { id: "in3", category: "Indoor", name: "ZZ Plant", price: 349, thumbnail: "https://via.placeholder.com/80" },
  { id: "in4", category: "Indoor", name: "Peace Lily", price: 279, thumbnail: "https://via.placeholder.com/80" },
  { id: "in5", category: "Indoor", name: "Spider Plant", price: 159, thumbnail: "https://via.placeholder.com/80" },
  { id: "in6", category: "Indoor", name: "Rubber Plant", price: 399, thumbnail: "https://via.placeholder.com/80" },

  // Succulents (6)
  { id: "su1", category: "Succulents", name: "Aloe Vera", price: 149, thumbnail: "https://via.placeholder.com/80" },
  { id: "su2", category: "Succulents", name: "Jade Plant", price: 179, thumbnail: "https://via.placeholder.com/80" },
  { id: "su3", category: "Succulents", name: "Echeveria", price: 129, thumbnail: "https://via.placeholder.com/80" },
  { id: "su4", category: "Succulents", name: "Haworthia", price: 139, thumbnail: "https://via.placeholder.com/80" },
  { id: "su5", category: "Succulents", name: "Sedum", price: 119, thumbnail: "https://via.placeholder.com/80" },
  { id: "su6", category: "Succulents", name: "Cactus Mix", price: 189, thumbnail: "https://via.placeholder.com/80" },

  // Flowering (6)
  { id: "fl1", category: "Flowering", name: "Anthurium", price: 499, thumbnail: "https://via.placeholder.com/80" },
  { id: "fl2", category: "Flowering", name: "Orchid", price: 699, thumbnail: "https://via.placeholder.com/80" },
  { id: "fl3", category: "Flowering", name: "Begonia", price: 259, thumbnail: "https://via.placeholder.com/80" },
  { id: "fl4", category: "Flowering", name: "Geranium", price: 229, thumbnail: "https://via.placeholder.com/80" },
  { id: "fl5", category: "Flowering", name: "Kalanchoe", price: 199, thumbnail: "https://via.placeholder.com/80" },
  { id: "fl6", category: "Flowering", name: "African Violet", price: 189, thumbnail: "https://via.placeholder.com/80" },
];

function Navbar() {
  const count = useSelector(selectCartCount);

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center", padding: 16, borderBottom: "1px solid #ddd" }}>
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">Cart</Link>

      <div style={{ marginLeft: "auto", fontWeight: 700 }}>
        🛒 {count}
      </div>
    </div>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const categories = [...new Set(products.map((p) => p.category))];

  const isAdded = (id) => cartItems.some((x) => x.id === id);

  return (
    <div>
      <Navbar />

      <div style={{ padding: 16, maxWidth: 1100, margin: "0 auto" }}>
        <h2>Product Listing</h2>

        {categories.map((cat) => (
          <div key={cat} style={{ marginTop: 24 }}>
            <h3>{cat}</h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
              {products
                .filter((p) => p.category === cat)
                .map((p) => (
                  <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 14 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <img src={p.thumbnail} alt={p.name} width="80" height="80" style={{ borderRadius: 10 }} />
                      <div>
                        <div style={{ fontWeight: 700 }}>{p.name}</div>
                        <div>₹ {p.price}</div>
                      </div>
                    </div>

                    <button
                      style={{ marginTop: 12, padding: "10px 12px", borderRadius: 10, cursor: "pointer" }}
                      disabled={isAdded(p.id)}
                      onClick={() => dispatch(addToCart(p))}
                    >
                      {isAdded(p.id) ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Navbar };
