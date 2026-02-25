import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../store/CartSlice.jsx";
import { Navbar } from "./ProductList";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div>
      <Navbar />

      <div style={{ padding: 16, maxWidth: 1000, margin: "0 auto" }}>
        <h2>Shopping Cart</h2>

        {items.length === 0 ? (
          <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
            <p>Your cart is empty.</p>
            <Link to="/plants">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div style={{ display: "grid", gap: 12 }}>
              {items.map((x) => (
                <div
                  key={x.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: 12,
                    padding: 14,
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                  }}
                >
                  <img src={x.thumbnail} alt={x.name} width="70" height="70" style={{ borderRadius: 10 }} />

                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800 }}>{x.name}</div>
                    <div>Unit Price: ₹ {x.price}</div>
                    <div style={{ marginTop: 6, fontWeight: 700 }}>
                      Item Total: ₹ {x.price * x.quantity}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <button onClick={() => dispatch(decreaseQty(x.id))} style={{ padding: "8px 10px" }}>
                      -
                    </button>
                    <div style={{ minWidth: 24, textAlign: "center", fontWeight: 800 }}>{x.quantity}</div>
                    <button onClick={() => dispatch(increaseQty(x.id))} style={{ padding: "8px 10px" }}>
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(x.id))}
                    style={{ padding: "10px 12px", borderRadius: 10, cursor: "pointer" }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18, padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
              <div style={{ fontSize: 18, fontWeight: 900 }}>Total Cart Amount: ₹ {total}</div>

              <div style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => alert("Coming Soon")}
                  style={{ padding: "12px 14px", borderRadius: 12, cursor: "pointer" }}
                >
                  Checkout
                </button>

                <Link to="/plants" style={{ padding: "12px 14px", border: "1px solid #ddd", borderRadius: 12 }}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
