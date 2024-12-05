// src/components/CartItem.js
import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div
      className="cart-item"
      style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "50px", height: "auto", objectFit: "cover" }}
      />
      <div style={{ marginLeft: "20px" }}>
        <h3>{item.name}</h3>
        <p>Giá: {item.price.toLocaleString()} VNĐ</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={handleDecrease} style={{ marginRight: "10px" }}>
            -
          </button>
          <p>{item.quantity}</p>
          <button onClick={handleIncrease} style={{ marginLeft: "10px" }}>
            +
          </button>
        </div>
        <p>Tổng tiền: {(item.price * item.quantity).toLocaleString()} VNĐ</p>{" "}
        {/* Hiển thị tổng tiền cho sản phẩm */}
      </div>
      <button onClick={handleRemove} style={{ marginLeft: "20px" }}>
        Xóa
      </button>
    </div>
  );
};

export default CartItem;
