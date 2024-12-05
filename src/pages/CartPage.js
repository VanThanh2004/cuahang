// src/pages/CartPage.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); // Trạng thái thanh toán thành công

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleConfirmPurchase = () => {
    // Đánh dấu thanh toán thành công
    setIsPaymentSuccessful(true);
    dispatch(clearCart()); // Sau khi thanh toán, xóa giỏ hàng
  };

  return (
    <div className="cart-page">
      <h2>Giỏ Hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn hiện đang trống.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div>
            <h3>
              Tổng tiền giỏ hàng:{" "}
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}{" "}
              VNĐ
            </h3>
          </div>
          <button onClick={handleClearCart}>Xóa tất cả sản phẩm</button>
          <button
            onClick={handleConfirmPurchase}
            style={{
              marginLeft: "10px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            Xác nhận thanh toán
          </button>
        </div>
      )}

      {isPaymentSuccessful && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "lightgreen",
            color: "green",
          }}
        >
          <h3>Thanh toán thành công! Cảm ơn bạn đã mua hàng.</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
